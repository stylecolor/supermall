<template>
  <div class="tab_bar_item">
    <div v-if="!isActive" @click="itemClick"><slot name="item-img"></slot></div>
    <div v-else><slot name="item-img-active"></slot></div>
    <div :style="activeStyle "><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    link: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },
  data() {
    return {
      // isActive: false,
    };
  },
  computed: {
    isActive() {
      // this.$route.path 获取活跃的路径  indexOf等于-1没有找到
      // console.log(this.$route.path)
      return this.$route.path.indexOf(this.link) !== -1;
    },
    activeStyle(){
      return this.isActive ? {'color':this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      // console.log("ddd");
      this.$router.push(this.link);
    },
  },
};
</script>

<style>
.tab_bar_item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab_bar_item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-top: 3px;
}
.active {
  color: aqua;
}
</style>