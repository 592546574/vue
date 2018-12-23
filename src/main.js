
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import NavHeader from './components/NavHeader/NavHeader'
import Star from './components/Star/Star'
//注册全局组件
Vue.component('NavHeader',NavHeader)
Vue.component('Star',Star)
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  Star
})
