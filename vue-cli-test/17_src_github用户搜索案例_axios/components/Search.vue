<template>
  <div>
    <div class="searchBox">
      <h3>Search Github Users</h3>
      <div>
        <input
          type="text"
          placeholder="enter the name you search"
          v-model="keyWord"
        />&nbsp;
        <button @click="searchUser">Search</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      keyWord: "",
    };
  },
  methods: {
    searchUser() {
      // axios({
      //     method:'get',
      //     url:'https://api.github.com/search/users',
      //      // `params` 是与请求一起发送的 URL 参数
      //     params:{
      //         q:this.keyWord
      //     }
      //     // `data` 是作为请求体被发送的数据
      // })
      this.$bus.$emit("upDataList", {
        isInit: false,
        isLoading: true,
        data: [],
        errorMssage: "",
      });
      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        (response) => {
          // console.log(response.data)
          this.$bus.$emit("upDataList", {
            isLoading: false,
            data: response.data.items,
            errorMssage: "",
          });
        },
        (error) => {
          this.$bus.$emit("upDataList", {
            isLoading: false,
            data: [],
            errorMssage: error.message,
          });
        }
      );
    },
  },
};
</script>

<style>
.searchBox {
  padding: 20px;
  height: 150px;
  background-color: #6c757d;
}
</style>