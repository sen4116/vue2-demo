<template>
  <div class="content">
    <div class="top">{{title}}分类</div>
    <slot>我是默认插槽的默认数据</slot>
    <!-- 具名插槽 -->
    <slot name="foot" ></slot>
    <slot name="fiction"></slot>
    <slot name="key"></slot>
    
  </div>
</template>

<script>
export default {
  props:['title',]
}
</script>

<style lang="less">
.content{
  width: 150px;
  height: 220px;
  background: skyblue;
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: 30px 0;
  box-sizing: border-box;
  .top{
    text-align: center;
    background: rgb(237, 99, 7);
  }
}
</style>