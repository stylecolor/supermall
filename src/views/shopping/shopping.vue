<template>
  <div class="core-container">
    <div class="scroll-wrapper" ref="scroll">
      <div class="scroll-content">
        <div
          class="scroll-item"
          v-for="(item, index) in emojis"
          :key="index"
          @click="clickHandler(item)"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import BScroll from '@better-scroll/core'
import BScroll from "better-scroll";
export default {
  name: "Shopping",
  data() {
    return {
      emojis: [
        "😀 😁 😂 🤣 😃",
        "😄 😅 😆 😉 😊",
        "😫 😴 😌 😛 😜",
        "👆🏻 😒 😓 😔 👇🏻",
        "😑 😶 🙄 😏 😣",
        "😞 😟 😤 😢 😭",
        "🤑 😲 🙄 🙁 😖",
        "👍 👎 👊 ✊ 🤛",
        "🙄 ✋ 🤚 🖐 🖖",
        "👍🏼 👎🏼 👊🏼 ✊🏼 🤛🏼",
        "☝🏽 ✋🏽 🤚🏽 🖐🏽 🖖🏽",
        "🌖 🌗 🌘 🌑 🌒",
        "💫 💥 💢 💦 💧",
        "🐠 🐟 🐬 🐳 🐋",
        "😬 😐 😕 😯 😶",
        "😇 😏 😑 😓 😵",
        "🐥 🐣 🐔 🐛 🐤",
        "💪 ✨ 🔔 ✊ ✋",
        "👇 👊 👍 👈 👆",
        "💛 👐 👎 👌 💘",
        "👍🏼 👎🏼 👊🏼 ✊🏼 🤛🏼",
        "☝🏽 ✋🏽 🤚🏽 🖐🏽 🖖🏽",
        "🌖 🌗 🌘 🌑 🌒",
        "💫 💥 💢 💦 💧",
        "🐠 🐟 🐬 🐳 🐋",
        "😬 😐 😕 😯 😶",
        "😇 😏 😑 😓 😵",
        "🐥 🐣 🐔 🐛 🐤",
        "💪 ✨ 🔔 ✊ ✋",
        "👇 👊 👍 👈 👆",
        "💛 👐 👎 👌 💘",
      ],
    };
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    this.bs.destroy();
  },
  methods: {
    init() {
      this.bs = new BScroll(this.$refs.scroll, {
        probeType: 3,
        click: true,
        pullUpLoad: true,
        // pullUpLoad: {
        //     threshold:-20
        // }
      });
      this.bs.on("scroll", ({ y }) => {
        // console.log('scrolling-'+y)
      });
      this.bs.on("scrollEnd", () => {
        // console.log('scrollingEnd')
      });
      this.bs.on("pullingUp", () => {
        console.log("加载更多~");
        setTimeout(() => {
          this.bs.finishPullUp();
          this.bs.refresh();
        },1000);
      });
    },
    clickHandler(item) {
      window.alert(item);
    },
  },
};
</script>

<style  scoped>
.core-container .scroll-wrapper {
  height: 400px;
  overflow: hidden;
}

.scroll-item {
  height: 50px;
  line-height: 50px;
  font-size: 24px;
  font-weight: bold;
  border-bottom: 1px solid #eee;
  text-align: center;
}
.scroll-item:nth-child(2n) {
  background-color: #f3f5f7;
}
.scroll-item:nth-child(2n + 1) {
  background-color: #42b983;
}
</style>