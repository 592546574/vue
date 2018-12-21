//路由器对象模块，router
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
//声明使用router
Vue.use(VueRouter)
export default new VueRouter({
    mode: 'history', //去掉路由器中得#号键
   routes
})
