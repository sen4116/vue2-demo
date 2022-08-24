<template>
  <div>
    <div>
        <h2>我是home组件</h2>
    </div>
    <div>
      <ul class="homeLi">
        <li>
          <router-link  active-class="active" to="/home/news" >News</router-link>
        </li>
        <li>
          <router-link active-class="active" to="/home/message">Message</router-link>
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
a{
  text-decoration: none;
  color: rgb(255, 255, 255);
  display: inline-block;
  padding: 2px;
  border: 1px solid rgb(67, 66, 66);
  background: #9d9d9d;
}

.active{
  background: #032855;
}

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

.active {
  background: rgb(3, 40, 85);
}
</style>