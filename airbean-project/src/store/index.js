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

    setUser: (state, { inputName, inputEmail }) => {
      state.userProfile['name'] = inputName;
      state.userProfile['email'] = inputEmail;
    }
  },
  actions: {
    setUser({ commit }, {inputName, inputEmail}) {
      commit('setUser', {inputName, inputEmail})
    }

  },
  modules: {
  }
})
