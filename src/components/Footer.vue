<template>
  <tab-bar :active="-1">
    <tab-bar-item v-link="{ name: 'index', activeClass: 'is-selected' }">
      <icon value="home"></icon>
    </tab-bar-item>
    <tab-bar-item v-link="{ name: 'history', activeClass: 'is-selected' }">
      <icon value="list"></icon>
    </tab-bar-item>
    <tab-bar-item v-link="{ name: 'mine', activeClass: 'is-selected' }">
      <icon value="account_circle"></icon>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
export default{
}
</script>

<style scoped>
.vc-tab-bar {
  bottom: 0;
  position: fixed;
}
.is-selected {
  color: #474a4f !important;
  background-color: #42b983 !important;
}
</style>