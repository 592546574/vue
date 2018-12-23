//包含n个接口请求函数得模块
import ajax from './ajax'
//开发环境下需要使用代理服务器帮我们转发请求解决跨域问题
const BASE = '/api'
  //[1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)<br/>
export const reqAddress = (longitude,latitude) => ajax(BASE +`/position/${latitude},${longitude}`)
  //[2、获取食品分类列表](#2获取食品分类列表)<br/>
export const reqCategorys = () => ajax(BASE +'/index_category')
  //[3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)<br/>
export const reqShops = (longitude,latitude) => ajax(BASE + '/shops',{longitude,latitude})

