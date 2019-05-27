import cineFlickServices from '@/services/cineflick'
import axios from 'axios'
import vue from 'vue'
const cineflickHandler = {
  state: {
    topPlaylists: [],
    playlistsData: [],
    playlist_details: {}
  },
  mutations: {
    MUTATION_SET_TOP_PLAYLISTS (state, payload) {
      state.topPlaylists = payload || []
    },
    MUTATION_SET_PLAYLISTS_DATA (state, payload) {
      vue.set(state.topPlaylists[payload.id], 'data', payload.data)
      // state.playlistsData.push(payload.data)
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
      if (a.data && a.data.data) {
        this.dispatch('ACTION_GET_TOP_PLAYLIST_DETAILS', a.data.data)
      }
    },
    async ACTION_GET_TOP_PLAYLIST_DETAILS (context, playlists) {
      Object.keys(playlists).forEach(async id => {
        // let splitIdArr = item.id.split('/')
        // let id = splitIdArr[splitIdArr.length - 1]
        let res = await axios.get(playlists[id].link + '?alt=media&ignoreCache=' + +new Date())
        context.commit('MUTATION_SET_PLAYLISTS_DATA', { id, data: res.data })
      })
    }
  },
  getters: {
    getTopPlaylists: state => state.topPlaylists || []
  }
}
export default cineflickHandler
