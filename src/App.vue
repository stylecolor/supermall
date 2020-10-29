<template>
  <div id="app">
    <router-view></router-view>
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
