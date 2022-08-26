<template>
  <div>
    <ul>
      <li v-for="n in newData" :key="n.id">
        {{ n.title }}
        <button @click="toPush(n)">push</button>
        <button @click="setReplace(n)">replace</button>
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      newData: [
        {
          id: "001",
          title: "news001",
        },
        {
          id: "002",
          title: "news002",
        },
        {
          id: "003",
          title: "news003",
        },
      ],
    };
  },
  methods: {
    toPush(data) {
      this.$router.push({
        name: "key2",
        query: {
          id: data.id,
          title: data.title,
        },
      });
    },
    setReplace(data) {
      this.$router.replace({
        name: "key2",
        query: {
          id: data.id,
          title: data.title,
        },
      });
    },
  },
};
</script>

<style>
</style>