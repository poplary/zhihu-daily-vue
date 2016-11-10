<template>
  <layout title="知乎日报">
    <div class="list">
      <card v-for="item in latestList" :title="item.title" :date="item.date" :image="item.image" :url="item.url"></card>
      <a href="javascript:;" class="button">更多</a>
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
div.list {
  max-width: 750px;
  display: inline-flex;
  align-content: flex-start;
  justify-content: center;
  flex-wrap: wrap;
}

a.button {
  width: 80%;
  height: 40px;
  color: #eee;
  background: #3aa;
  margin-top: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
}
</style>
