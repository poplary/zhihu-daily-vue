<template>
  <layout title="历史日报">
    <date-picker></date-picker>

    <div class="list">
      <card v-for="item in historyList" :title="item.title" :date="item.date" :image="item.image" :url="item.url"></card>
    </div>

  </layout>
</template>

<script>
import layout from '../components/Layout'
import card from '../components/Card'
import { mapActions } from 'vuex'
import datePicker from '../components/DatePicker'

export default {
  data () {
    return {
      historyList: []
    }
  },
  components: {
    layout,
    datePicker,
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
    historyList () {
      return this.$store.getters.historyList
    }
  }
}
</script>

<style>

</style>
