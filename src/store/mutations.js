//包含n个直接更新数据得方法
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORY,
  RECEIVE_SHOPS
} from './mutaition-types'
export default {
  [RECEIVE_ADDRESS] (state,{address}){
    state.address = address
  },
  [RECEIVE_CATEGORY] (state,{categorys}){
    state.categorys = categorys
  },
  [RECEIVE_SHOPS] (state,{shops}){
    state.shops = shops
  }
}
