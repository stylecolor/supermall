<template>
  <div id="home">
    <nav-bar class="home_nav">
      <div slot="center">商品展示</div>
    </nav-bar>
    <home-swiper :bannerData="bannerData"></home-swiper>
    <recommend-view :recommendData="recommendData"> </recommend-view>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import homeSwiper from "./childComps/homeSwiper";
import RecommendView from "./childComps/RecommendView";
import { getHomeData } from "network/homeRequest";

export default {
  name: "Home",
  components: {
    NavBar,
    homeSwiper,
    RecommendView
  },
  data(){
    return{
      bannerData:[],
      recommendData:[]
    }
  },
  created(){
    getHomeData().then(res=>{
    this.bannerData = res.data.banner.list
    this.recommendData = res.data.recommend.list
    console.log(res)
  })

  //  console.log(this.bannerData) 这里打印不出来是因为上面是个异步操作
  }
};
</script>

<style>
.home_nav{
  background-color: coral;
  color: white;
}
</style>