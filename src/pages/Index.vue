<template>
  <layout title="知乎日报">
    <card v-for="item in latestList" :title="item.title" :date="item.date" :image="item.image"></card>
  </layout>
</template>

<script>
import layout from '../components/Layout'
import card from '../components/Card'
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      latestList: []
    }
  },
  components: {
    layout,
    card
  },
  mounted () {
    this.$store.dispatch('getLatestList')
  },
  methods: {
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
div.zh-content {
  display: inline-flex;
  align-content: flex-start;  
}
</style>
