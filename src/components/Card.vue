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
  background-color: #f6f6f6;
  min-width: 300px;
  max-width: 400px;

  /** 圆角 **/
  border-radius: 4px;

  /** 阴影 **/
  -webkit-box-shadow: 1px 3px 5px #bbb;
  -moz-box-shadow: 1px 3px 5px #bbb;
  box-shadow: 1px 3px 5px #bbb;

  /** flex 布局 **/
  -webkit-flex: 1;
  flex: 1;
  display: inline-flex;
  align-items: center;
}

img.card-img {
  border: 2px solid #ddd;
  width: 20%;
  margin-left: 10px;
}

div.card-content {
  padding-left: 20px;
  padding-right: 10px;
}
</style>
