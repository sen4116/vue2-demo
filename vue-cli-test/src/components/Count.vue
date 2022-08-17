<template>
  <div>
    <h2>当前的和是{{sum}}</h2>
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
      sum:0,
      n:1
    }
  },
  methods: {
    increment(){
      this.sum += this.n
    },
    decrement(){
      this.sum -= this.n
    },
    incrementOdd(){
      if(this.sum % 2){
        this.sum += this.n
      }else{
        alert('当前和不是奇数')
      } 
    },
    incrementWait(){
      setTimeout(()=>{
        this.sum += this.n
      },3000)
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