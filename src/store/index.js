import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cartList: []
  },
  // mutayions唯一的目的就是修改state的状态
  // mutations中的 每个方法尽可能完成的事情比较单一
  mutations,
  actions,
  getters
})

export default store
