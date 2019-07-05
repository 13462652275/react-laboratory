import { init } from '@rematch/core';

// 枚举
import emums from './models/emums';

// 用户信息
import user from './models/user';


const store = init({
  models: {
    emums,
    user,
  },
});

export default store;

export const { dispatch, getState } = store;

// 获取
// getState().user;

// 提交（同步和异步都是该方法提交，异步把后面的方法名换成异步的方法名就可以了）
// dispatch.user.update_user(x, y);