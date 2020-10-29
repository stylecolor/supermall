<template>
    <div class="nav_bar">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
export default {
  name:'NavBar'
}
</script>

<style>
  .nav_bar{
    display: flex;
    line-height: 44px;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 5;
    width: 100%;
  }
  .left,.right{
    width: 60px;
  }
  .center{
    flex: 1;
    text-align: center;
  }
</style>