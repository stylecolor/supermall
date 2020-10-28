<template>
  <div id="recommend_view">
    <div v-for="(item,index) in recommendData" :key="index" class="recommend_center">
      <a :href="item.link">
      <div class="recommendImg"><img :src="item.image" alt=""></div>
      <div class="recommendZi">{{item.title}}</div>
    </a>
    </div>
  </div>
</template>

<script>
export default {
name:'RecommendView',
props:{
  recommendData:{
    type:Array,
    default(){
      return []
    }
  }
}
}
</script>

<style>
  #recommend_view{
    width: 100%;
    display: flex;
    text-align: center;
    border-bottom: 10px solid #eeeeef;

  }
  .recommend_center{
    flex: 1;
    width: 25%;
    padding: 10px 5px 40px 5px;
  }
  .recommend_center img{
    width: 98%;
  }
  .recommendZi{
    font-size: 14px;
    text-align: center;
  }
</style> 