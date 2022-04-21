import Vue from 'vue'
import Vuex from 'vuex'
import {getLogin} from "@/api/loginApi";
import {Toast} from "vant";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:localStorage.user?JSON.parse(localStorage.user):null,
  },
  mutations: {
    setUser(state,payload){
      state.user = payload;
      console.log(state.user);
    }
  },
  actions: {
    async asyncLogin(context,payload) {
      let res =await getLogin(payload);
      console.log(res)
      if(res.msg ==='操作成功') {
        Toast.success('登录成功');
        context.commit('setUser',res.result);
        localStorage.user = JSON.stringify(res.result);
        return {user:res.result,successLogin:true};
      }
      else {
        Toast.fail(res.result);
        return {user:res,successLogin:false};
      }
    }
  },
  modules: {
  }
})
