<template>
  <div>
    <div class="root">
      <MyHeader :addTodo="addTodo"></MyHeader>
      <MyList 
      :todoData="todoData"
      :checkTodo="checkTodo"
       >
      </MyList>
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
  data() {
    return {
      todoData: [
        {
          id: "001",
          title: "吃饭",
          done: true,
        },
        {
          id: "002",
          title: "睡觉",
          done: true,
        },
        {
          id: "003",
          title: "喝酒",
          done: true,
        },
      ],
    };
  },
  methods: {
    // 添加一个todo
    addTodo(todoObj){
      this.todoData.unshift(todoObj)
    },
    // 勾选or取消勾选一个todo
    checkTodo(id){
      this.todoData.forEach(todo => {
        if(todo.id === id) todo.done = !todo.done
      });
    }
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