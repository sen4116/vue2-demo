<template>
  <div>
    我是about组件
  </div>
</template>

<script>
export default {
    name:'About',
    //通过路由规则，进入组件时被调用  
    beforeRouteEnter(to,from,next){
      console.log(111,to) //目的地路由组件信息
      console.log(222,from) //来自于哪个组件信息
      next()//放行
    },
    //通过组件路由规则，离开组件时被调用
    beforeRouteLeave (to, from, next) {
      console.log(121,to) //目的地路由组件信息
      console.log(222,from)//来自于哪个组件信息
      next()//离开时放行
    }
}
</script>

<style>

</style>