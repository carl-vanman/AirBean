import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userProfile: {
      name: "",
      email: "",
      orders: [] 
    }
  },
  getters: {
    getUser: state => {
      return state.userProfile
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
