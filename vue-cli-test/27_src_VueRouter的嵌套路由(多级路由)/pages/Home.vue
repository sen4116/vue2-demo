<template>
  <div>
    <div>
        <h2>我是home组件</h2>
    </div>
    <div>
      <ul class="homeLi">
        <li>
          <router-link  active-class="active" to="/home/news">News</router-link>
        </li>
        <li>
          <router-link active-class="active" to="/home/Message">Message</router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name:'Home'
}
</script>

<style>

.homeLi{
  margin-top: 30px;
  height: 100%;
  display: flex;
}
.homeLi > li{
  background: rgb(157, 157, 157);
  list-style: none;
}
.homeLi  li a{
  display: inline-block;
  padding: 10px;
  width: 100%;
  height: 100%;
  color: #eee;
  margin-right: 30px;
  text-decoration: none;
}
</style>