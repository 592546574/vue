//vuex最核心得对象模块
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './geterts'
//引入modules
import msite from './modules/msite'
import user from './modules/user'
//声明使用
Vue.use(Vuex)
export default new Vuex.Store({
  modules:{
    msite,
    user
  },
  getters,
  actions
})
