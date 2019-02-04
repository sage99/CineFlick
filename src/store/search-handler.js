import searchService from '@/services/search'
const searchHandler = {
  state: {
    searchResult: {},
    filteredResult: {},
    trendingResult: [],
    castAndCrew: {},
    genreList: []
  },
  mutations: {
    MUTATION_SET_SEARCH_RESULT (state, payload) {
      state.searchResult = payload ? payload.results.filter(item => item.media_type === 'tv' || item.media_type === 'movie') : []
    },
    MUTATION_SET_GENRE (state, payload) {
      state.genreList = payload || []
    },
    MUTATION_SET_FILTERED_SEARCH_RESULT (state, payload) {
      let obj = {
        'tv': [],
        'movies': []
      }
      if (payload.hasOwnProperty('data')) {
        payload.data.results.forEach(element => {
          if (element.media_type === 'tv' || payload.type === 'TV') {
            if (element.poster_path) obj.tv.push(element)
          } else if (element.media_type === 'movie' || payload.type === 'Movie') {
            if (element.poster_path) obj.movies.push(element)
          }
        })
      }
      state.filteredResult = obj || {}
    },
    MUTATION_SET_TRENDING_RESULT (state, payload) {
      state.trendingResult = payload // .sort((a, b) => a.popularity - b.popularity)
    },
    MUTATION_SET_CAST_AND_CREW (state, payload) {
      state.castAndCrew = payload // .sort((a, b) => a.popularity - b.popularity)
    }
  },
  actions: {
    async ACTION_SEARCH_CINEFLICK (context, payload) {
      let res = await searchService.search(payload)
      context.commit('MUTATION_SET_SEARCH_RESULT', res.data)
      context.commit('MUTATION_SET_FILTERED_SEARCH_RESULT', { data: res.data })
    },
    async ACTION_GET_TRENDING (context, payload) {
      let res = await searchService.trending()
      context.commit('MUTATION_SET_TRENDING_RESULT', res.data.results)
    },
    async ACTION_SEARCH_KEYWORD (context, keyword) {
      // console.log('PAY', payload)
      let res = await searchService[`search${keyword.type}Keyword`](keyword.id)
      context.commit('MUTATION_SET_SEARCH_RESULT', res.data)
      context.commit('MUTATION_SET_FILTERED_SEARCH_RESULT', { data: res.data, type: keyword.type })
    },
    async ACTION_GET_GENRE (context) {
      let res = await searchService.getGenres()
      context.commit('MUTATION_SET_GENRE', res.data.genres)
    }
  },
  getters: {
    getSearchResult: state => state.searchResult,
    getFilteredResult: state => state.filteredResult,
    getTrendingResult: state => state.trendingResult,
    getCastAndCrew: state => state.castAndCrew,
    getGenre: state => state.genreList
  }
}
export default searchHandler
