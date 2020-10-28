<template>
  <Tab-bar>
    <TabBarItem link="/home" activeColor="blue">
      <img src="~assets/img/tabbar/home.png" slot="item-img" alt="" />
      <img
        src="~assets/img/tabbar/home_active.png"
        slot="item-img-active"
        alt=""
      />
      <div slot="item-text">首页</div>
    </TabBarItem>
    <TabBarItem link="/shopping" activeColor="blue">
      <img src="~assets/img/tabbar/shopping.png" slot="item-img" alt="" />
      <img
        src="~assets/img/tabbar/shopping_active.png"
        slot="item-img-active"
        alt=""
      />
      <div slot="item-text">商品</div>
    </TabBarItem>
    <TabBarItem link="/car" activeColor="blue">
      <img src="~assets/img/tabbar/car.png" slot="item-img" alt="" />
      <img
        src="~assets/img/tabbar/car_active.png"
        slot="item-img-active"
        alt=""
      />
      <div slot="item-text">购物车</div>
    </TabBarItem>
    <TabBarItem link="/me" activeColor="blue">
      <img src="~assets/img/tabbar/me.png" slot="item-img" alt="" />
      <img
        src="~assets/img/tabbar/me_active.png"
        slot="item-img-active"
        alt=""
      />
      <div slot="item-text">我的</div>
    </TabBarItem>
  </Tab-bar>
</template>

<script>
import TabBar from "components/common/Tabbar/TabBar";
import TabBarItem from "components/common/Tabbar/TabBarItem";
export default {
  name: "autoTabBar",
  components:{
    TabBar,
    TabBarItem
  }
};
</script>

<style>
</style>