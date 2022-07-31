<template>
  <div>
    <fiction></fiction>
    <hr />
    <Student></Student>
  </div>
</template>

<script>
import Student from "./components/studentItem";
import Fiction from "./components/fiction";
export default {
  components: {
    Student,
    Fiction,
  },
};
</script>

<style>
</style>