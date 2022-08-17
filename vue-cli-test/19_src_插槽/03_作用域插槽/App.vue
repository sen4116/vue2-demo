<template>
  <!-- 
    插槽的执行顺序：先解析父组件全部内容，然后再将插槽的内容传入子组件
    作用域插槽：插槽向使用者传入数据，使用者接收，在tmeplate模板中需要使用slot-scope
  -->
  <div class="categoryBox">
    <Category title="美食">
      <template slot-scope="value">
        <div>
          <ul v-for="(item, index) in value.foods" :key="index">
            <li>{{ item }}</li>
          </ul>
        </div>
      </template>
      <template v-slot:key1="{sex}">{{sex}}</template>
    </Category>
    <Category title="小说">
      <template slot-scope="{fictions}">
        <div>
          <ul v-for="(item, index) in fictions" :key="index">
            <li>{{ item }}</li>
          </ul>
        </div>
      </template>
    </Category>
    <Category title="nba">
      <!-- 动态插槽名 -->
      <template v-slot:[slotName] >
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";
export default {
  data() {
    return {
      slotName:'fictions'
    }
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