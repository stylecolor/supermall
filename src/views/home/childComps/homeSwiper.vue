<template>
      <swiper>
      <swiper-item v-for="(item,index) in bannerData" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="swiperLoad">
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
import { Swiper,SwiperItem } from "components/common/swiper";
export default {
  name:'homeSwiper',
  data(){
    return{
      isLoad:false
    }
  },
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
  },
  methods:{
    swiperLoad(){
      if(!this.isLoad){
        this.$emit('swiperLoad')
        this.isLoad =true
      }
      
    }
  }
}
</script>

<style>

</style>