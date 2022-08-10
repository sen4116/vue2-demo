<template>
  <div>
    <div class="bgc">{{msg}}</div>
    <hr />
    <Fiction ></Fiction>
    <hr>
    <person></person>
  </div>
</template>

<script>
import person from "./components/person";
import Fiction from "./components/fiction";
export default {
  components: {
    Fiction,
    person
  },
  data() {
    return {
      msg: '你好！李银河'
    }
  },
  methods: {
  
  },
  mounted() {
    
  },
};
</script>

<style>
.bgc {
  background-color: blue;
  color: pink;
}
</style>