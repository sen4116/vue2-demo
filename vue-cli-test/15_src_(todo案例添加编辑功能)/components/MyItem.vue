<template>
  <div>
    <div class="listItem">
      <li>
        <label>
          <input
            type="checkbox"
            :checked="data.done"
            class="checkBox"
            @change="handleCheck(data.id)"
          />
          <span v-show="!data.isEdit">{{ data.title }}</span>
          <input  
            ref="inputTodo"
            type="text"
            v-show="data.isEdit" 
            :value="data.title" 
            @blur="handelBlur(data,$event)"
          />
          <!-- <input  
            type="text"
            v-show="data.isEdit" 
            v-model="data.title"  可以少些更新的代码，v-model就可以做到数据实时更新
            @blur="handelBlur(data,$event)"
          /> -->
        </label>
      </li>
      <div class="btnBox">
        <button @click="handleEdit(data)">编辑</button>
        <button class="delete" @click="handleDetest(data.id)">删除</button>
      </div>
    </div>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
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
    // 编辑事件
    handleEdit(data){
      if(!Object.hasOwn(data,'isEdit')){ //判断对象是否含有该属性
        this.$set(data,'isEdit',true)
      }else{
        data.isEdit = true
      }
      this.$nextTick(()=>{
        this.$refs.inputTodo.focus()
      })
    },
    // 当事件失去焦点
    handelBlur(data,e){
      data.isEdit = false
      this.$bus.$emit('updateTodo',data.id,e.target.value)
    },
    //勾选or取消 checkbox事件
    handleCheck(id) {
      // this.checkTodo(id)
      this.$bus.$emit("checkTodo", id);
    },
    // 删除一个todo
    handleDetest(id) {
      // 确认为true，取消为false  confirm：浏览器对话框
      if (!confirm("是否删除本事件?")) return;
      // this.detestTodo(id)
      // this.$bus.$emit('detestTodo',id)
      pubsub.publish("detestTodo", id);
    },
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
  .btnBox {
    display: flex;
    align-items: center;
    button:nth-child(1){
      width: 45px;
      height: 25px;
      background: skyblue;
      color: #fff;
      border: rgb(104, 161, 183);
      margin-right: 5px;
    }
    button {
      display: none;
    }
  }
}
li {
  list-style: none;
}

.listItem:hover {
  background-color: #ddd;
  button {
    display: block;
  }
}
</style>