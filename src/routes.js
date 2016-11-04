export default [{
  path: '/index',
  name: 'index',
  component: require('./pages/Index')
},
{
  path: '/history',
  name: 'history',
  component: require('./pages/History')
},
{
  path: '/info',
  name: 'info',
  component: require('./pages/Info')
},
{
  path: '/',
  redirect: '/index'
}]
