export default (router) => router.map({
  '/index': {
    name: 'index',
    component: require('./pages/Zhihu')
  },
  '/history': {
    name: 'history',
    component: require('./pages/History')
  },
  '/mine': {
    name: 'mine',
    component: require('./pages/Mine')
  }
})
