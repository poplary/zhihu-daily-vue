<template>
  <card>
    <card-content>
      <item v-bind:href="url" :ripple="true">
        <div class="image-box"><img class="image" :src="image" /></div>
        <item-content class="content-box">
            <p>{{ title }}</p>
            <p>{{ date }}</p>
        </item-content>
      </item>
    </card-content>
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
  padding: 0 !important;
  margin-bottom: 15px;
}

div.content-box {
  width: 75%;
  float: left;
  font-size: 16px;
  padding-left: 10px;
  padding-top: 0;
}

img.image {
  vertical-align: middle;
  width: 100% !important;
  height: 100% !important;
  border: 2px solid #ddd;
  border-radius: 0% !important;
}

a {
  color: #888 !important;
  display: block;
}

p {
  margin: 0;
}

.vc-item:after {
  display: none !important;
}

</style>