<template>
  <header-bar>
    <icon-button slot="left" icon="arrow_back" v-link="{ name: 'index' }"></icon-button>
    <span>{{ title }}</span>
  </header-bar>
</template>

<script>
import { routeName } from '../vuex/getters'
export default {
  data () {
    return {
      title: ''
    }
  },
  vuex: {
    getters: {
      routeName
    }
  },
  ready () {
    if (this.routeName === 'index' || this.routeName === 'history') {
      this.title = '知乎日报'
    } else if (this.routeName === 'mine') {
      this.title = '其他'
    }
  }
}
</script>

<style scoped>
.vc-header-bar {
  color: #fff !important;
  background-color: #42b983 !important;
  position: fixed;
}
a {
  color: #fff !important;
}
</style>