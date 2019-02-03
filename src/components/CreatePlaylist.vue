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
          <v-btn :loading="isLoading" @click="validate" round :color="darkMode ? '' : 'primary'" >Create</v-btn>
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
    isLoading: false
  }),
  computed: {
    ...mapGetters({
      darkMode: 'darkMode',
      genreList: 'getGenre',
      playlist: 'getPlaylist',
      profileData: 'getProfileData'
    })
  },
  mounted () {
    eventBus.$on('createPlaylist', () => {
      this.createPlaylist = true
      this.$refs.form.reset()
    })
  },
  destroyed () {
    eventBus.$off('createPlaylist')
    this.isLoading = false
  },
  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        this.isLoading = true
        this.playlistForm['creatorName'] = this.profileData.profile.name
        this.playlistForm['creatorId'] = this.profileData.username
        this.playlistForm['createdAt'] = new Date()
        this.playlistForm['updatedAt'] = new Date()
        this.playlistForm['movies'] = []
        this.playlistForm['tv'] = []
        let playlists = [this.playlistForm, ...this.playlist]
        this.$store.commit('MUTATION_SET_PLAYLIST', playlists)
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
