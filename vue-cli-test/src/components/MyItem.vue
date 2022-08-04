<template>
  <div>
    <div class="listItem">
    <li >
      <label >
        <input type="checkbox" />
        <span>xxxxx</span>
      </label>
    </li>
    <button class="delete">删除</button>
  </div>
  <div class="listItem">
    <li >
      <label >
        <input type="checkbox" />
        <span>xxxxx</span>
      </label>
    </li>
    <button class="delete">删除</button>
  </div>
  </div>
</template>

<script>
export default {
  name: "MyItem",
};
</script>

<style scoped>
.listItem{
    display: flex;
    justify-content: space-between;
    align-content: center;
    line-height: 28px;
    padding: 5px;
    border: 1px solid #ddd;
    box-sizing: border-box;
}
li {
    list-style: none;
    
}

</style>