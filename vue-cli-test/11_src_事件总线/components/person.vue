<template>
  <div>
    <h2>姓名：{{ name }}</h2>
    <h2>台词：{{ word }}</h2>
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
  mounted() {
    // 绑定事件 第一种方法
    // this.x.$on('hello',this.hello)
    this.$bus.$on('hello',this.hello)
  },
  methods: {
    hello(x){
      console.log('我接收到了兄弟组件发给我的数据x：' + x)
    }
  },
};
</script>

<style>
</style>