<template>
  <div>
    <h1>人员列表</h1>
    <h2 style="color:red">count组件的和是: {{sum}}</h2>
    <h2>第一个人的名字是：{{firstName}}</h2>
    <input type="text" placeholder="请输入名字" v-model="name"> 
    <button @click="add">添加</button>
    <button @click="addWang">添加一个姓王的人</button>
    <button @click="addAxios">添加一个的人</button>
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
        },
        firstName(){
            return this.$store.getters['persons/firstPersonName'].name
        }
    },
    methods: {
        addAxios(){
            this.$store.dispatch('persons/addPersonServer')
        },
        addWang(){
            const personObj = {id:nanoid(),name:this.name}
            this.$store.dispatch('persons/addPersonWang',personObj)
        },
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