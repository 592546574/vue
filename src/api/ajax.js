//能发送ajax请求得函数模块
//最终ajax包装得axios,函数得返回值是promise对象
import axios from 'axios'
export default function ajax(url, data={}, method='GET') {
  return new Promise(function (resolve,reject){
    let promise
    //执行异步ajax请求
    if (method === 'GET') {
      promise = axios.get(url, {params:data})//配置指定得query参数
    }else {
      promise = axios.post(url,data)
    }
    promise.then(response =>{
      //成功调用resolve(resolve(response.data))
      resolve(response.data)
    }).catch(error =>{
      //请求失败
      alert('请求错误' +error.message)
    })
  })
}
