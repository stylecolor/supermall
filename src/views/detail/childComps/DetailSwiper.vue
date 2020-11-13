
<template>
      <swiper style="margin-top:44px">
      <swiper-item v-for="(item,index) in topImages" :key="index">
          <!-- <img :src="item" alt="" @load="swiperLoad"> -->
          <div class="detail-image" :style="'background-image: url('+item+')'"></div>
      </swiper-item>
    </swiper>
</template>

<script>
import { Swiper,SwiperItem } from "components/common/swiper";
export default {
  name:"DetailSwiper",
  data(){
    return{
      isLoad:false
    }
  },
  props:{
    topImages:{
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

<style lang="less" scoped>
  .detail-image{
    width: 100%;
    height: 300px;
    background-position: top left;
    background-repeat: no-repeat;
    background-size:cover;
  }
</style>