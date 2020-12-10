/*
 * @Descripttion:
 * @version:
 * @Author: Andy
 * @Date: 2019-12-06 14:44:08
 * @LastEditors  : Andy
 * @LastEditTime : 2020-01-27 13:40:43
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from '@/store/store'
import App from './App'
import router from './router'
import axios from 'axios'
import VueForm from 'vue-form'
import 'jquery'
import '@/static/reset.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/pro-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fas, fab, far)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.use(VueForm, {
  validators: {
    matches: function (value, attrValue) {
      if (!attrValue) {
        return true
      }
      return value === attrValue
    },
    'password-strength': function (value) {
      return /(?=^\w{8,}$)(?=[a-zA-Z]+\d)(?=.*[A-Z])(?=.*[a-z])(?![.\n]).*$/.test(value)
    },
    'email-strength': function (value) {
      return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)
    },
    'username-strength': function (value) {
      return /(?=^[\w-]{6,15}$).*$/.test(value)
    },
    'signinusername-strength': function (value) {
      return /^\S+$/.test(value)
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
