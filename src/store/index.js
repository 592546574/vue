//vuex最核心得对象模块
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import getters from './geterts'
import mutations from './mutations'
//声明使用
Vue.use(Vuex)
export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})
