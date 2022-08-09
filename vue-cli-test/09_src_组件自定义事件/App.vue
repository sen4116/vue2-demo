<template>
  <div>
    <div class="bgc">{{msg}}</div>
    <hr />
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <Fiction :getFictionName="getFictionName"></Fiction>
    <hr>
    <!--自定义事件第一种写法: 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 -->
    <!-- <person @getPersonName1="getPersonName"></person> -->
    <!--自定义事件第二种写法: 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据  -->
    <person ref="person" @click.native="show"></person>
    <!-- 
      给子组件绑定原生的DOM事件，需要用到修饰符 .native,
      作用：将事件绑定给子组件的根DOM元素,template标签除外
     -->
  </div>
</template>

<script>
import person from "./components/person";
import Fiction from "./components/fiction";
export default {
  components: {
    Fiction,
    person
  },
  data() {
    return {
      msg: '你好！李银河'
    }
  },
  methods: {
    getFictionName(name){
      console.log('我接收到了作者姓名：'+name)
    },
    getPersonName(name,...num){
      console.log(this)
      console.log('我接收到了主人公姓名：'+name,num);
    },
    m1(){
      console.log('234')
    },
    show(){
      alert('你好！')
    }
  },
  mounted() {
    // $on: 实例方法事件,给实例对象添加事件，而事件的普通函数回调中this是指 调用者，
    //若是使用了箭头函数回调中this是指 父组件本身，因为箭头函数没有this，会向外寻找
    this.$refs.person.$on('getPersonName1',this.getPersonName)
    this.$refs.person.$on('dome',this.m1)
    //$once: 只执行一次实例方法事件
    // this.$refs.person.$once('getPersonName1',this.getPersonName)
  },
};
</script>

<style>
.bgc {
  background-color: blue;
  color: pink;
}
</style>