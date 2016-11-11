import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import store from './store'
import { sync } from 'vuex-router-sync'
import routes from './routes'
import FastClick from 'fastclick'
import 'font-awesome/css/font-awesome.css'
import infiniteScroll from 'vue-infinite-scroll'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(infiniteScroll)

const router = new VueRouter({
  mode: 'history',
  scrollBehavior: function (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  },
  routes: routes
})

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
