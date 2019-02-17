<template>
  <div>
    <v-dialog v-model="createPlaylist" max-width="500">
      <v-card class="br20">
        <v-card-title class="headline">Create New Playlist</v-card-title>
        <v-card-text>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-text-field
              :rules="nameRule"
              label="Enter Playlist Name*"
              :color="darkMode ? 'white' : 'primary'"
              v-model="playlistForm.name"
            ></v-text-field>
            <v-text-field
              label="Enter Playlist Description"
              :color="darkMode ? 'white' : 'primary'"
              v-model="playlistForm.description"
            ></v-text-field>
            <v-combobox
              v-model="playlistForm.genres"
              :items="genreList"
              :color="darkMode ? 'white' : 'primary'"
              chips
              item-text="name"
              multiple
              return-object
              label="Select Genres"
            >
              <template slot="selection" slot-scope="data">
                <v-chip
                  :selected="data.selected.name"
                  :disabled="data.disabled"
                  close
                  :key="JSON.stringify(data.item.id)"
                  class="v-chip--select-multi "
                  @input="data.parent.selectItem(data.item)"
                >
                  <v-avatar :class="darkMode ? 'accent white--text' : 'primary white--text'">
                    {{ data.item.name.slice(0, 1).toUpperCase() }}
                  </v-avatar>
                  {{ data.item.name }}
                </v-chip>
              </template>
            </v-combobox>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn :loading="isLoading" @click="validate" round :color="darkMode ? '' : 'primary'" >{{ isEditing ? 'Save' : 'Create' }}</v-btn>
          <v-btn @click="createPlaylist = false" flat :color="darkMode ? '' : 'primary'" >close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { eventBus } from '@/main'
import { mapGetters } from 'vuex'
import storageService from '@/services/blockstack-storage'
export default {
  data: () => ({
    createPlaylist: false,
    playlistForm: {
      name: null,
      description: null,
      genres: []
    },
    valid: false,
    nameRule: [
      v => !!v || 'Playlist name is required'
    ],
    isLoading: false,
    playlistIndex: null,
    isEditing: false
  }),
  computed: {
    ...mapGetters({
      darkMode: 'darkMode',
      genreList: 'getGenre',
      playlists: 'getPlaylists',
      profileData: 'getProfileData'
    })
  },
  watch: {
    createPlaylist () {
      if (!this.createPlaylist) {
        this.isLoading = false
        this.$refs.form.reset()
        this.isEditing = false
        this.playlistIndex = null
      }
    }
  },
  mounted () {
    eventBus.$on('createPlaylist', () => {
      this.createPlaylist = true
    })
    eventBus.$on('editPlaylist', (playlist) => {
      this.isEditing = true
      // this.playlistForm.name = playlist.name
      // this.playlistForm.description = playlist.description
      // this.playlistForm.genres = playlist.genres
      this.playlistForm = { ...playlist }
      this.playlistIndex = this.playlists.indexOf(playlist)
      this.createPlaylist = true
    })
  },
  destroyed () {
    eventBus.$off('createPlaylist')
  },
  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        this.isLoading = true
        let playlists = []
        if (!this.isEditing) {
          this.playlistForm['creatorName'] = this.profileData.profile.name
          this.playlistForm['creatorId'] = this.profileData.username
          this.playlistForm['createdAt'] = +new Date()
          this.playlistForm['updatedAt'] = +new Date()
          this.playlistForm['id'] = +new Date()
          this.playlistForm['movies'] = []
          this.playlistForm['tv'] = []
          playlists = [{ ...this.playlistForm }, ...this.playlists]
        } else {
          this.playlistForm['updatedAt'] = +new Date()
          playlists = [...this.playlists]
          playlists[this.playlistIndex] = { ...this.playlistForm }
        }
        this.$store.commit('MUTATION_SET_PLAYLISTS', playlists)
        storageService.putFile({
          fileName: 'my_playlist.json',
          data: playlists,
          options: { encrypt: false }
        }).then(() => {
          this.isLoading = false
          this.createPlaylist = false
        })
      }
    }
  }
}
</script>

<style>

</style>
