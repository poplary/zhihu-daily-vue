<template>
  <layout>
    <content>
      <card>
        <card-content>
          <date-select label="" :limit="[{type:'fromto',from:'2015-01-01'}]" placeholder="选择日期" :value="historyDate" v-on:input-change="setHistoryDate"></date-select>
        </card-content>
      </card>
      <ul>
        <li v-for="item in historyList">
          <zhihu-card
            :image="item.image"
            :url="item.url"
            :title="item.title"
            :date="item.date"
          >
          </zhihu-card>
        </li>
      </ul>
    </content>
  </layout>
</template>
<script>
import Layout from './Layout'
import ZhihuCard from '../components/ZhihuCard'
import { getHistoryList, setHistoryDate } from '../vuex/actions'
import { historyDate, historyList } from '../vuex/getters'

export default {
  vuex: {
    // 数据可以直接使用
    getters: {
      historyDate,
      historyList
    },
    // 方法可以直接调用
    actions: {
      // 获取历史列表
      getHistoryList,
      // 设置历史日期
      setHistoryDate
    }
  },
  components: {
    Layout,
    ZhihuCard
  },
  watch: {
    'historyDate': function () {
      this.getHistoryList(this.historyDate)
    }
  }
}
</script>

<style scoped>
</style>