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
  width: 100%;
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

div.list {
  max-width: 750px;
  display: inline-flex;
  align-content: flex-start;
  justify-content: center;
  flex-wrap: wrap;
}

.card {
  height: 100px;
  margin: 10px 10px 0 10px;
  background-color: #fff;
  color: #2c3e50;

  /** 圆角 **/
  border-radius: 4px;

  /** 阴影 **/
  -webkit-box-shadow: 1px 1px 2px #bbb;
  -moz-box-shadow: 1px 1px 2px #bbb;
  box-shadow: 1px 1px 2px #bbb;

  /** flex 布局 **/
  flex: 1 1 300px;
  display: flex;
  align-items: center;
}

img.card-img {
  border: 2px solid #ddd;
  height: 80%;
  margin-left: 10px;
}

div.card-content {
  padding-left: 20px;
  padding-right: 10px;
}
</style>
