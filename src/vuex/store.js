import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const state = {
  // apiUrl: 'http://zhihu.api.me/api/',
  apiUrl: 'https://api.ipoplary.com/api/',
  latestApi: 'zhihu/latest',
  historyApi: 'zhihu/day/',
  activePage: '',
  zhihuDailyList: [],
  zhihuDailyCount: 0,
  historyList: [],
  historyDate: ''
}

const mutations = {
  GET_LATEST_LIST (state, response) {
    state.zhihuDailyList = response.data.list
    state.zhihuDailyCount = response.data.list.length
  },

  GET_MORE (state, response) {
    state.zhihuDailyList = state.zhihuDailyList.concat(response.data.list)
    state.zhihuDailyCount += response.data.list.length
  },

  GET_HISTORY_LIST (state, response) {
    state.historyList = response.data.list
  },

  SET_HISTORY_DATE (state, date) {
    state.historyDate = date
  }
}

export default new Vuex.Store({
  state,
  mutations
})
