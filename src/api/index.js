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
//[6、用户名密码登陆](#6用户名密码登陆)<br/>
export const reqLoginPwd = ({name,pwd,captcha}) => ajax(BASE + '/login_pwd',{name,pwd,captcha},'POST')
  //[7、发送短信验证码](#7发送短信验证码)<br/>
export const reqSendCode = (phone) =>ajax(BASE +'/sendcode' ,{phone})
//[8、手机号验证码登陆](#8手机号验证码登陆)<br/>
export const reqLoginSms = ({phone,code}) =>ajax(BASE + '/login_sms',{phone,code},'post')
//[9、根据会话获取用户信息](#9根据会话获取用户信息)<br/>
export const reqUserInfo = () =>ajax(BASE + '/userinfo')
//[10、用户登出](#10用户登出)<br/>
export const reqLogout = () =>ajax(BASE + '/logout')
//获取商家点餐列表
export const reqGoods = () =>ajax('/goods')
//获取商家评价列表
export const reqRatings = () => ajax('/ratings')
//获取信息列表
export const reqInfo = () =>ajax('/info')
