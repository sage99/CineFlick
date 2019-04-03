<template>
  <div>
    <h2 class="headline text-xs-center">{{playlistDetails.name}}</h2>
    <span v-if="playlistDetails.movies.length > 0" class="headline">Movies</span>
    <items-list @remove="removeFromPlaylist" v-if="playlistDetails.movies.length > 0" :showPagination="false" :showRemoveButton="profileData.username === playlistDetails.creatorId" :itemList="playlistDetails.movies"></items-list>
    <h2 v-if="playlistDetails.tv.length > 0" class="headline">TV Shows</h2>
    <items-list @remove="removeFromPlaylist" v-if="playlistDetails.tv.length > 0" type="TV" :showPagination="false" :showRemoveButton="profileData.username === playlistDetails.creatorId" :itemList="playlistDetails.tv"></items-list>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ItemsList from '@/components/Views/Brief-view'
import storageService from '@/services/blockstack-storage'
export default {
  data: () => ({
  }),
  components: {
    ItemsList
  },
  computed: {
    ...mapGetters({
      playlistDetails: 'getPlaylistDetails',
      playlists: 'getPlaylists',
      profileData: 'getProfileData'
    })
  },
  methods: {
    removeFromPlaylist (content, index, type) {
      console.log(content, index, type, this.playlistDetails)
      let playlists = [...this.playlists]
      console.log('playlists', playlists)
      let playlistIndex = null
      playlists.find((item, index) => {
        if (item.id === this.playlistDetails.id) {
          playlistIndex = index
        }
      })
      if (this.playlistDetails[type ? 'tv' : 'movies'][index].id === content.id) {
        this.playlistDetails[type ? 'tv' : 'movies'].splice(index, 1)
      }
      playlists[playlistIndex] = this.playlistDetails
      this.$store.commit('MUTATION_SET_PLAYLISTS', playlists)
      this.$store.dispatch('ACTION_CREATE_PUBLIC_PLAYLIST', this.playlistDetails)
      storageService.putFile({
        fileName: 'my_playlist.json',
        data: playlists,
        options: { encrypt: false }
      })
    }
  }
}
</script>

<style>

</style>
