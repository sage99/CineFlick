import Vue from 'vue'
import Vuex from 'vuex'
import profileHandler from './profile-handler'
import movieHandler from './movie-list-handler'
import storageHandler from './storage-handler'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    profileHandler,
    movieHandler,
    storageHandler
  },
  state: {
    darkMode: true
  },
  mutations: {
    MUTATION_SET_DARK_MODE (state, payload) {
      state.darkMode = payload
    }
  },
  getters: {
    darkMode: state => state.darkMode
  }
})
