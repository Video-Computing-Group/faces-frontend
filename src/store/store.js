import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: {
      name: '',
      email: '',
      token: '',
      institution: ''
    }
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {}
})
