<template>
  <layout title="历史日报">
    history
  </layout>
</template>

<script>
import layout from '../components/Layout'
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      latestList: this.$store.getters.zhihuDailyList
    }
  },
  components: {
    layout
  },
  mounted () {
    this.$store.dispatch('getLatestList')
  },
  methods: {
    ...mapActions([
      'getLatestList'
    ])
  }
}
</script>

<style>

</style>
