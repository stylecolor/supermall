<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    if (!this.scroll) {
      // setTimeout(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: 3,
        click: true,
      });
      // }, 1000);
    } else {
      this.scroll.refresh();
    }
    console.log(this.$refs.wrapper);
  },
//   beforeUpdata  组件更新前调用 
// updataed 组件更新后调用

  updated: function () {
      this.updataed()
  },
  methods: {
    gotoScroll(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    },
    // 当获取接口时加载图片的图片没有加载出来，需要重新计算一下不然滑不动
    updataed() {
      console.log("---");
      this.scroll && this.scroll.refresh();
    },
  },
};
</script>

<style lang="less" scoped>

</style>