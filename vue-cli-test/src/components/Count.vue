<template>
  <div>
    <h2>当前的和是 {{$store.state.sum}}</h2>
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
export default {
  data() {
    return {
      n:1
    }
  },
  methods: {
    increment(){
    //  this.$store.dispatch('jia',this.n)
    this.$store.commit('Jia',this.n)
    },
    decrement(){
     this.$store.dispatch('jian',this.n)
    },
    incrementOdd(){
      this.$store.dispatch('jiaOdd',this.n)
    },
    incrementWait(){
      this.$store.dispatch('jiaWait',this.n)
    }
  },
};
</script>

<style>
button {
  margin-right: 5px;
}
select{
  margin-right: 5px;
}
</style>