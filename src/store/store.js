import Vue from 'vue'
import Vuex from 'vuex'
import profileHandler from './profile-handler'
import moviesListHandler from './movie-list-handler'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    profileHandler,
    moviesListHandler
  },
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
