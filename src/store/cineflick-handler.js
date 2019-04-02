import cineFlickServices from '@/services/cineflick'
const cineflickHandler = {
  state: {
    topPlaylists: []
  },
  mutations: {
    MUTATION_SET_TOP_PLAYLISTS (state, payload) {
      state.topPlaylists = payload || []
    }
  },
  actions: {
    async ACTION_CREATE_PUBLIC_PLAYLIST (context, playlist) {
      await cineFlickServices.createPublicPlaylist(playlist)
    },
    async ACTION_DELETE_PUBLIC_PLAYLIST (context, playlist) {
      await cineFlickServices.deletePublicPlaylist(playlist)
    },
    async ACTION_GET_TOP_PLAYLISTS (context, playlist) {
      let a = await cineFlickServices.getPublicPlaylist()
      context.commit('MUTATION_SET_TOP_PLAYLISTS', a.data.data)
    }
  },
  getters: {
    getTopPlaylists: state => state.topPlaylists
  }
}
export default cineflickHandler
