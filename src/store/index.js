import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    signData:{}
  },
  getters: {
  },
  mutations: {
    submit(state, data){
      state.signData = data
    },
    GeneratePng(state, data){
      state.signData.png = data
    }
  },
  actions: {
  },
  modules: {
  }
})
