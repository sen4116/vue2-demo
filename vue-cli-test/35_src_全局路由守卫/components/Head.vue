<template>
  <div>
    <h2>welcome to use VueRouter</h2>
    <button @click="goForward">前进</button>
    <button @click="goBack">后退</button>
    <button @click="go">测试go(2)</button>
  </div>
</template>

<script>
export default {
    name:'Head',
    methods: {
      goForward(){
        this.$router.forward()
      },
      goBack(){
        this.$router.back()
      },
      go(){
        this.$router.go(2)
      }
    },
}
</script>

<style>

</style>