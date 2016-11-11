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
</style>
