<template>
  <div>
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车健确认"
      class="inputText"
    />
  </div>
</template>

<script>
export default {
  name: "MyHeader",
};
</script>

<style scoped>
.inputText {
  width: 100%;
  height: 35px;
  border: 2px solid #eee;
  border-radius: 10px;
  padding: 5px 10px;
  font-size: 14px;
  box-sizing: border-box;
}
</style>