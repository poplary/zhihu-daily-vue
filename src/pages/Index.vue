<template>
  <layout title="知乎日报">
    <div class="list">
      <card v-for="item in latestList" :title="item.title" :date="item.date" :image="item.image" :url="item.url"></card>
    </div>
    
    <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
    </div>
    
  </layout>
</template>

<script>
import layout from '../components/Layout'
import card from '../components/Card'
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      latestList: [],
      busy: false
    }
  },
  components: {
    layout,
    card
  },
  mounted () {
    // this.$store.dispatch('getLatestList')
  },
  methods: {
    loadMore () {
      this.busy = true

      setTimeout(() => {
        this.getLatestList(true)
      }, 500)
      this.busy = false
    },

    ...mapActions([
      'getLatestList'
    ])
  },
  computed: {
    latestList () {
      return this.$store.getters.zhihuDailyList
    }
  }
}
</script>

<style>
</style>
