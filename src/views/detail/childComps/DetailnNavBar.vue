<template>
    <div id="detail-nav-bar">
         <nav-bar class="detail-item">
           <div slot="left" class="back" @click="onBack"> <img src="~assets/img/backbtn.png" alt=""></div>
            <div slot="center" class="titles">
              <div class="titles-item" 
              v-for="(item,index) in titles" 
              :key="index" 
              @click="onTitlesClick(index)"
              :class="{active:currentIndex === index}"
              >{{item}}</div>
            </div>
         </nav-bar>
    </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
export default {
  name:'DetailNavBar',
  data(){
    return{
      titles:['商品','参数','评论','推荐'],
      currentIndex:0
    }
  },
  components:{
    NavBar
  },
  methods:{
    onTitlesClick(index){
      this.currentIndex = index
    },
    onBack(){
      this.$router.go(-1)
      // this.$router.back() 返回或者这样写
    }
  }
}
</script>
<style lang="less" scoped>
.detail-item{
  background-color: white;
}
  .titles{
    display: flex;
    font-size: 13px;
  }
  .titles-item{
    flex: 1;
  }
  .active{
    color:var(--color-tint)
  }
  .back {
     text-align: center;
    /* line-height: 44px; */
    display: flex;
    align-items: center;
    justify-content: center;
    height: 44px;
  }
  .back img{
     width: 14px;
  }
</style>