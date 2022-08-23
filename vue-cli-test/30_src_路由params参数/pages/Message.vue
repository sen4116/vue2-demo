<template>
  <div>
    <ul>
      <li v-for="m in aData" :key="m.id">
        <!-- 跳转并携带params参数，to的字符串写法（固定传值） -->
        <!-- <router-link to="/home/message/details/666/你好">{{m.msg}}</router-link> -->
        <!-- 跳转并携带params参数，to的对象写法 -->
        <router-link
          :to="{
            name: 'key1',
            params: {
              id: m.id,
              title: m.msg,
            },
          }">{{ m.msg }}
        </router-link>
      </li>
    </ul>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      aData: [
        {
          id: "001",
          msg: "消息001",
        },
        {
          id: "002",
          msg: "消息002",
        },
        {
          id: "003",
          msg: "消息003",
        },
      ],
    };
  },
};
</script>

<style>
li {
  list-style: none;
}
</style>