<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" ref="imgItem">
    <button @click="getRefs">获取含ref属性的标签</button>
    <schoolItem ref="schoolItem"></schoolItem>
    <hr>
    <studentItem></studentItem>
  </div>
</template>

<script>
import schoolItem from './components/schoolItem';
import studentItem from './components/studentItem'
export default {
  name: 'App',
  components: {
    schoolItem,
    studentItem
  },
  methods:{
    getRefs(){
      // this.$refs：获取所有的有ref属性的真实DOM标签或者是子组件的实例对象
      console.log(this.$refs)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
