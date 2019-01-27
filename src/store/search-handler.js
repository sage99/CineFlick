import searchService from '@/services/search'
const searchHandler = {
  state: {
    searchResult: [],
    trendingResult: [],
    castAndCrew: {}
  },
  mutations: {
    MUTATION_SET_SEARCH_RESULT (state, payload) {
      console.log('PYLOAD', payload)
      state.searchResult = payload ? payload.results : []
    },
    MUTATION_SET_TRENDING_RESULT (state, payload) {
      console.log('PYLOAD', payload)
      state.trendingResult = payload // .sort((a, b) => a.popularity - b.popularity)
    },
    MUTATION_SET_CAST_AND_CREW (state, payload) {
      console.log('PYLOAD', payload)
      state.castAndCrew = payload // .sort((a, b) => a.popularity - b.popularity)
    }
  },
  actions: {
    async ACTION_SEARCH_CINEFLICK (context, payload) {
      console.log('PAY', payload)
      let res = await searchService.search(payload)
      context.commit('MUTATION_SET_SEARCH_RESULT', res.data)
    },
    async ACTION_GET_TRENDING (context, payload) {
      let res = await searchService.trending()
      context.commit('MUTATION_SET_TRENDING_RESULT', res.data.results)
    }
  },
  getters: {
    getSearchResult: state => state.searchResult,
    getTrendingResult: state => state.trendingResult,
    getCastAndCrew: state => state.castAndCrew
  }
}
export default searchHandler
