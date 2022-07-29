<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <schoolItem></schoolItem>
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
