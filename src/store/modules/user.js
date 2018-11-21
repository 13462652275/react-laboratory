//API
import { login } from '@/api';

const user = {
  state: {
    id: '',
    username: '',
    permission: [],
  },

  reducers: {
    update_user (state, data) {
      for (let key in state) state[key] = data[key];
      return state;
    },
  },
  
  effects: {
    getUserLogin (params, rootState, callback, errCallback) {
      if (!params.username || !params.password) {
        console.error('[ Login Error ]: Please confirm params is complete?', params);
        return;
      };
  
      login(params).then(response => {
        if (response.success && response.code === '200') {
          if (callback) callback(response);
          this.update_user(response.data);
        } else {
          if (errCallback) errCallback(response);
        };
      }, error => {
        console.error(error);
      });
    },
  },
};

export default user;