<template>
  <layout title="历史日报">

    <div class="list">
      <date-picker class="date-card" :anotherDay.sync="anotherDay"></date-picker>
      <div class="list">
        <card v-for="item in historyList" :title="item.title" :date="item.date" :image="item.image" :url="item.url"></card>
      </div>
      <div class="button-list" v-if="showButton">
        <a class="button" href="javascript:;" v-on:click="changeDate(lastDay)" v-if="lastDay">上一页</a>
        <a class="button" href="javascript:;" v-on:click="changeDate(nextDay)" v-if="nextDay">下一页</a>
      </div>
    </div>

  </layout>
</template>

<script>
import layout from '../components/Layout'
import card from '../components/Card'
import datePicker from '../components/DatePicker'

export default {
  data () {
    return {
      historyList: [],
      lastDay: '',
      nextDay: '',
      anotherDay: '',
      showButton: false
    }
  },
  components: {
    layout,
    datePicker,
    card
  },
  methods: {
    changeDate: function (date) {
      this.anotherDay = date
    }
  },
  computed: {
    historyList () {
      return this.$store.getters.historyList
    },
    lastDay () {
      return this.$store.getters.lastDay
    },
    nextDay () {
      return this.$store.getters.nextDay
    },
    showButton () {
      if (this.$store.getters.historyList.length > 0) {
        return true
      }
    }
  }
}
</script>

<style>
.date-card {
  flex: 1;
}

.button-list {
  width: 100%;
  display: flex;
  justify-content: center;
}

</style>
