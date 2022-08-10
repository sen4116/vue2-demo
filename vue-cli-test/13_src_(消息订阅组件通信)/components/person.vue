<template>
  <div>
    <h2>姓名：{{ name }}</h2>
    <h2>台词：{{ word }}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  data() {
    return {
      num:0,
      name: "陈平安",
      word: "天道崩塌，我陈平安，唯有一剑，可搬山，断江，倒海，降妖，镇魔，敕神，摘星，摧城，开天",
    };
  },
  mounted() {
    this.pid = pubsub.subscribe('hello',this.hello) // 订阅绑定消息
  },
  methods: {
    hello(messageName,data){
      console.log('我接收到了兄弟组件发给我的eventName：' + messageName+'，数据data：'+data)
    }
  },
  beforeDestroy() {
    pubsub.unsubscribe(this.pid) //解绑订阅消息
  },
};
</script>

<style>
</style>