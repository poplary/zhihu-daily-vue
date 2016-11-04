<template>
  <div class="zh-content">
    <slot></slot>
  </div>
</template>

<script>
</script>

<style>
div.zh-content {
  padding: 55px 0 55px 0;
  min-height: 80%;
  
  /** flex 布局 **/
  display: inline-flex;
  align-items: align-content;
  flex-wrap: wrap;
}
</style>
