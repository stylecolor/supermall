<template>
  <div class="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :topImages= "topImages"></detail-swiper> 
    <detail-base-info :goods="goods"></detail-base-info>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailnNavBar"
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import { getDetail,Goods } from "network/detail";
export default {
  name:'detail',
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo
  },
  data(){
    return{
      iid:null,
      topImages:[],
      goods:{}
    }
  },
  created(){
   this.iid = this.$route.params.iid
   getDetail(this.iid).then(res=>{
     const data = res.result
     this.topImages= data.itemInfo.topImages
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
     console.log( this.goods)
   })
  }
  
}
</script>

<style lang="less" scoped>


</style>