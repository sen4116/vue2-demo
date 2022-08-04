<template>
  <div class="footerBox">
    <div>
        <label for="">
        <input type="checkbox">
    </label>
    <span class="footerText">
        <span>已完成0</span>/全部2
    </span>
    </div>
    <button class="delete">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
};
</script>

<style scoped>
.footerBox{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.footerText{
    margin-left: 20px;
}
</style>