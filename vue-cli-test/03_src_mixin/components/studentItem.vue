<template>
  <div>
    <h2 @click="clickName(name)">姓名：{{name}}</h2>
    <h2>性别：{{sex}}</h2>
  </div>
</template>

<script>
import {mixinOne} from '../mixin'
export default {
  name:'Student',
  data() {
    return {
      name:'陈平安',
      sex:'男'
    };
  },
  mixins:[mixinOne],
  // mixin.js的生命周期和接收混合的组件执行顺序优先级===>混合的优先级更高
  mounted() {
    console.log('齐静春')
  },
};
</script>

<style>
</style>