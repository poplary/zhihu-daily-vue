<template>
  <header>
    <div class="header-icon">
      <i class="fa fa-lg fa-arrow-left"></i>
    </div>

    <div class="header-title">
      header
    </div>

    <div class="header-icon">
    </div>
    
  </header>
</template>

<script>
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
  color: #eee;

  /** 圆角 **/
  border-radius: 2px;

  /** 阴影 **/
  -webkit-box-shadow: 0 3px 5px #666;
  -moz-box-shadow: 0 3px 5px #666;
  box-shadow: 0 3px 5px #666;

  /** flex 布局 **/
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
}

div.header-icon {
  padding: 0 10px 0 10px;
  width: 30px;
}
</style>
