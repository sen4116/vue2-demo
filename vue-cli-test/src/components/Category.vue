<template>
  <div class="content">
    <div class="top">{{title}}分类</div>
    <!-- <div>
        <ul v-for="(item,index) in listData" :key="index">
          <li>{{item}}</li>
        </ul>
    </div> -->
    <!-- 
      默认插槽 （挖一个坑，等待父组件填充）
      当父组件中没有插入数据，就会展示插槽的默认数据
     -->
    <slot>我是默认插槽的默认数据</slot>
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