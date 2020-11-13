<template>
  <div id="app">
    <keep-alive exclude="detail">
    <router-view></router-view>
    </keep-alive>
    <autoTabBar></autoTabBar>
  </div>
</template>

<script>
import autoTabBar from "components/content/autoTabBar";

export default {
  name: "App",
  components: {
    autoTabBar
  },
};
</script>

<style lang="less" scoped>
@import "assets/css/base.css";

</style>
