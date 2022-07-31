export const mixinOne = {
    methods:{
        clickName(name){
            alert(name) 
        }
    },
    mounted() {
        console.log('天道崩塌，我陈平安，唯有一剑，可搬山，断江，倒海，降妖，镇魔，敕神，摘星，摧城，开天')
    },
}

export const mixinTwo = {
    data() {
        return {
            x: 1,
            y: 2
        }
    },
}