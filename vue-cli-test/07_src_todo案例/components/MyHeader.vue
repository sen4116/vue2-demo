<template>
  <div>
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车健确认"
      class="inputText"
      v-model="title"
      @keydown.enter="add"
    />
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
  name: "MyHeader",
  data() {
    return {
      title:''
    }
  },
  methods: {
    add(){
      if(!this.title.trim()) return alert('您输入的有误！')
      const todoObj = {
        id: nanoid(),
        // title: e.target.value,
        title: this.title, 
        done: false 
      }
      this.addTodo(todoObj)
      this.title = ''
    },
  },
  props:['addTodo']
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