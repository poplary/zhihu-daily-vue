<template>
  <header>
    <div class="header">
      <router-link class="footer-tab" v-bind:to="{ name: 'index'}" exact>
        <div class="header-icon">
          <i class="fa fa-lg fa-home"></i>
        </div>
      </router-link>

      <div class="header-title">
        {{ title }}
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<style>
header {
  position: fixed;
  right: 0;
  left: 0;
  z-index: 99;
  top: 0;
  margin-bottom: 0;
  height: 50px;
  width: 100%;
  background-color: #41b883;
  font-size: 24px;
  font-weight: 500;
  color: #eee;

  /** 阴影 **/
  -webkit-box-shadow: 0 3px 5px #666;
  -moz-box-shadow: 0 3px 5px #666;
  box-shadow: 0 3px 5px #666;

  /** 圆角 **/
  border-radius: 2px;

  /** flex 布局 **/
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

div.header {
  flex: 1;
  max-width: 750px;
  
  /** flex 布局 **/
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
}

div.header-icon {
  height: 50px;
  width: 50px;
  display: inline-flex;
  align-items: center;
  justify-content: space-around;
}

a {
  color: #eee;
  text-decoration: none;
}

</style>
