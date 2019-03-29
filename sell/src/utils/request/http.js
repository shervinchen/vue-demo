/**
 * axios相关封装
 * 请求拦截、响应拦截、错误统一处理
 */
import axios from 'axios'
// import store from '@/store'
// import router from '../router';
// import store from '../store/index';
// import { Toast } from 'vant';

/**
 * 提示函数
 * 禁止点击蒙层、显示一秒后关闭
 */
// const tip = msg => {
//   Toast({
//     message: msg,
//     duration: 1000,
//     forbidClick: true
//   })
// }

/**
 * 跳转登录页
 * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 */
// const toLogin = () => {
//   router.replace({
//     path: '/login',
//     query: {
//       redirect: router.currentRoute.fullPath
//     }
//   })
// }

/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 */
// const errorHandle = (status, other) => {
//   // 状态码判断
//   switch (status) {
//     // 401: 未登录状态，跳转登录页
//     case 401:
//       toLogin()
//       break
//     // 403 token过期
//     // 清除token并跳转登录页
//     case 403:
//       tip('登录过期，请重新登录')
//       localStorage.removeItem('token')
//       store.commit('loginSuccess', null)
//       setTimeout(() => {
//         toLogin()
//       }, 1000)
//       break
//     // 404请求不存在
//     case 404:
//       tip('请求的资源不存在')
//       break
//     default:
//       console.log(other)
//   }
// }

// 环境的切换
// if (process.env.NODE_ENV === 'development') {
//   axios.defaults.baseURL = '/'
// } else if (process.env.NODE_ENV === 'debug') {
//   axios.defaults.baseURL = ''
// } else if (process.env.NODE_ENV === 'production') {
//   axios.defaults.baseURL = '/api'
// }

// 创建axios实例
const service = axios.create({
  // baseURL: process.env.BASE_API, // api的base_url VUE_APP_BASE_URL
  baseURL: process.env.VUE_APP_BASE_API, // api的base_url
  timeout: 10000 // 请求超时时间
})

// axios会根据你data的数据类型，自动添加
// 设置post请求头
// service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// request 拦截器
/**
 * 请求拦截器
 * 每次请求前，如果存在token则在请求头中携带token
 */
service.interceptors.request.use(
  config => {
    // 登录流程控制中，根据本地是否存在token判断用户的登录情况
    // 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token
    // 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码
    // 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。
    // const token = store.state.token
    // token && (config.headers.Authorization = token)

    // 这里可以自定义一些config 配置

    // loading + 1
    // store.dispatch('SetLoading', true)

    return config
  },
  error => {
    //  这里处理一些请求出错的情况

    // loading 清 0
    // setTimeout(function () {
    //   store.dispatch('SetLoading', 0)
    // }, 300)

    // console.log(error)
    Promise.error(error)
    // Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  res => res.status === 200 ? Promise.resolve(res) : Promise.reject(res),
  // response => {
  //   const res = response.data
  //   // 这里处理一些response 正常放回时的逻辑

  //   // loading - 1
  //   // store.dispatch('SetLoading', false)

  //   return res
  // },
  error => {
    // const { response } = error
    // if (response) {
    //   // 请求已发出，但是不在2xx的范围
    //   errorHandle(response.status, response.data.message)
    //   return Promise.reject(response)
    // } else {
    //   // 处理断网的情况
    //   // eg:请求超时或断网时，更新state的network状态
    //   // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
    //   // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
    //   store.commit('changeNetwork', false)
    // }

    // 这里处理一些response 出错时的逻辑

    // loading - 1
    // store.dispatch('SetLoading', false)

    return Promise.reject(error)
  }
)

// 定义对外Get、Post、File请求
export default {
  get (url, param = {}, headers = {}) {
    return service.get(url, {
      params: param,
      headers
    })
  },
  post (url, param = null, headers = {}) {
    return service.post(url, param, {
      headers
    })
  },
  put (url, param = null, headers = {}) {
    return service.put(url, param, {
      headers
    })
  },
  file (url, param = null, headers = {}) {
    return service.post(url, param, {
      headers: Object.assign({
        'Content-Type': 'multipart/form-data'
      }, headers)
    })
  },
  delete (url, param = null, headers = {}) {
    return service.delete(url, {
      param,
      headers: Object.assign({
        'Content-Type': 'multipart/form-data'
      }, headers)
    })
  }
}

// axios.defaults.timeout = 5000

// // http request 拦截器
// axios.interceptors.request.use(
//   config => {
//     // const token = getCookie('名称');
//     config.data = JSON.stringify(config.data)
//     config.headers = {
//       'Content-Type': 'application/x-www-form-urlencoded'
//     }
//     // if(token){
//     //   config.params = {'token':token}
//     // }
//     return config
//   },
//   error => {
//     return Promise.reject(err)
//   }
// )

// // http response 拦截器
// axios.interceptors.response.use(
//   response => {
//     if (response.data.errCode == 2) {
//       // 从哪个页面跳转
//       // router.push({
//       //   path: "/login",
//       //   querry: {
//       //     redirect: router.currentRoute.fullPath
//       //   }
//       // })
//     }
//     return response
//   },
//   error => {
//     return Promise.reject(error)
//   }
// )

// /**
//  * 封装get方法
//  * @param url
//  * @param data
//  * @returns {Promise}
//  */

// // export function get(url, params = {}) {
// //   return new Promise((resolve, reject) => {
// //     axios.get(url, {
// //         params: params
// //       })
// //       .then(response => {
// //         resolve(response.data);
// //       })
// //       .catch(err => {
// //         reject(err)
// //       })
// //     })
// //   })
// // }

// /**
//  * 封装post请求
//  * @param url
//  * @param data
//  * @returns {Promise}
//  */

// // export function post(url, data = {}) {
// //   return new Promise((resolve, reject) => {
// //     axios.post(url, data)
// //       .then(response => {
// //         resolve(response.data);
// //       }, err => {
// //         reject(err)
// //       })
// //     })
// //   })
// // }
