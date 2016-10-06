<template>
  <vc-header></vc-header>
    <div class="content">
      <slot></slot>
    </div>
  <vc-footer></vc-footer>
</template>

<script>
import vcHeader from '../components/Header'
import vcFooter from '../components/Footer'
export default {
  components: {
    vcHeader,
    vcFooter
  }
}
</script>

<style scoped>
div.content {
  padding: 50px 0 50px 0;
}
</style>