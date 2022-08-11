<template>
  <div>
    <div class="root">
      <MyHeader @addTodo="addTodo"></MyHeader>
      <MyList
        :todoData="todoData"
        :checkTodo="checkTodo"
        :detestTodo="detestTodo"
      >
      </MyList>
      <MyFooter
        :todoData="todoData"
        @checkAllTodo="checkAllTodo"
        @clearAllTodo="clearAllTodo"
      ></MyFooter>
    </div>
  </div>
</template>

<script>
import pubsub from "pubsub-js"
import MyHeader from "./components/MyHeader";
import MyList from "./components/MyList";
import MyFooter from "./components/MyFooter";
export default {
  components: {
    MyHeader,
    MyList,
    MyFooter,
  },
  data() {
    return {
      todoData:JSON.parse(localStorage.getItem('todoData')) || [],
    };
  },
  methods: {
    // 添加一个todo
    addTodo(todoObj) {
      this.todoData.unshift(todoObj);
    },
    // 勾选or取消勾选一个todo
    checkTodo(id) {
      this.todoData.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done;
      });
    },
    // 删除一条任务
    detestTodo(_,id) {
      // console.log("我接收的一个删除"+id);
      // filter 不会改变原数组
      this.todoData = this.todoData.filter((item) => {
        return item.id != id;
      });
    },
    //全选 or 全不选
    checkAllTodo(done) {
      this.todoData.forEach((item) => {
        item.done = done;
      });
    },
    // 清除所有已经完成的todo
    clearAllTodo() {
      if(!confirm('是否清除已完成任务！')) return
      this.todoData = this.todoData.filter((item) => {
        return !item.done;
      });
    },
  },
  watch:{
    todoData:{
      deep:true,//深度监视
      handler(value){
        localStorage.setItem('todoData',JSON.stringify(value))
      }
    }
  },
  mounted() {
    this.$bus.$on('checkTodo',this.checkTodo)
    // this.$bus.$on('detestTodo',this.detestTodo)
    this.pid = pubsub.subscribe('detestTodo',this.detestTodo)
  },
  beforeDestroy() {
    this.$bus.$off(['checkTodo',])
    pubsub.unsubscribe(this.pid)
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

.delete {
  background-color: rgb(224, 34, 34);
  color: #fff;
  border-color: rgb(224, 34, 34);
  font-size: 12px;
  height: 25px;
  /* border: none; */
}

.checkBox {
  /* 清除checkbox标签原生样式 */
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: none;
  width: 15px;
  height: 15px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 3px;
  position: relative;
  top: 5px;
  left: -2px;
  transition: background 1s;
}

.checkBox:checked {
  background-color: rgb(246, 143, 8);
}
.checkBox:checked::after {
  content: "\2714";
  position: absolute;
  top: 0px;
  left: 2px;
}
</style>