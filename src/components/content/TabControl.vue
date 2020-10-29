<template>
  <div class="tab_control">
    <div class="tab_center" v-for="(item,index) in titles" :key="index" :class="{active:index===currentIndex}" @click="onselect(index)">
      <span>{{item}}</span> 
    </div>
  </div>
</template>

<script>
export default {
  name:'TabControl',
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      currentIndex:0
    }
  },
  methods:{
    onselect(index){
      this.currentIndex =  index;
      this.$emit('tabClick',index)
    }
  }
  

}
</script>

<style>
.tab_control{
     display: flex;
    width: 100%;
    text-align: center;
    line-height: 44px;
    height: 44px;
    background-color: white;
}

.tab_center{
  flex: 1;
}
 
 .active{
   color: thistle;
 }

 .tab_center.active span{
padding: 3px;
   border-bottom:3px solid tomato;
 }
</style>