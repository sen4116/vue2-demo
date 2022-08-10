<template>
  <div>
    <h2 class="bgc">小说：{{name}}</h2>
    <h2 class="yellow">作者：{{author}}</h2>
    <button @click="sendPersonName">给兄弟组件发送名字</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'Fiction',
    data() {
        return {
            name:'剑来',
            author: '烽火戏诸侯',
        }
    },
    props:['getFictionName'],
    methods: {
      sendPersonName(){
        pubsub.publish('hello',999) //发送消息
      }
    },

}
</script>

<style lang="less" scoped>
//有scoped在，形成了局部作用域，服务子组件，外部不干预 
.bgc{
  background-color: rgb(185, 28, 28);
}
.yellow{
  background-color: yellow;
}
</style>>

