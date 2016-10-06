<template>
  <card>
    <card-header>
      <a :href="url">
        <card-content>
          <div class="image-box">
            <img class="image" :src="image" />
          </div>
          <div class="content-box">
            <p>{{ title }}</p>
            <p>{{ date }}</p>
          </div>
        </card-content>
      </a>
    </card-header>
  </card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    }

  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
div.image-box {
  width: 25%;
  float: left;
  margin-bottom: 15px;
}

div.content-box {
  width: 75%;
  float: left;
  font-size: 16px;
  padding-left: 10px;
}

img.image {
  vertical-align: middle;
  width: 100%;
  height: 100%;
  border: 2px solid #ddd;
}

a {
  color: #888 !important;
  display: block;
}

p {
  margin: 0;
}
</style>