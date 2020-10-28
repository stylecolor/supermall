import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Home = () => import('../views/home/home.vue')
const Car = () => import('../views/car/car.vue')
const Me = () => import('../views/me/me.vue')
const Shopping = () => import('../views/shopping/shopping.vue')
const routes =[
  {
    path:'',
    redirect:'/home'
  },{
    path:'/home',
    component:Home,
    meta:{
      title:"首页"
    }
  },{
    path:'/car',
    component:Car,
    meta:{
      title:'购物车'
    }
  },{
    path:'/shopping',
    component:Shopping,
    meta:{
      title:'商品'
    }
  },
  {
    path:'/me',
    component:Me,
    meta:{
      title:'我的'
    }
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'active'   //更改活跃时的class值
})

export default router