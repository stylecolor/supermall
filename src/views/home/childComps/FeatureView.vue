<template>
  <div class="feature_view">
    <a href="" >
    <div class="title">{{title}}</div>
    <img src="~assets/img/home/s-background4.jpg" alt="">
    </a>
  </div>
</template>

<script>
export default {
  name:"FeatureView",
  props:{
    title:String
  }
}
</script>

<style>
.feature_view{
  text-align: center;
  width: 100%;
}
.feature_view a{
  display: block;
}
  .title{
    font-size: 15px;
    margin: 20px 0;
  }
  .feature_view img{
    width: 100%;
    display: block;
  }
</style>