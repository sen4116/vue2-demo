<template>
  <div class="listBox row">
    <div class="Box col-3" v-for="item in info.data" :key="item.login" v-show="info.data.length">
      <a :href="item.html_url" >
        <img :src="item.avatar_url" alt="" class="imgBox" />
      </a>
      <div>{{ item.login }}</div>
    </div>
    <div v-show="info.isInit">
      <h2>welcomte to use</h2>
    </div>
    <div v-show="info.isLoading">
      <h2>加载中...</h2>
    </div>
    <div v-show="info.errorMssage">
      {{ info.errorMssage }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      info: {
        isInit: true,
        isLoading: false,
        data: [],
        errorMssage: "",
      },
    };
  },
  mounted() {
    this.$bus.$on("upDataList", (obj) => {
      this.info = { ...this.info, ...obj };
      // console.log(this)
    });
  },
};
</script>

<style lang="less">
.listBox {
  height: 260px;
  box-sizing: border-box;
  .Box {
    outline: rgb(43, 43, 42) solid 1px;
    .imgBox {
      width: 100%;
    }
  }
}
.mt20 {
  margin-top: 20px;
}
</style>