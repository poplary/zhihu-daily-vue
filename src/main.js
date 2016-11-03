import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import store from './store'
import { sync } from 'vuex-router-sync'
import routes from './routes'
import FastClick from 'fastclick'

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({routes: routes})

/* eslint-disable no-new */
new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App),
  created () {
    FastClick.attach(document.body)
  }
})

sync(store, router)
