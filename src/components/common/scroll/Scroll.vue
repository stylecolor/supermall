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
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    if (!this.scroll) {
      // console.log(this.probeType);
      // setTimeout(() => {
      // 创造BScroll对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: true,
        pullUpLoad: this.pullUpLoad,
      });
      // }, 1000);
      // 监听位置
      if (this.probeType === 2 || this.probeType === 3) {
        this.scroll.on("scroll", (position) => {
          // console.log(position)
          this.$emit("scroll", position);
        });
      }

      // 监听上拉事件
      this.scroll.on("pullingUp", () => {
        //  console.log("加载更多~");
        this.$emit("onPullingUp");
        // setTimeout(() => {
        //   this.scroll.finishPullUp();
        //   this.scroll.refresh();
        // },1000);
      });
    } else {
      this.scroll.refresh();
    }
    // console.log(this.$refs.wrapper);
  },
  //   beforeUpdata  组件更新前调用
  // updataed 组件更新后调用

  // updated: function () {
  //   this.refresh();
  // },
  methods: {
    gotoScroll(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      setTimeout(() => {
        this.scroll.finishPullUp();
        this.scroll.refresh();
      }, 1000);
    },
    // 当获取接口时加载图片的图片没有加载出来，需要重新计算一下不然滑不动
    refresh() {
      // console.log("---");
      this.scroll && this.scroll.refresh();
    },
  },
};
</script>

<style lang="less" scoped>
</style>