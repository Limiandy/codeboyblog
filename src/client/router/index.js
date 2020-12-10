/*
 * @Descripttion:
 * @version:
 * @Author: Andy
 * @Date: 2019-12-06 14:44:08
 * @LastEditors: Andy
 * @LastEditTime: 2020-04-05 09:31:36
 */
import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/home'
import Archive from '@/views/archive'
import Friends from '@/views/friends'
import About from '@/views/about'
import Login from '@/views/login'
import NotFound from '@/views/404'
import Admin from '@/views/admin/admin'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home,
      meta: {
        keepAlive: true
      }
    },
    {
      name: 'Archive',
      path: '/archive',
      component: Archive,
      meta: {keepAlive: true}
    },
    {
      name: 'Friends',
      path: '/friends',
      component: Friends,
      meta: {keepAlive: true}
    },
    {
      name: 'About',
      path: '/about',
      component: About,
      meta: {keepAlive: true}
    },
    {
      name: 'Login',
      path: '/login',
      component: Login,
      meta: {
        keepAlive: true
      }
    },
    {
      name: 'NotFound',
      path: '*',
      component: NotFound,
      meta: {keepAlive: true}
    },
    {
      name: 'Admin',
      path: '/admin',
      component: Admin,
      meta: {keepAlive: false}
    }
  ]
})
