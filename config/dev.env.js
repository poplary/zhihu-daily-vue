var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_URL: '"https://api.ipoplary.com/"',
  LATEST_LIST: '"zhihu/latest"'
})
