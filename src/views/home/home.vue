<template>
  <div id="home">
    <nav-bar class="home_nav">
      <div slot="center">商品展示</div>
    </nav-bar>
    <scroll class="content"  ref="scroll">
      <home-swiper :bannerData="bannerData"></home-swiper>
      <recommend-view :recommendData="recommendData"> </recommend-view>
      <feature-view title="本周流行"></feature-view>
      <tab-control
        style="position: sticky; top: 0px; z-index: 5"
        :titles="['最新', '热门', '火爆']"
        @tabClick="tabClick"
      ></tab-control>
      <goods-list :goodsArroy="showGood"></goods-list>
    
    </scroll>
      <back-top @click.native="backTopClick"></back-top>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

import homeSwiper from "./childComps/homeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";
import { getHomeData, getHomeGoods } from "network/homeRequest";

export default {
  name: "Home",
  components: {
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
    homeSwiper,
    RecommendView,
    FeatureView,
  },
  data() {
    return {
      bannerData: [],
      recommendData: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
    };
  },
  created() {
    this.onGetHomeData();
    this.onGetHomeGoods("pop");
    this.onGetHomeGoods("new");
    this.onGetHomeGoods("sell");
    //  console.log(this.bannerData) 这里打印不出来是因为上面是个异步操作
  },
  computed: {
    showGood() {
      return this.goods[this.currentType].list;
    },
  },
  methods: {
    // 事件监听
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
        default:
          break;
      }
    },

    // 网络请求
    onGetHomeData() {
      getHomeData().then((res) => {
        this.bannerData = res.data.banner.list;
        this.recommendData = res.data.recommend.list;
        // console.log(res);
      });
    },
    onGetHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list),
         this.goods[type].page += 1;
        // console.log(res);
      });
    },


      backTopClick(){
        this.$refs.scroll.gotoScroll(0,0,500);
      },
  },
};
</script>

<style lang="less" scoped>
#home{
  padding-top: 44px;
height: 100vh;
}
.home_nav {
  background-color: coral;
  color: white;
}
.content{
  // height: calc(100% - 93px);
  // overflow: hidden;
  // margin-top: 44px;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>