import TVService from '@/services/tv-service'
const TVHandler = {
  state: {
    TVShowsList: {
      title: '',
      data: []
    },
    TVShowDetails: {}
  },
  mutations: {
    MUTATION_SET_TV_SHOWS_LIST (state, payload) {
      state.TVShowsList.title = payload.title
      state.TVShowsList.data = payload.data.results.filter(item => item.poster_path)
      state.TVShowsList.page = payload.data.page
      state.TVShowsList.max_pages = payload.data.total_pages
    },
    MUTATION_SET_POPULAR_MOVIES (state, payload) {
      state.movieList = payload.filter(item => item.original_language === 'en')
    },
    MUTATION_SET_TV_SHOW_DETAILS (state, payload) {
      payload.videos.results = payload.videos.results.filter(item => item.type.toLowerCase() === 'trailer')
      state.TVShowDetails = payload
    }
  },
  actions: {
    async ACTION_GET_ON_AIR_TVSHOWS ({ commit }, payload) {
      let res = await TVService.getOnAir(payload)
      res.data.results.sort((a, b) => new Date(b.release_date) - new Date(a.release_date))
      commit('MUTATION_SET_TV_SHOWS_LIST', { title: 'Currently Airing TV Shows', data: res.data })
    },
    async ACTION_GET_AIRING_TODAY_TVSHOWS ({ commit }, payload) {
      let res = await TVService.getAiringToday(payload)
      commit('MUTATION_SET_TV_SHOWS_LIST', { title: 'Airing Today', data: res.data })
    },
    async ACTION_GET_LATEST_TVSHOWS ({ commit }, payload) {
      let res = await TVService.getLatest(payload)
      commit('MUTATION_SET_TV_SHOWS_LIST', { title: 'Latest TV Shows', data: res.data })
    },
    async ACTION_GET_POPULAR_TVSHOWS ({ commit }, payload) {
      let res = await TVService.getPopular(payload)
      commit('MUTATION_SET_TV_SHOWS_LIST', { title: 'Popular TV Shows', data: res.data })
    },
    async ACTION_GET_TOP_RATED_TVSHOWS ({ commit }, payload) {
      let res = await TVService.getTopRated(payload)
      commit('MUTATION_SET_TV_SHOWS_LIST', { title: 'Top Rated', data: res.data })
    },
    async ACTION_GET_TV_SHOW_DETAILS ({ commit }, payload) {
      let res = await TVService.getTVShowDetails(payload)
      commit('MUTATION_SET_TV_SHOW_DETAILS', res.data)
      return res
    }
  },
  getters: {
    getTVShowsList: state => state.TVShowsList,
    getTVShowDetails: state => state.TVShowDetails
  }
}
export default TVHandler
