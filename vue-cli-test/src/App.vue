<template>
  <div class="container">
    <div class="row">
      <div class="col-6 topBox">
        <h2>welcome to use VueRouter</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-4 leftBox">
        <div class="row nav">
          <router-link active-class="active" to="/about">About</router-link>
        </div>
        <div class="row nav">
          <router-link active-class="active" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-8">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style>
.topBox {
  text-align: center;
}
.leftBox {
  border-right: 2px solid rgb(101, 100, 100);
}
.leftBox .row {
  text-align: center;
}
.nav {
  height: 50px;
  line-height: 50px;
  background: rgb(46, 123, 217);
}

.active {
  background: rgb(3, 40, 85);
}

.nav > a {
  color: #fff;
  text-decoration: none;
}
</style>