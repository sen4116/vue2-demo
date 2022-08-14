<template>
  <div>
    <button @click="getFiction">获取小说人物</button>
    <button @click="getCars">获取汽车品牌</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  methods: {
    getFiction(){
      axios.get('http://localhost:8080/fiction/server').then(
        response =>{
          console.log(response.data)
        },
        error => {
          console.log(error)
        }
      )
    },
    getCars(){
      axios.get('http://localhost:8080/car/server').then(
        response =>{
          console.log(response.data)
        },
        error => {
          console.log(error)
        }
      )
    }
  },
}
</script> 

<style>

</style>