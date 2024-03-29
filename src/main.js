// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from '@/store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import {ApiService} from '@/services/base.service'
import "babel-polyfill"
require('./assets/css/prism.css')

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(require('vue-moment'));

ApiService.init()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
