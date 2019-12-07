import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/home'
import Archive from '@/views/archive'
import Friends from '@/views/friends'
import About from '@/views/about'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home
    },
    {
      name: 'Archive',
      path: '/archive',
      component: Archive
    },
    {
      name: 'Friends',
      path: '/friends',
      component: Friends
    },
    {
      name: 'About',
      path: '/about',
      component: About
    }
  ]
})
