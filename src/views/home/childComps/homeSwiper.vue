<template>
      <swiper>
      <swiper-item v-for="(item,index) in bannerData" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
import { Swiper,SwiperItem } from "components/common/swiper";
export default {
  name:'homeSwiper',
  props:{
    bannerData:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  components:{
    Swiper,
    SwiperItem
  }
}
</script>

<style>

</style>