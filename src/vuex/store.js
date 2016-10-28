import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const state = {
  apiUrl: 'http://api.zhihu.dev/',
  latestApi: 'zhihu/latest',
  historyApi: 'zhihu/history/',
  activePage: '',
  zhihuDailyList: [],
  zhihuDailyCount: 0,
  zhihuDailyNextUrl: '',
  historyList: [],
  historyDate: ''
}

const mutations = {
  GET_LATEST_LIST (state, response) {
    state.zhihuDailyList = response.data.data
    state.zhihuDailyCount = response.data.meta.pagination.count
    state.zhihuDailyNextUrl = response.data.meta.pagination.links.next
  },

  GET_MORE (state, response) {
    state.zhihuDailyList = state.zhihuDailyList.concat(response.data.data)
    state.zhihuDailyCount += response.data.meta.pagination.count
    state.zhihuDailyNextUrl = response.data.meta.pagination.links.next
  },

  GET_HISTORY_LIST (state, response) {
    state.historyList = response.data.data
  },

  SET_HISTORY_DATE (state, date) {
    state.historyDate = date
  }
}

export default new Vuex.Store({
  state,
  mutations
})
