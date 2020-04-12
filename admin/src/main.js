// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

Vue.config.productionTip = false
import axios from "axios"
axios.defaults.baseURL="http://www.kehyang.cn:8898/";
axios.defaults.withCredentials=true;
Vue.prototype.axios = axios;

import Vuex from "vuex"

Vue.use(Vuex);
var store = new Vuex.Store({
  state:{
    isLogin:false,
    uname: '',
  },
  mutations:{
    isLogin(state){
      state.isLogin=true;
    },
    _setUser(state,value){
      state.uname = value
      return state.uname
    }
  },
  getters:{
    isLogin(state){return state.isLogin}
  },
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
