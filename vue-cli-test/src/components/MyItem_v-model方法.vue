<template>
  <div>
    <div class="listItem">
      <li>
        <label>
          <!-- <input type="checkbox" :checked="data.done" class="checkBox" @change="handleCheck(data.id)"/> -->
          <!-- 
            通过v-model的双向数据绑定，从而直接修改app中的数据

            props 接收数据被Vue浅监听，只监听接收数据存储的外层数据变化，没有监听数据底层的变化。
            如：接收是一个对象obj，而此时修改obj.a,这种情况Vue是监听不了的，但是修改obj = "xxx",这样操作会被Vue所监听
           -->
          <input type="checkbox" v-model="todo.done" class="checkBox" />
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
  },
  methods: {
  
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