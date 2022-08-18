<template>
  <div>
    <h2>当前的和是 {{ $store.state.sum }}</h2>
    <h2>当前的十倍和是 {{ $store.getters.bigSum }}</h2>
    <h2>{{ name }}</h2>
    <h2>{{ fiction }}</h2>
    <h2>{{ bigSum }}</h2>
    <select v-model.number="n">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
      <option :value="4">4</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      n: 1,
    };
  },
  computed: {
    // 用于帮助我们映射state 中的数据为计算属性（数组写法）
    // ...mapState(['name','fiction'])
    // 用于帮助我们映射state 中的数据为计算属性（对象写法）
    ...mapState({ name: "name", fiction: "fiction" }),
    // 用于帮助我们映射getters 中的数据为计算属性（对象写法）
    // ...mapGetters({ bigSum: "bigSum" }),
    // 用于帮助我们映射getters 中的数据为计算属性（数组写法）
    ...mapGetters(["bigSum"]),
  },
  methods: {
    increment() {
      //  this.$store.dispatch('jia',this.n)
      this.$store.commit("Jia", this.n);
    },
    decrement() {
      this.$store.dispatch("jian", this.n);
    },
    incrementOdd() {
      this.$store.dispatch("jiaOdd", this.n);
    },
    incrementWait() {
      this.$store.dispatch("jiaWait", this.n);
    },
  },
};
</script>

<style>
button {
  margin-right: 5px;
}
select {
  margin-right: 5px;
}
</style>