import Vue from 'vue'
import {reqGoods,reqInfo,reqRatings} from '../../api'
import {
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  REDUCE_FOOD_COUNT,
  ADD_FOOD_COUNT
} from '../mutaition-types'

const state = {
  goods:[],  //商家商品
  ratings:[], //商家评价
  info:{}    //商家信息
}
const mutations = {
  [RECEIVE_GOODS] (state,{goods}){
    state.goods = goods
  },
  [RECEIVE_RATINGS] (state,{ratings}){
    state.ratings = ratings
  },
  [RECEIVE_INFO] (state,{info}){
    state.info = info
  },

  [ADD_FOOD_COUNT] (state,{food}){
    if (!food.count){
      //响应式/数据发生改变
      Vue.set(food,'count',1)
    }else {
      //给food已有得属性值加1
      food.count++
    }
  },
  [REDUCE_FOOD_COUNT] (state,{food}){
    if (food.count>0) {
      food.count--
    }
  }
}
const geterts = {

}
const actions = {
  //保存商家商品信息
  async getGoods({commit},cb){
    const result = await reqGoods()
    if (result.code === 0) {
      const goods = result.data
      commit(RECEIVE_GOODS,{goods})
      typeof cb==='function' && cb()
    }
  },
   //保存评价列表
  async getRatings({commit}){
    const result = await reqRatings()
    if (result.code === 0){
      const ratings = result.data
      commit(RECEIVE_RATINGS,{ratings})
    }
  },
  //保存商家信息
  async getInfo({commit}){
    const result = await reqInfo()
    if (result.code === 0){
      const info = result.data
      commit(RECEIVE_INFO,{info})
    }
  },
  updateFoodCount({commit},{food,isAdd}){
    if (isAdd){
      commit(ADD_FOOD_COUNT,{food})
    } else {
      commit(REDUCE_FOOD_COUNT,{food})
    }
  }
}
export default {
  state,
  mutations,
  geterts,
  actions
}
