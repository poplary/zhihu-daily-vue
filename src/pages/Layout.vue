<template>
  <vc-header></vc-header>
      <slot></slot>
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
