import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入api接口
import api from '@/api'

import 'static/css/reset.css'
import 'common/stylus/index.styl'

// import axios from 'axios'
// 环境的切换
// if (process.env.NODE_ENV == 'development') {
//   axios.defaults.baseURL = '/';
// } else if (process.env.NODE_ENV == 'debug') {
//   axios.defaults.baseURL = '';
// } else if (process.env.NODE_ENV == 'production') {
//   axios.defaults.baseURL = '/api';
// }
// Vue.pototype.$http = axios

// 将api挂载到vue的原型上
Vue.prototype.$api = api

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
