import Vue from 'vue'
import VueResource from 'vue-resource'
import * as types from './mutation-types'
import zhihu from './modules/zhihu'

Vue.use(VueResource)

export const getLatestList = ({ commit }, more) => {
  let url

  if (zhihu.state.zhihuDailyCount < 1) {
    url = process.env.API_URL + process.env.LATEST_LIST
  } else {
    url = zhihu.state.zhihuDailyNextUrl
  }

  if (more === true || zhihu.state.zhihuDailyCount < 1) {
    Vue.http.jsonp(url)
      .then(function (response) {
        commit(types.GET_LATEST_LIST, response)
      })
  }
}

export const getHistoryList = ({ commit }) => {
  let url = process.env.API_URL + process.env.HISTORY_LIST + zhihu.state.historyDate

  Vue.http.jsonp(url)
    .then(function (response) {
      commit(types.GET_HISTORY_LIST, response)
    })
}

export const setHistoryDate = ({ commit }, date) => {
  commit(types.SET_HISTORY_DATE, date)
}
