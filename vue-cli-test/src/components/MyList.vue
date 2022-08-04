<template>
  <div class="list">
    <ul>
       <MyItem ></MyItem> 
    </ul>
  </div>
</template>

<script>
    import MyItem from './MyItem.vue'
    export default {
        name:'MyList',
        components:{
            MyItem
        }
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