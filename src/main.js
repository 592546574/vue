
import Vue from 'vue'
import App from './App'
import router from './router'
import NavHeader from './components/NavHeader/NavHeader'
import store from './store'
//注册全局组件
Vue.component('NavHeader',NavHeader)

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
