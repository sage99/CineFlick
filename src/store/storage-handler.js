import storageService from '@/services/blockstack-storage'
const storageHandler = {
  state: {
    movieWatchlist: [],
    movieFavourites: [],
    favMovieObj: {},
    watchlistMovieObj: {},
    TVWatchlist: [],
    TVFavourites: [],
    favTVObj: {},
    watchlistTVObj: {}
  },
  mutations: {
    MUTATION_SET_MOVIE_WATCHLIST (state, payload) {
      state.movieWatchlist = payload || []
      if (payload && payload.length > 0) {
        state.watchlistMovieObj = payload.reduce((acc, item) => {
          acc[item.id] = item.id
          return acc
        }, {})
      } else {
        state.watchlistMovieObj = {}
      }
    },
    MUTATION_SET_MOVIE_FAVOURITES (state, payload) {
      state.movieFavourites = payload || []
      if (payload && payload.length > 0) {
        state.favMovieObj = payload.reduce((acc, item) => {
          acc[item.id] = item.id
          return acc
        }, {})
      } else {
        state.favMovieObj = {}
      }
    },
    MUTATION_SET_TV_WATCHLIST (state, payload) {
      state.TVWatchlist = payload || []
      if (payload && payload.length > 0) {
        state.watchlistTVObj = payload.reduce((acc, item) => {
          acc[item.id] = item.id
          return acc
        }, {})
      } else {
        state.watchlistTVObj = {}
      }
    },
    MUTATION_SET_TV_FAVOURITES (state, payload) {
      state.TVFavourites = payload || []
      if (payload && payload.length > 0) {
        state.favTVObj = payload.reduce((acc, item) => {
          acc[item.id] = item.id
          return acc
        }, {})
      } else {
        state.favTVObj = {}
      }
    }
  },
  actions: {
    ACTION_SET_MOVIE_WATCHLIST ({ commit }, payload) {
      storageService.putFile(payload)
      commit('MUTATION_SET_MOVIE_WATCHLIST', payload.data)
    },
    ACTION_SET_MOVIE_FAVOURITES ({ commit }, payload) {
      storageService.putFile(payload)
      commit('MUTATION_SET_MOVIE_FAVOURITES', payload.data)
    },
    async ACTION_GET_MOVIE_WATCHLIST ({ commit }, payload) {
      let res = await storageService.getFile(payload)
      commit('MUTATION_SET_MOVIE_WATCHLIST', res)
    },
    async ACTION_GET_MOVIE_FAVOURITES ({ commit }, payload) {
      let res = await storageService.getFile(payload)
      commit('MUTATION_SET_MOVIE_FAVOURITES', res)
    },
    ACTION_SET_TV_WATCHLIST ({ commit }, payload) {
      storageService.putFile(payload)
      commit('MUTATION_SET_TV_WATCHLIST', payload.data)
    },
    ACTION_SET_TV_FAVOURITES ({ commit }, payload) {
      storageService.putFile(payload)
      commit('MUTATION_SET_TV_FAVOURITES', payload.data)
    },
    async ACTION_GET_TV_WATCHLIST ({ commit }, payload) {
      let res = await storageService.getFile(payload)
      commit('MUTATION_SET_TV_WATCHLIST', res)
    },
    async ACTION_GET_TV_FAVOURITES ({ commit }, payload) {
      let res = await storageService.getFile(payload)
      commit('MUTATION_SET_TV_FAVOURITES', res)
    }
  },
  getters: {
    getMovieWatchlist: state => state.movieWatchlist,
    getMovieFavourites: state => state.movieFavourites,
    getWatchlistMovieObj: state => state.watchlistMovieObj,
    getFavMovieObj: state => state.favMovieObj,
    getTVWatchlist: state => state.TVWatchlist,
    getTVFavourites: state => state.TVFavourites,
    getWatchlistTVObj: state => state.watchlistTVObj,
    getFavTVObj: state => state.favTVObj
  }
}

export default storageHandler
