<template>
  <div>
    <div class="listItem">
      <li>
        <label>
          <input type="checkbox" :checked="data.done" class="checkBox" @change="handleCheck(data.id)"/>
          <span>{{ data.title }}</span>
        </label>
      </li>
      <button class="delete">删除</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyItem",
  data() {
    return {
      data: this.todo,
    };
  },
  props: {
    todo: Object,
    checkTodo:Function,
  },
  methods: {
    handleCheck(id){
      this.checkTodo(id)
    }
  },
};
</script>

<style lang="less" scoped>


.listItem {
  display: flex;
  justify-content: space-between;
  align-content: center;
  line-height: 28px;
  padding: 5px;
  border: 1px solid #ddd;
  box-sizing: border-box;
  position: relative;
}
li {
  list-style: none;
}
</style>