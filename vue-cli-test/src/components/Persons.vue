<template>
  <div>
    <h1>人员列表</h1>
    <h2 style="color:red">count组件的和是: {{sum}}</h2>
    <input type="text" placeholder="请输入名字" v-model="name"> 
    <button @click="add">添加</button>
    <ul>
        <li v-for="p in personList" :key="p.id">
            {{p.name}}
        </li>
    </ul>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
    data() {
        return {
            name:''
        }
    },
    computed:{
        personList(){
            return this.$store.state.persons.personList
        },
        sum(){
            return this.$store.state.counts.sum
        }
    },
    methods: {
        add(){
            const personObj = {id:nanoid(),name:this.name}
            this.$store.commit('persons/ADD_PERSON',personObj)
            this.name =""
        }
    },
}
</script>

<style>

</style>