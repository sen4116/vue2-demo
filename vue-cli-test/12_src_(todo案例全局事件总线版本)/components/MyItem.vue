<template>
  <div>
    <div class="listItem">
      <li>
        <label>
          <input type="checkbox" :checked="data.done" class="checkBox" @change="handleCheck(data.id)"/>
          <span>{{ data.title }}</span>
        </label>
      </li>
      <button class="delete" @click="handleDetest(data.id)">删除</button>
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
    //勾选or取消 checkbox事件
    handleCheck(id){
      // this.checkTodo(id)
      this.$bus.$emit('checkTodo',id)
    },
    // 删除一个todo 
    handleDetest(id){
      // 确认为true，取消为false  confirm：浏览器对话框
      if(!confirm('是否删除本事件?')) return 
      // this.detestTodo(id)
      this.$bus.$emit('detestTodo',id)
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
  button{
    display: none;
  }
}
li {
  list-style: none;
}

.listItem:hover{
  background-color: #ddd;
  button{
    display: block;
  }
}

</style>