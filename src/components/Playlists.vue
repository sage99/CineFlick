<template>
  <v-layout align-start>
    <v-flex>
      <div v-if="playlists && playlists.length > 0" >
        <h1 class="headline font-weight-regular">Playlists</h1>
        <v-btn class="mt-5" @click="eventBus.$emit('createPlaylist')" :color="darkMode ? '' : 'primary'" fab right top absolute> <v-icon>add</v-icon></v-btn>
        <v-flex mt-3 xs12>
          <v-card class="br20">
            <v-card-text>
              <v-list>
                <v-list-tile  v-for="(playlist, index) in playlists" :key="index" >
                  <v-list-tile-content>
                    <v-list-tile-title>{{index+1}}</v-list-tile-title>
                    <v-list-tile-sub-title>S. No.</v-list-tile-sub-title>
                  </v-list-tile-content>
                  <v-list-tile-content class="ml-5">
                    <v-list-tile-title>{{playlist.name}}</v-list-tile-title>
                    <v-list-tile-sub-title>Name</v-list-tile-sub-title>
                  </v-list-tile-content>
                  <v-list-tile-content class="ml-5">
                    <v-list-tile-title>{{playlist.description}}</v-list-tile-title>
                    <v-list-tile-sub-title>Description</v-list-tile-sub-title>
                  </v-list-tile-content>
                  <v-list-tile-content class="ml-5">
                    <v-list-tile-title>{{playlist.movies.length}}</v-list-tile-title>
                    <v-list-tile-sub-title>Movies</v-list-tile-sub-title>
                  </v-list-tile-content>
                  <v-list-tile-content class="ml-5">
                    <v-list-tile-title>{{playlist.tv.length}}</v-list-tile-title>
                    <v-list-tile-sub-title>TV Shows</v-list-tile-sub-title>
                  </v-list-tile-content>
                  <v-list-tile-content class="ml-5">
                    <v-list-tile-title>{{new Date(playlist.createdAt).toDateString()}}</v-list-tile-title>
                    <v-list-tile-sub-title>Created At</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card-text>
          </v-card>
        </v-flex>
      </div>
      <div v-else>
        <h2 class="title font-weight-light">Oops, Looks like you have not created any playlist yet.</h2>
        <v-btn @click="eventBus.$emit('createPlaylist')" :color="darkMode ? '' : 'primary'" round block> <v-icon left>add</v-icon>Create new playlist</v-btn>
      </div>
    </v-flex>
    <createPlaylist></createPlaylist>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'
import { eventBus } from '@/main'
import storageService from '@/services/blockstack-storage'
import createPlaylist from './CreatePlaylist'
export default {
  data: () => ({
    eventBus: eventBus
  }),
  components: {
    createPlaylist
  },
  computed: {
    ...mapGetters({
      playlists: 'getPlaylist',
      darkMode: 'darkMode'
    })
  },
  created () {
    this.$store.dispatch('ACTION_GET_GENRE')
    storageService.getFile({
      fileName: 'my_playlist.json',
      options: { decrypt: false }
    }).then(res => {
      if (res) {
        this.$store.commit('MUTATION_SET_PLAYLIST', res)
        // this.searchProximity({ settings: res })
      } else {
        // this.searchProximity({ settings: this.settings })
        this.$store.commit('MUTATION_SET_PLAYLIST', [])
        this.createFile()
      }
    })
  },
  methods: {
    createFile () {
      storageService.putFile({
        fileName: 'my_playlist.json',
        data: [],
        options: { encrypt: false }
      })
    }
  }
}
</script>

<style>

</style>
