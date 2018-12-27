import moviesListService from '@/services/movie-list'
const moviesListHandler = {
  state: {
    inTheatres: {}
  },
  mutations: {
    MUTATION_SET_IN_THEATRES_LIST (state, payload) {
      state.inTheatres = payload.filter(item => item.original_language === 'en')
    }
  },
  actions: {
    async ACTION_GET_IN_THEATRES_LIST ({ commit }) {
      let res = await moviesListService.getInTheatre()
      commit('MUTATION_SET_IN_THEATRES_LIST', res.data.results)
      console.log(res)
    }
  },
  getters: {
    getInTheatreMovies: state => state.inTheatres
  }
}
export default moviesListHandler
