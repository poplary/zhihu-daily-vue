<template>
  <layout>
    <content v-el:scroller>
      <ul>
        <li v-for="item in zhihuDailyList">
          <zhihu-card
            :image="item.image"
            :url="item.url"
            :title="item.title"
            :date="item.date"
          >
          </zhihu-card>
        </li>
      </ul>
      <button raised v-on:click="getMore">more</button>
      <!-- <infinite-scroll :trigger="$els.scroller" @load="loadMore" :loading="pageLoading"></infinite-scroll> -->
    </content>
  </layout>
</template>

<script>
import Layout from './Layout'
import ZhihuCard from '../components/ZhihuCard'
import { getLatestList, getMore } from '../vuex/actions'
import { zhihuDailyList } from '../vuex/getters'

export default {
  vuex: {
    // 数据可以直接使用
    getters: {
      zhihuDailyList
    },
    // 方法可以直接调用
    actions: {
      // 获取最新的数据
      getLatestList,
      // 获取更多
      getMore
    }
  },
  components: {
    Layout,
    ZhihuCard
  },
  ready () {
    // 获取最新的知乎日报数据
    this.getLatestList()
  }
}
</script>

<style scoped>
</style>