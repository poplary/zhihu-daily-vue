var merge = require('webpack-merge')
var devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  API_URL: '"https://api.ipoplary.com/"',
  LATEST_LIST: '"zhihu/latest"',
  HISTORY_LIST: '"zhihu/history/"'
})
