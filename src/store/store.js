import Vue from 'vue'
import Vuex from 'vuex'
import profileHandler from './profile-handler'
import movieHandler from './movie-list-handler'
import storageHandler from './storage-handler'
import TVHandler from './tv-handler'
import searchHandler from './search-handler'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    profileHandler,
    movieHandler,
    storageHandler,
    TVHandler,
    searchHandler
  },
  state: {
    darkMode: true,
    profilePrefixUrl: 'https://image.tmdb.org/t/p/w154/'
  },
  mutations: {
    MUTATION_SET_DARK_MODE (state, payload) {
      state.darkMode = payload
    }
  },
  getters: {
    getProfilePrefixUrl: state => state.profilePrefixUrl,
    darkMode: state => state.darkMode
  }
})
