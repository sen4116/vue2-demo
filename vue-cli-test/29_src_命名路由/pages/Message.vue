<template>
  <div>
    <ul>
      <li v-for="m in aData" :key="m.id">
        <!-- 简化前，需要写完整的路径 -->
        <!-- <router-link  :to="`/home/message/details?id=${m.id}&title=${m.msg}`">{{m.msg}}</router-link> -->
        <!-- 简化后，直接通过名字跳转 -->
        <!-- <router-link :to="{name:'key1'}"></router-link> -->
        <!-- 简化后，直接通过名字跳转 -->
        <router-link
          :to="{
            name: 'key1',
            query: {
              id: m.id,
              title: m.msg
            },
          }"
          >{{ m.msg }}</router-link
        >
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