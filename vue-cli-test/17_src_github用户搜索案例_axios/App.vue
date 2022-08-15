<template>
  <div class="container">
    <div class="row justify-content-md-center ">
      <Search class="col-md-auto col-md-9"></Search>
    </div>
    <div class="">
      <List></List>
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

</style>