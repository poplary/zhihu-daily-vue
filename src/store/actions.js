import Vue from 'vue'
import VueResource from 'vue-resource'
import * as types from './mutation-types'
import zhihu from './modules/zhihu'

Vue.use(VueResource)

export const getLatestList = ({ commit }) => {
  if (zhihu.state.zhihuDailyCount < 1) {
    let url = process.env.API_URL + process.env.LATEST_LIST

    Vue.http.jsonp(url)
        .then(function (response) {
          commit(types.GET_LATEST_LIST, response)
        })
  }
}

export const getMore = ({ commit }) => {
  let url = zhihu.state.zhihuDailyNextUrl

  Vue.http.jsonp(url)
    .then(function (response) {
      commit(types.GET_MORE, response)
    })
}

export const getHistoryList = ({ commit }) => {
  let url = zhihu.state.apiUrl + zhihu.state.historyApi + zhihu.state.historyDate

  Vue.http.jsonp(url)
    .then(function (response) {
      commit(types.GET_HISTORY_LIST, response)
    })
}

export const setHistoryDate = ({ commit }, date) => {
  commit(types.SET_HISTORY_DATE, date)
}
