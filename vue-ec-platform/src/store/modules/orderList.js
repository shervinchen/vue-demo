import Vue from 'vue'

const state = {
  orderList: [],
  params: {}
}

// 获取state里的数据
const getters = {
  getOrderList: state => state.orderList
}

// 异步操作
const actions = {
  fetchOrderList ({commit, state}) {
    Vue.http.post('/api/getOrderList', state.params)
    .then((res) => {
      commit('updateOrderList', res.data.data.list)
    }, (err) => {

    })
  }
}

// 同步操作
const mutations = {
  updateOrderList (state, payload) {
    state.orderList = payload
  },
  updateParams (state, {key, val}) {
    state.params[key] = val
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
