<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
</script>

<style>
html, body, #app {
  height: 100%;
}

body {
  margin: 0;
  background-color: #eee;
  display: flex;
  align-content: flex-start;
}

#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  font-family: Source Sans Pro, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
