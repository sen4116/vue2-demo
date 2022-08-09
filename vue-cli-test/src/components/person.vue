<template>
  <!-- 
    在子组件标签上用 v-on 绑定自定义事件,子组件不用接收操作,
    只需要通过 this.$emit 去触发 getPersonName1,vue就会自动调用父组件的事件,
   -->
  <div>
    <h2>姓名：{{ name }}</h2>
    <h2>台词：{{ word }}</h2>
    <h2>{{num}}</h2>
    <button @click="setNum">num++</button>
    <button @click="setName">传递主人公名字</button>
    <button @click="setOff">销毁自定义事件</button>
    <button @click="death">销毁组件实例</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num:0,
      name: "陈平安",
      word: "天道崩塌，我陈平安，唯有一剑，可搬山，断江，倒海，降妖，镇魔，敕神，摘星，摧城，开天",
    };
  },
  methods: {
    setNum(){
      console.log('我在被调用')
      this.num++
    },
    setName() {
      this.$emit("getPersonName1", this.name,666,777,888);
      this.$emit('dome')
    },
    setOff(){
      // 解绑一个自定义事件
      this.$off('getPersonName1')
      // 解绑多个自定义事件
      // this.$off(['getPersonName1','dome'])
      // 解绑所有的自定义事件
      // this.$off()
    },
    death(){
      // 销毁了当前person组件的实例,销毁后所有person实例的自定义事件全部都不奏效
      // 完全销毁一个实例。清理它与其它实例的连接，解绑它的全部指令及事件监听器。
      this.$destroy()
    }
  },
};
</script>

<style>
</style>