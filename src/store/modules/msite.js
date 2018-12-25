import {
  reqAddress,
  reqCategorys,
  reqShops,
} from '../../api'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORY,
  RECEIVE_SHOPS
} from '../mutaition-types'
const state = {
  latitude: 40.10038, // 纬度
  longitude: 116.36867, // 经度
  address:'',  //位置信息
  categorys:[],  //数组分类
  shops:[] , //商家列表
}
const mutations = {
  [RECEIVE_ADDRESS] (state,{address}){
    state.address = address
  },
  [RECEIVE_CATEGORY] (state,{categorys}){
    state.categorys = categorys
  },
  [RECEIVE_SHOPS] (state,{shops}){
    state.shops = shops
  },
}
const geterts = {

}
const actions = {
  //获取异步位置地址信息
  async getAddress({commit,state}){
    //发送异步的ajax请求
    const {longitude,latitude } = state
    const result = await reqAddress(longitude,latitude)
    //有结果提交mutations
    if (result.code === 0){
      const address = result.data
      commit(RECEIVE_ADDRESS,{address})
    }
  },
  //获取分组
  async getCategorys ({commit}){
    const result = await reqCategorys()
    //有结果提交mutations
    if (result.code === 0){
      const categorys = result.data
      commit(RECEIVE_CATEGORY,{categorys})
    }
  },
  //商家列表
  async getShops ({commit,state}){
    //发送异步的ajax请求
    const {longitude,latitude } = state
    const result = await reqShops(longitude,latitude)
    //有结果提交mutations
    if (result.code === 0){
      const shops = result.data
      commit(RECEIVE_SHOPS,{shops})
    }
  },
}
export default {
  state,
  mutations,
  geterts,
  actions
}
