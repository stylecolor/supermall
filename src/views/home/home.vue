<template>
  <div id="home">
    <nav-bar class="home_nav">
      <div slot="center">商品展示</div>
    </nav-bar>
       <tab-control
        style="position: sticky; top: 0px; z-index: 5"
        :titles="['最新', '热门', '火爆']"
        @tabClick="tabClick"
         ref="tabControl1"
        v-show="(-topCount)>tabControlTop"
      ></tab-control>
    <scroll
      class="content"
      ref="scroll"
      :probeType="3"
      @scroll="contentScroll"
      :pullUpLoad="true"
      @onPullingUp="loadMore"
    >
      <home-swiper :bannerData="bannerData" @swiperLoad="onSwiperLoad"></home-swiper>
      <recommend-view :recommendData="recommendData"> </recommend-view>
      <feature-view title="本周流行"></feature-view>
      <tab-control
        style="position: sticky; top: 0px; z-index: 5"
        :titles="['最新', '热门', '火爆']"
        @tabClick="tabClick"
        ref="tabControl2"
      ></tab-control>
      <goods-list :goodsArroy="showGood"></goods-list>
    </scroll>
    <back-top
      style="background-color: white; border-radius: 100%"
      @click.native="backTopClick"
      v-show="topCount < -200"
    ></back-top>
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
import { debounce } from "common/const"

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
      topCount: 0,
      tabControlTop:0,
    };
  },
  created() {
    // 请求轮播的数据
    this.onGetHomeData();
    // 请求goods的数据
    this.onGetHomeGoods("pop");
    this.onGetHomeGoods("new");
    this.onGetHomeGoods("sell");
    //  console.log(this.bannerData) 这里打印不出来是因为上面是个异步操作
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh,500);
    this.$bus.$on("itemImageLoad", () => {
      // console.log('shui')
    //  debounce(this.$refs.scroll.refresh(), 500)(); 这样写this.$refs.scroll获取不到
       refresh();
    });

  },
  computed: {
    showGood() {
      return this.goods[this.currentType].list;
    },
  },
  destroyed(){
      console.log('销毁')
  },
  // 当前页面处于活跃
  activated(){
    console.log('活跃')
    // console.log(this.$refs.scroll)
    this.$refs.scroll.scroll.scrollTo(0,this.topCount)
  },
  // 当前页面处于不活跃
  deactivated(){
      console.log('不活跃')
      this.topCount =   this.$refs.scroll.scroll.y
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
        this.$refs.tabControl2.currentIndex = index;
        this.$refs.tabControl1.currentIndex = index;
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
          (this.goods[type].page += 1);
        // console.log(res);
        this.$refs.scroll.finishPullUp();
      });
    },

    backTopClick() {
      this.$refs.scroll.gotoScroll(0, 0, 500);
    },

    contentScroll(position) {
      // console.log(position);
      this.topCount = position.y;
    },

    // 加载更多
    loadMore() {
      this.onGetHomeGoods(this.currentType);
    },

    onSwiperLoad(){
       // 所有的组件都有一个属性$el:用于获取组件中的元素
     this.tabControlTop = this.$refs.tabControl2.$el.offsetTop
    // console.log(this.$refs.tabControl2.$el.offsetTop)
    }
  },
};
</script>

<style lang="less" scoped>
#home {
  padding-top: 44px;
  height: 100vh;
}
.home_nav {
  background-color: coral;
  color: white;
}
.content {
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