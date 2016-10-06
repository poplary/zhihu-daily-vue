import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

export const getLatestList = ({ dispatch, state }) => {
  var url = state.apiUrl + state.latestApi

  Vue.http.jsonp(url)
    .then(function (response) {
      dispatch('GET_LATEST_LIST', response)
    })
}

export const getMore = ({ dispatch, state }) => {
  var url = state.apiUrl + state.latestApi
  var sendData = {'skip': state.zhihuDailyCount}

  Vue.http.jsonp(url, {'params': sendData})
    .then(function (response) {
      dispatch('GET_MORE', response)
    })
}

export const getHistoryList = ({ dispatch, state }) => {
  var url = state.apiUrl + state.historyApi + state.historyDate

  Vue.http.jsonp(url)
    .then(function (response) {
      dispatch('GET_HISTORY_LIST', response)
    })
}

export const setHistoryDate = ({ dispatch, state }, date) => {
  dispatch('SET_HISTORY_DATE', date)
}
