/**
 * article模块接口列表
 */

import base from '@/utils/request/base' // 导入接口域名列表
import http from '@/utils/request/http' // 导入http中创建的axios实例
import qs from 'qs' // 根据需求是否导入qs模块

const article = {
  test () {
    // return axios.get(`${base.sq}/seller`)
    return http.get('/seller')
  },
  // 新闻列表
  articleList () {
    // return axios.get(`${base.sq}/topics`)
    // 前面的baseURL会自动添加
    return http.get('/topics')
  },
  // 新闻详情,演示
  articleDetail (id, params) {
    return http.get(`${base.sq}/topic/${id}`, {
      params: params
    })
  },
  // post提交
  login (params) {
    return http.post(`${base.sq}/accesstoken`, qs.stringify(params))
  }
  // 其他接口…………
}

// 在页面中调用例子
// this.$api.article.articleDetail(id, {
//   api: 123
// }).then(res => {
//   // 执行某些操作
// })

export default article
