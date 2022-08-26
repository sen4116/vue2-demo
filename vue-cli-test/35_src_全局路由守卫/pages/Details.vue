<template>
  <div>
    <h2>消息id:{{id}}</h2>
    <h2>消息title:{{title}}</h2>
  </div>
</template>

<script>
export default {
    name:'Details',
    props:['id','title']
}
</script>

<style>

</style>