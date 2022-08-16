<template>
  <!-- 
    插槽的执行顺序：先解析父组件全部内容，然后再将插槽的内容传入子组件
  -->
  <div class="categoryBox">
    <Category title="美食">
      <!-- 
        向子组件的插槽传入内容
       -->
      <div>
        <ul v-for="(item, index) in foods" :key="index">
          <li>{{ item }}</li>
        </ul>
      </div>
    </Category>
    <Category title="小说">
      <div>
        <ul v-for="(item, index) in fictions" :key="index">
          <li>{{ item }}</li>
        </ul>
      </div>
    </Category>
    <Category title="nba">
      <!-- <div>
        <ul v-for="(item, index) in nba" :key="index">
          <li>{{ item }}</li>
        </ul>
      </div> -->
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";
export default {
  data() {
    return {
      foods: ["烧烤", "火锅", "拉面", "冒菜"],
      fictions: ["遮天", "剑来", "大泼猴", "斗罗大陆"],
      nba: ["凯里欧文", "勒布朗詹姆斯", "斯蒂芬库里", "凯文杜兰特"],
    };
  },
  components: {
    Category,
  },
};
</script>

<style>
.categoryBox {
  display: flex;
  justify-content: space-around;
}
</style>