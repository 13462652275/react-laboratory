const { paths } = require('react-app-rewired');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const fs = require('fs');
const globby = require('globby');
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);


module.exports = function (config) {
  const env = process.env.NODE_ENV;
  const entriesPath = globby.sync([resolveApp('src') + '/pages/*/index.js'], {cwd: process.cwd()});

  // 入口文件路径
  paths.entriesPath = entriesPath;

  // 获取指定路径下的入口文件
  function getEntries() {
    const entries = {};
    const files = paths.entriesPath;

    files.forEach(filePath => {
      const tmp = filePath.split('/');
      const name = tmp[tmp.length - 2]
        .replace(/([A-Z])/g, function(a, b, index) {
          return index ? ('-' + a) : a;
        })
        .toLowerCase();

      if (env === 'production') {
        entries[name] = [
          filePath,
        ];
      } else {
        entries[name] = [
          require.resolve('react-dev-utils/webpackHotDevClient'),
          filePath,
        ];
      }
    });
    return entries;
  }


  let htmlPlugin; // 配置 HtmlWebpackPlugin 插件, 指定入口文件生成对应的 html 文件
  const entries = getEntries(); // 入口文件对象

  htmlPlugin = Object.keys(entries).map(item => {
    const options = {
      inject: true,
      template: paths.appHtml,
      filename: item + '.html',
      chunks: [item],
    };

    if (env === 'production') {
      options.minify = {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      };
    }

    return new HtmlWebpackPlugin(options);
  });

  if (env === 'production') {
    for (let i = 0; i < config.plugins.length; i++) {
      let item = config.plugins[i];

      // 更改输出的样式文件名
      if (item.constructor.toString().indexOf('class MiniCssExtractPlugin') > -1) {
        item.options.filename = 'static/css/[name].[contenthash:8].css';
        item.options.chunkFilename = 'static/css/[name].[contenthash:8].chunk.css';
      }

      // SWPrecacheWebpackPlugin: 使用 service workers 缓存项目依赖
      if (item.constructor.toString().indexOf('function GenerateSW') > -1) {
        // 更改输出的文件名
        item.config.precacheManifestFilename = 'precache-manifest.[manifestHash].js';
      }
    }

    // 更改生产模式输出的文件名
    config.output.filename = 'static/js/[name].[contenthash:8].js';
    config.output.chunkFilename = 'static/js/[name].[contenthash:8].chunk.js';

  } else {
    // 更改开发模式输出的文件名
    config.output.filename = 'static/js/[name].[hash:8].js';
    config.output.chunkFilename = 'static/js/[name].[hash:8].chunk.js';
  }

  // 修改入口
  config.entry = entries;

  // 修改 HtmlWebpackPlugin 插件
  for (let i = 0; i < config.plugins.length; i++) {
    let item = config.plugins[i];
    if (item.constructor.toString().indexOf('class HtmlWebpackPlugin') > -1) {
      config.plugins.splice(i, 1);
    }
  }

  config.plugins.push(...htmlPlugin);

  // 分析打包内容
  // config.plugins.push(new BundleAnalyzerPlugin());


  // 修改 build/static/media/ 路径下的文件名
  for (let i = 0; i < config.module.rules[2].oneOf.length; i++) {
    const item = config.module.rules[2].oneOf[i];
    if (!item.options || !item.options.name) {
      continue;
    }
    let str = item.options.name.toString();
    if (str.indexOf('static/media/[name].[hash:8].[ext]') > -1) {
      item.options.name = 'static/media/[name].[hash:8].[ext]';
    }
  }

  // 修改代码拆分规则，详见 webpack 文档：https://webpack.js.org/plugins/split-chunks-plugin/#optimization-splitchunks
  config.optimization = {
    splitChunks: {
      // 将所有入口点共同使用到的、次数超过 2 次的模块，创建为一个名为 commons 的代码块
      // 这种配置方式可能会增大初始的捆绑包，比如有些公共模块在首页其实并未用到，但也会打包进来，会降低首页的加载性能
      // 建议将非必需模块使用 import() 的方式动态加载，提升页面的加载速度
      // cacheGroups: {
      //   commons: {
      //     name: 'commons',
      //     chunks: 'initial',
      //     minChunks: 2
      //   }
      // }

      // 将所有使用到的 node_modules 中的模块包打包为 vendors 代码块。（不推荐）
      // 这种方式可能会产生一个包含所有外部依赖包的较大代码块，建议只包含核心框架和工具函数代码，其他依赖项动态加载
      // cacheGroups: {
      //   commons: {
      //     test: /[\\/]node_modules[\\/]/,
      //     name: 'vendors',
      //     chunks: 'all'
      //   }
      // }

      cacheGroups: {
        // 通过正则匹配，将 react react-dom echarts-for-react 等公共模块拆分为 vendor
        // 这里仅作为示例，具体需要拆分哪些模块需要根据项目需要进行配置
        // 可以通过 BundleAnalyzerPlugin 帮助确定拆分哪些模块包
        vendor: {
          test: /[\\/]node_modules[\\/](react|react-dom|echarts-for-react)[\\/]/,
          name: 'vendor',
          chunks: 'all', // all, async, and initial
        },

        // 将 (common|reset|nprogress) 文件合并成一个文件, mini-css-extract-plugin 的用法请参见文档：https://www.npmjs.com/package/mini-css-extract-plugin
        // MiniCssExtractPlugin 会将动态 import 引入的模块的样式文件也分离出去，将这些样式文件合并成一个文件可以提高渲染速度
        // 其实如果可以不使用 mini-css-extract-plugin 这个插件，即不分离样式文件，可能更适合本方案，但是我没有找到方法去除这个插件
        styles: {
          name: 'commons',
          // test: /\.css|less$/,
          test: /(common|reset|nprogress)\.css$/,
          chunks: 'all', // merge all the css chunk to one file
          enforce: true
        }
      },
    },
  };

  return config;
};