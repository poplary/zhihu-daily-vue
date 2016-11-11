<template>
  <div class="card">
    请选择日期：
    <vue-date-picker class="date-picker" :date="date" :option="option" :limit="limit"></vue-date-picker>
  </div>
</template>

<script>
import vueDatePicker from 'vue-datepicker'
import { mapActions } from 'vuex'

let dateObj = new Date()
let month = dateObj.getMonth() + 1
let date = dateObj.getDate()
let tomorrowDate = dateObj.getDate() + 1
let today = dateObj.getFullYear() + '-' + month + '-' + date
let tomorrow = dateObj.getFullYear() + '-' + month + '-' + tomorrowDate

export default {
  data () {
    return {
      startDate: {
        time: '2015-01-01'
      },
      date: {
        time: today
      },
      option: {
        type: 'day',
        week: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        month: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        format: 'YYYY-MM-DD',
        placeholder: '请选择日期',
        inputStyle: {
          'display': 'inline-block',
          'padding': '6px',
          'line-height': '22px',
          'font-size': '16px',
          'border': '1px solid #fff',
          'box-shadow': '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
          'border-radius': '2px',
          'color': '#2c3e50'
        },
        color: {
          header: '#41b883',
          headerText: '#2c3e50'
        },
        buttons: {
          ok: '确定',
          cancel: '取消'
        },
        overlayOpacity: 0.5, // 0.5 as default
        dismissible: true // as true as default
      },
      limit: [{
        type: 'weekday',
        available: [0, 1, 2, 3, 4, 5, 6]
      },
      {
        type: 'fromto',
        from: '2015-01-01',
        to: tomorrow
      }]
    }
  },
  components: {
    vueDatePicker
  },
  methods: {
    ...mapActions([
      'setHistoryDate',
      'getHistoryList'
    ])
  },
  watch: {
    date: {
      handler: function (val, oldVal) {
        this.setHistoryDate(val.time)
        this.getHistoryList()
      },
      deep: true
    }
  }

}
</script>

<style>
.date-picker {
  text-align: center;
}

div.card {
  height: 40px;
  justify-content: center;
}
</style>
