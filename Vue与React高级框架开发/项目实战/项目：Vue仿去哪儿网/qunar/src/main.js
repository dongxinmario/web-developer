import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false 
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
