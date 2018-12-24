//包含n个用于间接更新得数据得方法对象  发送请求
import {
  reqAddress,
  reqCategorys,
  reqShops
} from '../api'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORY,
  RECEIVE_SHOPS,
  RECEIVE_USER
} from './mutaition-types'
export default {
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
  //保存user信息
  saveUser({commit},user){
    commit(RECEIVE_USER,{user})
  }
}
