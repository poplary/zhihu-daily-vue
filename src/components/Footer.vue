<template>
  <footer>
    <router-link class="footer-tab" v-bind:to="{ name: 'index'}" active-class="active" exact>tab1</router-link>

    <router-link class="footer-tab" v-bind:to="{ name: 'history'}" active-class="active" exact>tab2</router-link>

    <router-link class="footer-tab" v-bind:to="{ name: 'info'}" active-class="active" exact>tab3</router-link>

  </footer>
</template>

<style>
footer {
  position: fixed;
  right: 0;
  left: 0;
  z-index: 99;
  bottom: 0;
  margin-bottom: 0;
  height: 50px;
  width: 100%;
  font-size: 20px;

  /** 圆角 **/
  border-radius: 1px;

  /** flex 布局 **/
  display: inline-flex;
  align-items: stretch;
  
}

.footer-tab {
  display: block;
  -webkit-flex: 1;
  flex: 1;
  text-align: center;
  padding: 15px;
  color: #2c3e50;
  text-decoration: none;
  background-color: #2c3e50;
  color: #41b883;
}

.active {
  text-decoration: none;
  background-color: #41b883;
  color: #2c3e50;
}
</style>
