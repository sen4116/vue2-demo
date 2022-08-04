<template>
  <div>
    <div class="root">
      <MyHeader></MyHeader>
      <MyList></MyList>
      <MyFooter></MyFooter>
    </div>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader";
import MyList from "./components/MyList";
import MyFooter from "./components/MyFooter";
export default {
  components: {
    MyHeader,
    MyList,
    MyFooter,
  },
};
</script>

<style>
.root {
  width: 500px;
  height: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border: 2px solid #eee;
  border-radius: 10px;
  box-sizing: border-box;
}

.delete{
    background-color: rgb(224, 34, 34);
    color: #fff;
    border-color: rgb(224, 34, 34);
    font-size: 12px;
    height: 25px;
    /* border: none; */
}
</style>