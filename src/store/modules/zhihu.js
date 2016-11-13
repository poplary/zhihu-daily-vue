import * as types from '../mutation-types'

let state = {
  historyApi: 'zhihu/history/',
  activePage: '',
  zhihuDailyList: [],
  zhihuDailyCount: 0,
  zhihuDailyCurrentPage: 0,
  zhihuDailyNextUrl: '',
  historyList: [],
  historyDate: '',
  lastDay: '',
  nextDay: ''
}

let mutations = {
  [types.GET_LATEST_LIST] (state, response) {
    // 判断当前页数，防止多次加载同个分页
    if (response.data.meta.pagination.current_page !== state.zhihuDailyCurrentPage) {
      state.zhihuDailyList = state.zhihuDailyList.concat(response.data.data)
      state.zhihuDailyCount += response.data.meta.pagination.count
      state.zhihuDailyCurrentPage = response.data.meta.pagination.current_page
      state.zhihuDailyNextUrl = response.data.meta.pagination.links.next
    }
  },

  [types.GET_HISTORY_LIST] (state, response) {
    state.historyList = response.data.data
    state.lastDay = response.data.meta.lastDay
    state.nextDay = response.data.meta.nextDay
  },

  [types.SET_HISTORY_DATE] (state, date) {
    state.historyDate = date
  }
}

export default {
  state,
  mutations
}
