<template>
  <div>
    <h2 @click="clickName(name)">小说：{{name}}</h2>
    <h2>作者：{{author}}</h2>
  </div>
</template>

<script>
import {mixinOne,mixinTwo} from '../mixin'
/*
    在mixin.js中暴露的data会于接受的组件的data数据进行合并
    若被接收的组件中data属性名和mixin.js混合的data属性名一致，组件数据覆盖，混合数据 ===>接收组件优先级高
*/ 
export default {
    name:'Fiction',
    data() {
        return {
            name:'剑来',
            author: '烽火戏诸侯',
            x:3
        }
    },
    mixins:[mixinOne,mixinTwo]
}
</script>

<style>

</style>