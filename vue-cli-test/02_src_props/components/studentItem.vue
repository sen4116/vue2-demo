<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生姓别：{{ sex }}</h2>
    <h2>学生年龄：{{ myAge }}</h2>
    <h2>技能：{{ skill }}</h2>
    <button @click="updateAge">data数据转接，后修改age+1</button>
  </div>
</template>

<script>
export default {
  name: "studentItem",
  data() {
    console.log(this)
    /*
      vc(组件实例对象)中data数据只有msg，name、age等属性是父组件动态传入
      父组件传入的数据，子组件接收，不建议在子组件中直接修改父组件传入的数据，应该在data定义接收，后修改data定义好的属性
      🎇🎇🎇 若子组件data数据属性名和父组件传入props接收定义的数据属性名同名，那么父组件的优先级更高
    */ 
    return {
      msg: "我是陈平安",
      // name: "小明",
      // sex: "男",
      myAge: this.age,
      // skill: "js、vue",
    };
  },
  methods: {
    updateAge(){
      this.myAge += 1
    }
  },
  // 简单声明接受
  // props:['name','sex','age','skill']

  // 接受同时对传入数据的类型进行控制,如果传入的类型不对，会报错
  // props:{
  //   name: String,
  //   age: Number,
  //   sex: String,
  //   skill: String
  // }

  // 接受数据的同时：进行类型限制+默认值的指定+必要性控制
  props:{
    name:{
      type: String,//name类型是字符串
      required: true,//name是必要的
    },
    //必要性 和 默认值 不必要在一起限制一个属性
    age:{
      type:Number,
      default: 99 //默认值
    },
    sex: String,
    skill:String
  }
};
</script>

<style>
</style>