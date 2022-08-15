<template>
  <div class="container">
    <div class="row justify-content-md-center ">
      <Search class="col-md-auto col-md-9"></Search>
    </div>
    <div class="row  mt20">
      <List class="col-3" v-for="i in 10" :key="i"></List>
    </div>
  </div>
</template>

<script>
import Search from "./components/Search.vue";
import List from "./components/List.vue";
export default {
  components: {
    Search,
    List
  },
};
</script>

<style>
.mt20{
  margin-top: 20px;
}
</style>