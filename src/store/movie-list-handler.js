import movieService from '@/services/movie-list'
const moviesHandler = {
  state: {
    movieList: {
      title: '',
      data: []
    },
    movieDetails: {}
  },
  mutations: {
    MUTATION_SET_MOVIE_LIST (state, payload) {
      state.movieList.title = payload.title
      state.movieList.data = payload.data
    },
    MUTATION_SET_POPULAR_MOVIES (state, payload) {
      state.movieList = payload.filter(item => item.original_language === 'en')
    },
    MUTATION_SET_CONTENT_DETAILS (state, payload) {
      state.movieDetails = payload
    }
  },
  actions: {
    async ACTION_GET_IN_THEATRE_MOVIES ({ commit }) {
      let res = await movieService.getInTheatreMovies()
      let movieArray = res.data.results
      movieArray.sort((a, b) => new Date(b.release_date) - new Date(a.release_date))
      commit('MUTATION_SET_MOVIE_LIST', { title: 'In Theatres', data: movieArray })
      console.log(res)
    },
    async ACTION_GET_POPULAR_MOVIES ({ commit }) {
      let res = await movieService.getPopularMovies()
      commit('MUTATION_SET_MOVIE_LIST', { title: 'Popular Movies', data: res.data.results })
    },
    async ACTION_GET_TOP_RATED_MOVIES ({ commit }) {
      let res = await movieService.getTopRatedMovies()
      commit('MUTATION_SET_MOVIE_LIST', { title: 'Top Rated', data: res.data.results })
    },
    async ACTION_GET_MOVIE_DETAILS ({ commit }, payload) {
      let res = await movieService.getMovieDetails(payload)
      commit('MUTATION_SET_CONTENT_DETAILS', res.data)
      return res
    }
  },
  getters: {
    getMovieList: state => state.movieList,
    getMovieDetails: state => state.movieDetails
  }
}
export default moviesHandler
