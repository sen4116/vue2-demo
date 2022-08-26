<template>
  <div>
    <span :style="{opacity:opacity}">欢迎光临</span>
    <ul>
      <li v-for="n in newData" :key="n.id">
        {{ n.title }}
        <input type="text">
        <!-- <button @click="toPush(n)">push</button>
        <button @click="setReplace(n)">replace</button> -->
      </li>
    </ul>
    <hr />
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      opacity:1,
      newData: [
        {
          id: "001",
          title: "news001",
        },
        {
          id: "002",
          title: "news002",
        },
        {
          id: "003",
          title: "news003",
        },
      ],
    };
  },
  activated() {
    // 路由组件被激活时触发
    this.timer = setInterval(()=>{
      console.log('路由组件被激活时触发')
      this.opacity -= 0.01;
      if(this.opacity <= 0) this.opacity = 1
    },100)
  },
  deactivated() {
    // 路由失活的时候触发
    clearInterval(this.timer)
  },
  methods: {
    toPush(data) {
      this.$router.push({
        name: "key2",
        query: {
          id: data.id,
          title: data.title,
        },
      });
    },
    setReplace(data) {
      this.$router.replace({
        name: "key2",
        query: {
          id: data.id,
          title: data.title,
        },
      });
    },
  },
};
</script>

<style>
</style>