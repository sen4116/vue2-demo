<template>
  <div id="app">
    <studentItem name="陈平安" sex="男" :age="18" skill="大千世界，无奇不有"></studentItem>
    <hr/>
    <studentItem name="赔钱"></studentItem>
    <hr/>
    <studentItem name="阿良"></studentItem>
  </div>
</template>

<script>
import studentItem from "./components/studentItem";
export default {
  name: "App",
  components: {
    studentItem,
  },
  methods: {},
};
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
