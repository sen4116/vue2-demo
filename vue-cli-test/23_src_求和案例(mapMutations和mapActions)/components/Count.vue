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
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations,mapActions} from "vuex";
export default {
  data() {
    return {
      n: 1,
    };
  },
  computed: {
    // 程序员自己写的
    /*
    sum(){
      return this.$store.state.sum
    },
    bigSum(){
      return this.$store.getters.bigSum
    }
    */ 
    

    // 用于帮助我们映射state 中的数据为计算属性（数组写法）
    ...mapState(['name','fiction',]),
    // 用于帮助我们映射state 中的数据为计算属性（对象写法）
    // ...mapState({ name: "name", fiction: "fiction" ,}),
    // 用于帮助我们映射getters 中的数据为计算属性（对象写法）
    // ...mapGetters({ bigSum: "bigSum" }),
    // 用于帮助我们映射getters 中的数据为计算属性（数组写法）
    ...mapGetters(["bigSum"]),
  },
  methods: {

    // 程序员自己亲自调用
    // increment() {
    //   //  this.$store.dispatch('jia',this.n)
    //   this.$store.commit("Jia", this.n);
    // },
    // decrement() {
    //   this.$store.commit("Jian", this.n);
    // },

    //对象写法 key：调用方法名，value：mutations中对应的方法名， 🎆🎆🎆 不过此处是传不了参数的，mutations中对应方法接收的是event参数，所以想传值可以在调用的时候传
    ...mapMutations({increment:'Jia',decrement:'Jian'}),
    //数组写法，那么调用的方法名要与mutations对应的方法名一致
    // ...mapMutations(['Jia','Jian']),


    // incrementOdd() {
    //   this.$store.dispatch("jiaOdd", this.n);
    // },
    // incrementWait() {
    //   this.$store.dispatch("jiaWait", this.n);
    // },

    //对象写法 key：调用方法名，value：mutations中对应的方法名，
    ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
     //数组写法，那么调用的方法名要与mutations对应的方法名一致
    // ...mapActions(["jiaOdd","jiaWait"])
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