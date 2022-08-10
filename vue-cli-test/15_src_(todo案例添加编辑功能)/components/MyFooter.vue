<template>
  <div class="footerBox" v-show="total">
    <div>
      <label for="">
        <!-- 使用methods方法 -->
        <!-- <input type="checkbox" class="checkBox" :checked="isAll"  @change="checkAll"/> -->
        <!-- 使用计算属性场景：当遇到一个输入类型的节点，输入的初始值需要展示，并且有用户交互事件，
            可以使用v-model和computed 搭配使用 -->
        <input type="checkbox" class="checkBox" v-model="isAll"/>
      </label>
      <span class="footerText">
        <span>已完成{{ count }}</span
        >/全部{{ total}}
      </span>
    </div>
    <button class="delete" @click="clearTodo">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  // props: ["todoData","checkAllTodo","clearAllTodo"],
  props: ["todoData"],
  computed: {
    total(){
      return this.todoData.length
    },   
    count() {
      return this.todoData.reduce((pre, current) => {
        return pre + (current.done ? 1 : 0);
      }, 0);
    },
    isAll:{
      get(){
        return this.total === this.count && this.total > 0
      },
      set(value){
        // this.checkAllTodo(value)
        this.$emit('checkAllTodo',value)
      }
    }
  },
  methods:{
    checkAll(e){
      // this.checkAllTodo(e.target.checked)
      this.$emit('checkAllTodo',e.target.checked)
    },
    clearTodo(){
      // this.clearAllTodo()
      this.$emit('clearAllTodo')
    }
  }
};
</script>

<style scoped>
.footerBox {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footerText {
  margin-left: 20px;
}
</style>