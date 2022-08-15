<template>
  <div>
    <div class="searchBox">
        <h3>Search Github Users</h3>
        <div>
            <input type="text" placeholder="enter the name you search" v-model="keyWord">&nbsp;
            <button @click="searchUser">Search</button>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            keyWord:''
        }
    },
    methods: {
        searchUser(){
            // axios({
            //     method:'get',
            //     url:'https://api.github.com/search/users',
            //      // `params` 是与请求一起发送的 URL 参数
            //     params:{
            //         q:this.keyWord
            //     }
            //     // `data` 是作为请求体被发送的数据
            // })
            axios.get(`https://api.github.com/search/users?q=${this.keyWord}`)
            .then(
                response => {
                    console.log(response.data)
                },
                error =>{
                    console.log(error)
                }
            )
        }
    },
}
</script>

<style>
.searchBox{
    height: 100px;
    background-color: #6c757d;
}
</style>