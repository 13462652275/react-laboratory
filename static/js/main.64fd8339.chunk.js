(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{106:function(e,n){},112:function(e,n){},115:function(e,n,t){var a={"./Global.json":116,"./Login.json":117,"./Main.json":118};function r(e){var n=o(e);return t(n)}function o(e){var n=a[e];if(!(n+1)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=115},116:function(e){e.exports={"global.modal.okText":"OK","global.modal.cancelText":"Cancel"}},117:function(e){e.exports={"login.onSpecial":"On Special","login.offSpecial":"Off Special","login.title":"Login to React Laboratory","login.username":"Please type the username","login.password":"Please type the password","login.loginText":"log in"}},118:function(e){e.exports={"main.header.title":"Start a magical journey right now!","main.header.personalInfo":"Personal","main.header.changePassword":"Password","main.header.logout":"Log Out","main.header.logout.title":"Log Out Comfirm","main.header.logout.content":"Do you want to exit the system?"}},119:function(e,n,t){var a={"./Global.json":120,"./Login.json":121,"./Main.json":122};function r(e){var n=o(e);return t(n)}function o(e){var n=a[e];if(!(n+1)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=119},120:function(e){e.exports={"global.modal.okText":"\u786e\u8ba4","global.modal.cancelText":"\u53d6\u6d88"}},121:function(e){e.exports={"login.onSpecial":"\u5f00\u542f\u7279\u6548","login.offSpecial":"\u5173\u95ed\u7279\u6548","login.title":"Login to React Laboratory","login.username":"\u8bf7\u8f93\u5165\u8d26\u53f7","login.password":"\u8bf7\u8f93\u5165\u5bc6\u7801","login.loginText":"\u767b\u5f55"}},122:function(e){e.exports={"main.header.title":"\u7acb\u5373\u5f00\u59cb\u4e00\u573a\u795e\u5947\u7684\u65c5\u884c\u5427\uff01","main.header.personalInfo":"\u4e2a\u4eba\u4fe1\u606f","main.header.changePassword":"\u4fee\u6539\u5bc6\u7801","main.header.logout":"\u6ce8\u9500","main.header.logout.title":"\u9000\u51fa\u786e\u8ba4","main.header.logout.content":"\u60a8\u662f\u5426\u8981\u9000\u51fa\u7cfb\u7edf\uff1f"}},123:function(e,n,t){"use strict";t.r(n);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=t(0),r=t.n(a),o=t(34),c=t.n(o),i=t(38),s=t(26),u=t(16),l=t(17),f=t(20),d=t(18),m=t(19),p=t(501),h=t(29),g=t(37),b=(t(91),t(93),t(95),t(97),function(e){function n(){var e,t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(f.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(r)))).onBeforeEach=function(e,n,t){Object(g.b)("token")||t.push("/login")},t.onAfterEach=function(e,n,t){},t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(h.a,{routes:h.b,onBeforeEach:this.onBeforeEach,onAfterEach:this.onAfterEach}))}}]),n}(a.PureComponent)),O=t(47);c.a.render(r.a.createElement(i.a,{store:s.a},r.a.createElement(O.a,null,r.a.createElement(b,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},124:function(e,n,t){"use strict";t.r(n);var a=t(6),r=t(15),o=t(51),c=new(t.n(o).a)(r.c,{delayResponse:1500}),i={admin:{id:"b920FfDB-63f7-dFf5-f8bb-36338ccff84B",name:"\u7ba1\u7406\u5458",password:"123456",permission:[]},manager:{id:"a3Ac3dAD-f6Ba-B04C-ae81-16D6e4A85fB8",name:"\u7ecf\u7406",password:"123456",permission:[]}};c.onPost("/login").reply(function(e){return new Promise(function(n,t){var r=null;try{r=JSON.parse(e.data)}catch(l){return void t([200,{code:"500",success:!1,data:[],message:"\u53c2\u6570\u89e3\u6790\u5931\u8d25"}])}var o=r,c=o.username,s=o.password;if(i[c]&&i[c].password===s){var u=Object(a.a)({username:c},i[c]);delete u.password,n([200,{code:"200",success:!0,data:u,message:"\u767b\u5f55\u6210\u529f"}])}else n([403,{code:"403",success:!1,data:null,message:"\u8bf7\u68c0\u67e5\u8d26\u53f7\u6216\u5bc6\u7801\u662f\u5426\u6b63\u786e"}])})}),c.onGet("/user/info").reply(function(e){var n=e.params.id;return new Promise(function(e,t){var a=null;for(var r in i)i[r].id===n&&void 0!==n&&((a=JSON.parse(JSON.stringify(i[r]))).username=r,delete a.password);a?e([200,{code:"200",success:!0,data:a,message:"\u83b7\u53d6\u6210\u529f"}]):t([500,{code:"500",success:!1,data:null,message:"\u672a\u627e\u5230\u8be5\u7528\u6237\u4fe1\u606f"}])})});var s=t(13),u=Array.apply(null,{length:100}).map(function(e,n){return{id:s.Random.guid(),roId:s.Random.guid(),name:s.Random.name(),age:s.Random.integer(20,50),address:s.Random.county(!0)}});c.onGet("/user/list").reply(function(e){for(var n=e.params,t=n.page,a=n.size,r=[],o=t-1,c=u.length;o<t*a&&o<c;o++)r.push(u[o]);return[200,{code:"200",success:!0,data:r,message:""}]})},15:function(e,n,t){"use strict";var a=t(11),r=t.n(a),o=Object({NODE_ENV:"production",PUBLIC_URL:""}).ADDRESS_ENV;"test"!==o&&(o="production");var c=Object.seal({DEBUG_DEV_ADDRESS:null,LOCALE_MOCK_ADDRESS:null,EASY_MOCK_ADDRESS:null,MAIN_PROD_ADDRESS:null});switch(o){case"development":c.DEBUG_DEV_ADDRESS="/",c.LOCALE_MOCK_ADDRESS="./",c.EASY_MOCK_ADDRESS="https://www.easy-mock.com/mock/5bf3ee63f0beab552d8b6fef",c.MAIN_PROD_ADDRESS="http://192.168.0.1";break;case"production":c.DEBUG_DEV_ADDRESS="/",c.LOCALE_MOCK_ADDRESS="https://liuzane.github.io/react-laboratory",c.EASY_MOCK_ADDRESS="https://www.easy-mock.com/mock/5bf3ee63f0beab552d8b6fef",c.MAIN_PROD_ADDRESS="http://192.168.0.1";break;case"test":default:c.DEBUG_DEV_ADDRESS="/",c.LOCALE_MOCK_ADDRESS="./",c.EASY_MOCK_ADDRESS="https://www.easy-mock.com/mock/5bf3ee63f0beab552d8b6fef",c.MAIN_PROD_ADDRESS="http://192.168.0.1"}var i=c,s=(r.a,r.a.create({baseURL:i.LOCALE_MOCK_ADDRESS,headers:{"Content-Type":"application/json"}})),u=r.a.create({baseURL:i.EASY_MOCK_ADDRESS,headers:{"Content-Type":"application/json"}}),l=r.a.create({baseURL:i.MAIN_PROD_ADDRESS,headers:{"Content-Type":"application/json"}});[s,u,l].forEach(function(e){e.interceptors.response.use(function(e){return e.data},function(e){return Promise.reject(e)})});var f=function(e,n){return s({method:"post",url:"/login",data:e,cancelToken:n})},d=function(e,n){return s({method:"get",url:"/user/info",params:e,cancelToken:n})},m=function(e,n){return s({method:"get",url:"/user/list",params:e,cancelToken:n})};t.d(n,"c",function(){return s}),t.d(n,"d",function(){return f}),t.d(n,"a",function(){return d}),t.d(n,"b",function(){return m}),t(124)},26:function(e,n,t){"use strict";var a=t(22),r={state:{Emums:t(50)}},o=t(6),c=t(15),i=t(9),s=function(e,n,t){t.success&&"200"===t.code?(e&&e(t),this.update_user(t.data)):n&&n(t)},u=function(e,n){console.error(n),e&&(n.response&&n.response.data&&(n=n.response.data),e(n))},l=Object.freeze({language:"",id:"",name:"",username:"",permission:[]}),f=Object(a.createModel)({state:Object(o.a)({},l),reducers:{update_user:function(e,n){var t=Object(i.b)("userInfo"),a=Object(i.b)("language");for(var r in(n=Object.assign({},t,n)).language||(n.language=a||navigator.language.replace("-","_")),Object(i.c)("userInfo",n,24),e)n[r]&&(e[r]=n[r]);return JSON.parse(JSON.stringify(e))},reset_user:function(){return Object(o.a)({},l)}},effects:{userLogin:function(e,n){var t=e.params,a=e.callback,r=e.errCallback;if(t&&t.username&&t.password)return Object(c.d)(t).then(s.bind(this,a,r),u.bind(this,r));console.error("[ userLogin Error ]: Please confirm params is complete?")},getUserInfo:function(e,n,t,a){if(e&&e.id)return Object(c.a)(e).then(s.bind(this,t,a),u.bind(this,a));console.error("[ getUserInfo Error ]: Please confirm params is complete?",e)}}});t.d(n,"b",function(){return m});var d=Object(a.init)({models:{emums:r,user:f}}),m=(n.a=d,d.dispatch);d.getState},29:function(e,n,t){"use strict";var a=t(16),r=t(17),o=t(20),c=t(18),i=t(19),s=t(0),u=t.n(s),l=t(503),f=t(496),d=t(502),m=t(507),p=t(8),h=function(e){function n(){return Object(a.a)(this,n),Object(o.a)(this,Object(c.a)(n).apply(this,arguments))}return Object(i.a)(n,e),Object(r.a)(n,[{key:"componentWillReceiveProps",value:function(e){var n=[e.location,this.props.location],t=n[0],a=n[1];Object(p.is)(Object(p.fromJS)(t),Object(p.fromJS)(a))||this.props.onBeforeEach(t,a,this.props.history)}},{key:"componentDidUpdate",value:function(e,n){var t=[e.location,this.props.location],a=t[0],r=t[1];Object(p.is)(Object(p.fromJS)(a),Object(p.fromJS)(r))||this.props.onAfterEach(a,r,this.props.history)}},{key:"render",value:function(){return u.a.createElement(l.a,null,this.props.routes.map(function(e,n){return u.a.createElement(f.a,{exact:e.exact,strict:e.strict,path:e.path,render:function(n){return e.redirect?u.a.createElement(d.a,{to:e.redirect}):u.a.createElement(e.component,Object.assign({},n,{routes:e.children}))},key:n})}))}}]),n}(s.PureComponent);h.defaultProps={onBeforeEach:function(){},onAfterEach:function(){}};var g=Object(m.a)(h),b=t(52),O=t.n(b),E=t(32),S=t.n(E),v=function(e){return e.error?u.a.createElement("div",null,"Error! ",u.a.createElement("button",{onClick:e.retry},"Retry")):e.pastDelay?(S.a.start(),u.a.createElement("div",null,"Loading...")):null},D=function(e,n){return S.a.done(),u.a.createElement(e.default,n)},y=function(e){return O()({loader:e,loading:v,render:D})},_=[{path:"",title:"home",component:y(function(){return t.e(8).then(t.bind(null,505))}),exact:!0},{path:"todo",title:"todo",component:y(function(){return t.e(9).then(t.bind(null,510))}),exact:!0},{path:"count-table",title:"count-table",component:y(function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(10)]).then(t.bind(null,498))}),exact:!0},{path:"table",title:"table",component:y(function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(11)]).then(t.bind(null,511))}),exact:!0},{path:"less",title:"less",component:y(function(){return Promise.all([t.e(0),t.e(12)]).then(t.bind(null,506))}),exact:!0},{path:"typeof",title:"typeof",component:y(function(){return t.e(13).then(t.bind(null,508))}),exact:!0},{path:"module",title:"module",component:y(function(){return t.e(14).then(t.bind(null,504))}),exact:!0},{path:"grammar",title:"grammar",component:y(function(){return t.e(15).then(t.bind(null,499))}),exact:!0}];t.d(n,"a",function(){return g}),t.d(n,"c",function(){return _});var j=[{path:"/login",strict:!0,component:y(function(){return Promise.all([t.e(0),t.e(1),t.e(3),t.e(17),t.e(5)]).then(t.bind(null,500))})},{path:"/main",title:"\u9996\u9875",strict:!0,component:y(function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(18),t.e(6)]).then(t.bind(null,497))}),children:_},{path:"/",exact:!0,redirect:"/main"},{path:"",component:y(function(){return t.e(7).then(t.bind(null,509))})}];n.b=function e(n,t){return n.map(function(n){return t&&"/"!==n.path.substr(0,1)&&(n.path=t+(""===n.path?"":"/"+n.path)),n.children&&e(n.children,n.path),n})}(j)},37:function(e,n,t){"use strict";function a(e){var n=new Date,t="",a="",r="";if(e.key&&e.value){if(e.hours){try{Number(e.hours)}catch(o){console.error("[Cookie Error]: expires must is number.")}n.toGMTString(n.setTime(n.getTime()+36e5*e.hours)),t="expires="+n+";"}e.path&&(a="path="+e.path+";"),e.domain&&(r="domain="+e.domain),document.cookie=e.key+"="+e.value+";"+t+a+r}else console.error("[Cookie Error]: key, value must be set.")}function r(e){if(e){for(var n=document.cookie.split(";"),t=0;t<n.length;t++)if(n[t]=n[t].replace(/^\s*|\s*$/,""),0===n[t].indexOf(e)&&n[t].indexOf("=")===e.length)return n[t].substring(e.length+1,n[t].length);return!1}console.error("[Cookie Error]: not set key.")}function o(e){var n=document.cookie.split(";"),t="",a="";e||(e={}),e.path&&(t="path="+e.path+";"),e.domain&&(a="domain="+e.domain+";");for(var r=0;r<n.length;r++){var o=n[r].substring(0,n[r].indexOf("="));document.cookie=o+"=0;expires=Thu, 01 Jan 1970 00:00:00 GMT;"+t+a}}t.d(n,"c",function(){return a}),t.d(n,"b",function(){return r}),t.d(n,"a",function(){return o})},47:function(e,n,t){"use strict";var a={};t.r(a),t.d(a,"en_US",function(){return b}),t.d(a,"zh_CN",function(){return S});var r=t(33),o=t(0),c=t.n(o),i=t(26),s=t(9),u=t(27),l=t(54),f=t.n(l),d=t(55),m=t.n(d),p=t(6),h=t(115),g={};h.keys().forEach(function(e){"./index.js"!==e&&(g=Object(p.a)({},g,h(e)))});var b={name:"English",language:"en-US",fullName:"en_US",fileName:"EN_US",locale:g},O=t(119),E={};O.keys().forEach(function(e){"./index.js"!==e&&(E=Object(p.a)({},E,O(e)))});var S={name:"\u7b80\u4f53\u4e2d\u6587",language:"zh-CN",fullName:"zh_CN",fileName:"ZH_CN",locale:E};Object(u.c)(Object(r.a)(f.a).concat(Object(r.a)(m.a)));var v="";try{v=Object(s.b)("language")}catch(y){v=navigator.language}v||(v=navigator.language),"string"===typeof v&&(v=v.replace("-","_")),v&&(Object(s.c)("language",v),i.b.user.update_user({language:v}));var D=function(e){var n=e.children;return c.a.createElement(u.b,{locale:v.replace("_","-"),messages:function(e){var n={};try{n=a[e].locale}catch(y){console.error("[ Language Error ]: not found locale language package"),n=b.locale}return n}(v)},n)};t.d(n,"b",function(){return a});n.a=D},50:function(e){e.exports={UserStatus:{Unavailable:10,Available:20},UserStatus_Map:[{Key:"Unavailable",Value:10,Remarks:"\u4e0d\u53ef\u7528"},{Key:"Available",Value:20,Remarks:"\u53ef\u7528"}]}},53:function(e,n){},59:function(e,n,t){e.exports=t(123)},9:function(e,n,t){"use strict";function a(e,n,t){var a;return e&&n?(a=t?(new Date).getTime()+36e5*t:new Date(0).getTime(),localStorage.setItem(e,JSON.stringify({data:n,expires:a})),!0):(console.error("[ localStorage ]: Key and Data is a must fill parameter"),!1)}function r(e){var n,t=(new Date).getTime();e||console.error("[ localStorage ]: Key is a must fill parameter");try{n=JSON.parse(localStorage.getItem(e))}catch(a){return localStorage.getItem(e)}return n?!Boolean(n.expires)||n.expires>=t?n.data:(localStorage.removeItem(e),null):null}function o(e){e?localStorage.removeItem(e):localStorage.clear()}t.d(n,"c",function(){return a}),t.d(n,"b",function(){return r}),t.d(n,"a",function(){return o})},91:function(e,n,t){},93:function(e,n,t){}},[[59,19,16]]]);