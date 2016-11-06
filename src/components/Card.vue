<template>
  <div class="card">
    
    <img class="card-img" v-bind:src="image"/>
    <div class="card-content">
      <p>{{title}}</p>
      <p>{{date}}</p>
    </div>
    
  </div>
</template>

<script>
export default {
  props: [
    'title',
    'date',
    'image'
  ]
}
</script>

<style scoped>
div.card {
  height: 100px;
  margin: 10px 10px 0 10px;
  background-color: #fff;

  /** 圆角 **/
  border-radius: 4px;

  /** 阴影 **/
  -webkit-box-shadow: 1px 1px 2px #bbb;
  -moz-box-shadow: 1px 1px 2px #bbb;
  box-shadow: 1px 1px 2px #bbb;

  /** flex 布局 **/
  flex: 1 1 280px;
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
