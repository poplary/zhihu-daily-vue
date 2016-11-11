<template>
  <layout title="其他">
    <div class="card">
      未完待续
    </div>
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
