<template>
  <v-layout class="position-center" row wrap>
    <createPlaylist></createPlaylist>
    <v-dialog max-width="500" v-model="deleteItem">
      <v-card class="br20">
        <v-card-title class="headline">
          Delete Playlist
        </v-card-title>
        <v-card-text>
          Are you sure, you want to delete this playlist?
        </v-card-text>
        <v-card-actions>
          <v-btn :loading="loading" @click="deletePlaylist(playlistToDelete)" round color="error">Delete<v-icon class="ml-1">delete</v-icon></v-btn>
          <v-btn @click="deleteItem = false" flat>Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-flex v-if="playlists && playlists.length > 0" xs12>
      <div >
        <h1 class="headline font-weight-regular">Playlists</h1>
        <v-btn
          class="mt-5"
          @click="eventBus.$emit('createPlaylist')"
          :color="darkMode ? '' : 'primary'"
          fab
          right
          top
          absolute
        >
          <v-icon>add</v-icon>
        </v-btn>
        <v-flex mt-3 >
          <!-- <v-data-table :headers="headers" :items="playlists" class="elevation-4 br20">
            <template slot="items" slot-scope="props">
              <tr @click="setPlaylist(props.item)">
                <td>{{ props.index + 1}}</td>
                <td>{{ props.item.name }}</td>
                <td>{{ props.item.description || '- - - - -' }}</td>
                <td>{{ props.item.movies.length }}</td>
                <td>{{ props.item.tv.length }}</td>

                <td class="justify-center align-center layout px-0">
                  <v-icon small @click.stop="edit(props.item)" class="mr-2">edit</v-icon>
                  <v-icon small @click.stop="deleteP(props.item)">delete</v-icon>
                </td>
              </tr>
            </template>
          </v-data-table> -->
          <v-card hover @click="setPlaylist(playlist)" v-for="(playlist, index) in playlists" :key="index" class="br20 mt-3">
            <v-card-text >
              <div class="align-data">
                <v-avatar color="blue">
                  <h1 class="font-weight-regular">
                  {{playlist.name.substring(0,1).toUpperCase()}}
                  </h1>
                </v-avatar>
                <span class="headline">{{playlist.name}}</span>
                <span class="subheading"> {{playlist.description}}</span>
                <span>{{playlist.movies.length}} Movies</span>
                <span>{{playlist.tv.length}} TV Shows</span>
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
      </div>
    </v-flex>
    <v-flex class="text-xs-center" xs12 sm8 md6 v-else>
      <h2 class="title font-weight-light">Oops, Looks like you have not created any playlist yet.</h2>
      <v-btn
        @click="eventBus.$emit('createPlaylist')"
        :color="darkMode ? '' : 'primary'"
        round
        block
      >
        <v-icon left>add</v-icon>Create new playlist
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'
import { eventBus } from '@/main'
import storageService from '@/services/blockstack-storage'
import createPlaylist from './CreatePlaylist'
export default {
  data: () => ({
    eventBus: eventBus,
    deleteItem: false,
    headers: [
      {
        text: 'S. No.',
        value: 'index'
      },
      { text: 'Name', value: 'name' },
      { text: 'Description', value: 'description' },
      // { text: 'Type', value: 'type' },
      { text: 'Movies Count', value: 'movies' },
      { text: 'TV Shows Count', value: 'tv' },
      // { text: 'Created At', value: 'createdAt' },
      // { text: 'Information', value: 'info', sortable: false },
      { text: 'Actions', value: 'name', sortable: false }
    ],
    playlistToDelete: null,
    loading: false
  }),
  components: {
    createPlaylist
  },
  computed: {
    ...mapGetters({
      playlists: 'getPlaylists',
      darkMode: 'darkMode'
    })
  },
  created () {
    this.$store.dispatch('ACTION_GET_GENRE')
    storageService
      .getFile({
        fileName: 'my_playlist.json',
        options: { decrypt: false }
      })
      .then(res => {
        if (res) {
          this.$store.commit('MUTATION_SET_PLAYLISTS', res)
          // this.searchProximity({ settings: res })
        } else {
          // this.searchProximity({ settings: this.settings })
          this.$store.commit('MUTATION_SET_PLAYLISTS', [])
          this.createFile()
        }
      })
  },
  methods: {
    edit (item) {
      eventBus.$emit('editPlaylist', item)
    },
    deleteP (item) {
      this.playlistToDelete = item
      this.deleteItem = true
    },
    setPlaylist (item) {
      this.$store.commit('MUTATION_SET_PLAYLIST_DETAILS', item)
      this.$router.push({ name: 'Playlist', params: { id: item.id } })
    },
    createFile () {
      storageService.putFile({
        fileName: 'my_playlist.json',
        data: [],
        options: { encrypt: false }
      })
    },
    deletePlaylist (item) {
      this.loading = true
      let playlists = [...this.playlists]
      playlists.splice(this.playlists.indexOf(item), 1)
      this.$store.commit('MUTATION_SET_PLAYLISTS', playlists)
      storageService.putFile({
        fileName: 'my_playlist.json',
        data: playlists,
        options: { encrypt: false }
      }).then(() => {
        this.loading = false
        this.deleteItem = false
      })
    }
  }
}
</script>

<style lang="scss">
tr {
  cursor: pointer;
};
.align-data {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
