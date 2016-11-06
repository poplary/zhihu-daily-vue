import * as types from '../mutation-types'

let state = {
  // apiUrl: 'http://api.zhihu.dev/',
  // apiUrl: 'https://api.ipoplary.com/',
  // latestApi: 'zhihu/latest',
  // apiUrl: 'http://localhost:' +  + '/json/',
  // latestApi: 'latest.json',
  historyApi: 'zhihu/history/',
  activePage: '',
  zhihuDailyList: [],
  zhihuDailyCount: 0,
  zhihuDailyNextUrl: '',
  historyList: [],
  historyDate: ''
}

let mutations = {
  [types.GET_LATEST_LIST] (state, response) {
    state.zhihuDailyList = response.data.data
    state.zhihuDailyCount = response.data.meta.pagination.count
    state.zhihuDailyNextUrl = response.data.meta.pagination.links.next
  },

  [types.GET_MORE] (state, response) {
    state.zhihuDailyList = state.zhihuDailyList.concat(response.data.data)
    state.zhihuDailyCount += response.data.meta.pagination.count
    state.zhihuDailyNextUrl = response.data.meta.pagination.links.next
  },

  [types.GET_HISTORY_LIST] (state, response) {
    state.historyList = response.data.data
  },

  [types.SET_HISTORY_DATE] (state, date) {
    state.historyDate = date
  }
}

export default {
  state,
  mutations
}
