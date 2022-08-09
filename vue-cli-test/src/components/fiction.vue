<template>
  <div>
    <h2 class="bgc">小说：{{name}}</h2>
    <h2 class="yellow">作者：{{author}}</h2>
    <button @click="setName">传递作者名字</button>
  </div>
</template>

<script>
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
      setName(){
        this.getFictionName(this.author)
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

