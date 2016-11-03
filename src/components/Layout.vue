<template>
  <div class="layout">
    <zh-header></zh-header>
    <zh-content>
      <slot></slot>
    </zh-content>
    <zh-footer></zh-footer>
  </div>
</template>

<script>
import zhHeader from './Header'
import zhFooter from './Footer'
import zhContent from './Content'
export default {
  components: {
    zhHeader,
    zhFooter,
    zhContent
  }
}
</script>

<style>
div.layout {
  height: 100%;
}
</style>
