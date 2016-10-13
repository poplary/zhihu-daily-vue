<template>
  <layout>
    <content v-el:scroller>
          <zhihu-card
            :image="item.image"
            :url="item.url"
            :title="item.title"
            :date="item.date"
             v-for="item in zhihuDailyList"
          >
          </zhihu-card>
      <button raised v-on:click="getMore">more</button>
      <!-- <infinite-scroll :trigger="$els.scroller" @load="loadMore" :loading="pageLoading"></infinite-scroll> -->
    </content>
  </layout>
</template>

<script>
import Layout from './Layout'
import ZhihuCard from '../components/ZhihuCard'
import { getLatestList, getMore } from '../vuex/actions'
import { zhihuDailyList, zhihuDailyCount } from '../vuex/getters'

export default {
  vuex: {
    // 数据可以直接使用
    getters: {
      zhihuDailyList,
      zhihuDailyCount
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
    if (this.zhihuDailyCount < 1) {
      this.getLatestList()
    }
  }
}
</script>

<style scoped>
</style>