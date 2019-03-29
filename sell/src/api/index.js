/**
 * api接口的统一出口
 */
// 文章模块接口
import article from '@/api/article'
// 其他模块的接口……

// 导出接口
export default {
  article
  // ……
}

// import http from './http'

// export default {
//   // 登录
//   login (data) {
//     return http({
//       url: '/login',
//       method: 'post',
//       data
//     })
//   },
//   // 获取用户信息
//   getUserInfo () {
//     return http({
//       url: '/userinfo',
//       method: 'get'
//     })
//   }
// }

// api.getUserInfo().then(res => {
//     console.log(res)
//     if (res.code === 200) {
//         commit('SET_NAME', res.data.name)
//         commit('SET_AVATAR', res.data.avatar)
//         commit('SET_ROLES', res.data.role)
//     }
//     resolve(res)
//     }).catch(error => {
//     reject(error)
// })

// api.login(userInfo).then(res => {
//     if (res.code === 200) {
//         setToken(res.data)
//         commit('SET_TOKEN', res.data)
//     }
//     resolve()
// }).catch(err => {
//     reject(err)
// })
