<template>
  <div class="goods-list">
    <goods-list-item v-for="(item,index) in goodsArroy"  :key="index" :goodsObject="item"> {{ goodsArroy }}</goods-list-item>
   
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  name: "GoodsList",
  components: {
    GoodsListItem,
  },
  props: {
    goodsArroy: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.goods-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: var(--color-background);
    padding: 2px;
  }
</style>