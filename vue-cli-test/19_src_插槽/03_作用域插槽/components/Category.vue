<template>
  <div class="content">
    <div class="top">{{ title }}分类</div>
    <slot :foods="foods" :fictions="fictions" :nba="nba"></slot>
    <slot name="key1" sex="男">我是默认插槽1</slot>
    <slot name="key2">我是默认插槽2</slot>
    <slot name="fictions" >
      我陈平安有一剑
    </slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      foods: ["烧烤", "火锅", "拉面", "冒菜"],
      fictions: ["遮天", "剑来", "大泼猴", "斗罗大陆"],
      nba: ["凯里欧文", "勒布朗詹姆斯", "斯蒂芬库里", "凯文杜兰特"],
    };
  },
  props: ["title"],
};
</script>

<style lang="less">
.content {
  width: 150px;
  height: 260px;
  background: skyblue;
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: 30px 0;
  box-sizing: border-box;
  .top {
    text-align: center;
    background: rgb(237, 99, 7);
  }
}
</style>