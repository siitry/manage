import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/page/Layout'
import Main from '@/page/Main'
import User from '@/page/User'
import Login from '@/page/Login'
// import Client from '../components/Client.vue'
import Header from '../components/Header.vue'
import Home from '../components/Home.vue'
import Homeinfo from '../components/Homeinfo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/login'},
    {
      path: '/home',
      name: 'Home',
      component: Home,
      //嵌套路由
      children: [
        {
          path: '/main',
          // name: 'Main',
          component: () => import (/* webpackChunkName: "main" */ '../page/Main.vue')
        },
        {
          path: '/client',
          // name: 'Client',
          component: () => import (/* webpackChunkName: "client" */ '../page/Client.vue'),
        },
        {
          path: '/author',
          name: 'Author',
          component: () => import (/* webpackChunkName: "client" */ '../page/Author.vue'),
        }
      ]
    },
    {path: '/main',name: 'Main',component: Main},
    {path: '/user',name: 'User',component: User},
    {path: '/home',name: 'Home',component: Home,
      //嵌套子路由
      children: [{
        path: '/homeinfo',
        name: 'Homeinfo',
        component: Homeinfo
      }]
    },
    {path: '/header',name: 'Header',component: Header},
    {path: '/login',name: 'Login',component: Login}
  ]
})
