import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userProfile: {
      name: "",
      email: "",
      orders: [
        // {
        //   id: "#AB1123282323Z",
        //   sum: 443,
        //   date: "20/03/06"
        // },
        // {
        //   id: "#AB1128382323X",
        //   sum: 333,
        //   date: "20/03/03"
        // },
        // {
        //   id: "#AB1444482323X",
        //   sum: 893,
        //   date: "20/02/21"
        // },
        // {
        //   id: "#AB1444482323Y",
        //   sum: 893,
        //   date: "20/02/21"
        // },
        // {
        //   id: "#AB1444482323Z",
        //   sum: 893,
        //   date: "20/02/21"
        // },
        // {
        //   id: "#AB14444823238",
        //   sum: 893,
        //   date: "20/02/21"
        // },
      ]
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
    setUser({ commit }, { inputName, inputEmail }) {
      commit('setUser', { inputName, inputEmail })
    }

  },
  modules: {
  }
})
