<template>
  <a class="card" v-bind:href="url">
    <div class="card-img-box">
      <img class="card-img" v-bind:src="image"/>
    </div>
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

div.card-img-box {
  border: 2px solid #ddd;
  height: 80px;
  width: 80px;
  margin-left: 10px;
}

img.card-img {
  height: 100%;
  width: 100%;
}

div.card-content {
  padding-left: 20px;
  padding-right: 10px;
  flex: 1;
}
</style>
