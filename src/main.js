import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false

// 这里是注册$bus这样在全部才能用

Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
