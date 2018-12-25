import {reqGoods,reqInfo,reqRatings} from '../../api'
import {
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO
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
  }
}
const geterts = {

}
const actions = {
  //保存商家商品信息
  async getGoods({commit}){
    const result = await reqGoods()
    if (result.code === 0) {
      const goods = result.data
      commit(RECEIVE_GOODS,{goods})
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
  }
}
export default {
  state,
  mutations,
  geterts,
  actions
}
