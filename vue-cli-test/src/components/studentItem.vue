<template>
    <div>
        <h2>{{name}}</h2>
        <h2>{{skill}}</h2>
    </div>
</template>

<script>
export default {
    name:'studentItem',
    data() {
        return {
            name: '小明',
            skill: 'js、vue'
        }
    },
}
</script>

<style>
</style>