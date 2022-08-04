<template>
  <div>
    <Fiction></Fiction>
    <hr />
    <div class="bgc">你好！李银河</div>
  </div>
</template>

<script>
import Fiction from "./components/fiction";
export default {
  components: {
    Fiction,
  },
};
</script>

<style>
.bgc {
  background-color: blue;
  color: pink;
}
</style>