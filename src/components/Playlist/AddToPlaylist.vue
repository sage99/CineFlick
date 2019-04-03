<template>
  <div>
    <v-dialog max-width="500" v-model="addToPlaylist">
      <v-card class="br20">
        <v-card-title class="headline">Add to Playlist</v-card-title>
        <v-card-text>
          <v-select
            :items="playlists"
            :color="darkMode ? 'white' : 'primary'"
            label="Select playlist"
            item-text="name"
            v-model="selectedPlaylist"
            no-data-text="No Playlists found"
            return-object
          ></v-select>
        </v-card-text>
        <v-card-actions>
          <v-btn :disabled="!(selectedPlaylist && Object.keys(selectedPlaylist).length > 0)" :loading="loading" :color="darkMode ? '' : 'primary'" @click="add" round>Add</v-btn>
          <v-btn flat @click="addToPlaylist = false">cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { eventBus } from '@/main'
import storageService from '@/services/blockstack-storage'
export default {
  data: () => ({
    addToPlaylist: false,
    selectedPlaylist: null,
    loading: false
  }),
  computed: {
    ...mapGetters({
      playlists: 'getPlaylists',
      darkMode: 'darkMode'
    })
  },
  mounted () {
    eventBus.$on('addToPlaylist', options => {
      this.content = options.data
      this.type = options.type
      this.selectedPlaylist = null
      this.addToPlaylist = true
    })
  },
  methods: {
    add () {
      this.loading = true
      let found = null
      let playlists = [...this.playlists]
      let index = playlists.indexOf(this.selectedPlaylist)
      if (this.type) {
        found = playlists[index][this.type].find((item) => item.id === this.content.id)
      }
      if (!found) {
        this.selectedPlaylist[this.type].push({
          'id': this.content.id,
          'original_title': this.content['original_title'],
          'original_language': this.content['original_language'],
          'overview': this.content['overview'],
          'poster_path': this.content['poster_path'],
          'release_date': this.content['release_date'],
          'air_date': this.content['air_date'],
          'first_air_date': this.content['first_air_date'],
          'title': this.content['title'],
          'name': this.content['name'],
          'backdrop_path': this.content['backdrop_path'],
          'vote_average': this.content['vote_average'],
          'popularity': this.content['popularity'],
          'vote_count': this.content['vote_count']
        })
        playlists[index] = this.selectedPlaylist
      } else {
        this.loading = false
        this.addToPlaylist = false
        this.selectedPlaylist = null
        return
      }
      console.log('PPPPPPPPP', this.playlists)
      this.$store.commit('MUTATION_SET_PLAYLISTS', playlists)
      this.$store.dispatch('ACTION_CREATE_PUBLIC_PLAYLIST', this.selectedPlaylist)
      storageService.putFile({
        fileName: 'my_playlist.json',
        data: playlists,
        options: { encrypt: false }
      }).then(() => {
        this.loading = false
        this.addToPlaylist = false
        this.selectedPlaylist = null
      })
    }
  }
}
</script>

<style>

</style>
