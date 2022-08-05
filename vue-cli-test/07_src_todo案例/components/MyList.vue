<template>
  <div class="list">
    <ul>
       <MyItem 
       v-for="todoObj in todoData" 
       :key="todoObj.id" 
       :todo="todoObj"
       :checkTodo="checkTodo"
       :detestTodo="detestTodo"
       ></MyItem> 
    </ul>
  </div>
</template>

<script>
    import MyItem from './MyItem.vue'
    export default {
        name:'MyList',
        data(){
            return {
                
            }
        },
        components:{
            MyItem
        },
        props:['todoData',"checkTodo","detestTodo"]
    }
</script>

<style lang="less" scoped>
.list{
    padding: 0;
}
ul{
    padding-left:0;

}
</style>