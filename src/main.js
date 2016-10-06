import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import configRouter from './routes'
import { sync } from 'vuex-router-sync'
import store from './vuex/store'
import VueCarbon from 'vue-carbon'
import 'vue-carbon/dist/vue-carbon.css'

Vue.use(VueRouter)
Vue.use(VueCarbon)

Vue.config.debug = true

/* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App }
// })

const router = new VueRouter()
configRouter(router)

// router 与 vuex 同步
sync(store, router)

// 路由重定向
router.redirect({
  '/': '/index'
})

router.start(Vue.extend(App), '#app')
