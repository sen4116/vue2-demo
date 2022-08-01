<template>
  <div>
    <h2>小说：{{name}}</h2>
    <h2>作者：{{author | myFilter}}</h2>
    <input type="text" v-FBind="x">
  </div>
</template>

<script>
export default {
    name:'Fiction',
    data() {
        return {
            name:'剑来',
            author: '烽火戏诸侯',
            x:3
        }
    },
}
</script>

<style>

</style>