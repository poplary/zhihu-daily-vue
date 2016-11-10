<template>
    <a class="card" v-bind:href="url">
      <img class="card-img" v-bind:src="image"/>
      <div class="card-content">
        <p>{{title}}</p>
        <p>{{date}}</p>
      </div>
    </a>
    
</template>

<script>
export default {
  props: [
    'title',
    'date',
    'image',
    'url'
  ]
}
</script>

<style scoped>
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
