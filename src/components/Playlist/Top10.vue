<template>
  <v-card v-if="finalTop" class="br20">
    <v-card-title class="headline">
      Top Playlists
    </v-card-title>
    <v-card-text v-if="!finalTop.length > 0">
      <div class="mt-5 d-flex justify-center mb-5">
        <v-progress-circular
          :size="50"
          color="primary"
          indeterminate
        ></v-progress-circular>
      </div>
    </v-card-text>
    <v-card-text v-else>
      <v-list  three-line >
        <template v-for="(item, index) in finalTop"  >
            <v-divider
              v-if="index"
              :key="index"
              ></v-divider>
          <v-list-tile @click="setPlaylist(item, index)" :key="index+'das'">
            <v-list-tile-content class="d-flex align-center" v-if="showLoader[index]">
              <v-progress-circular
              :size="30"
              :width="3"
              :key="index"
              color="primary"
              indeterminate
            ></v-progress-circular>
            </v-list-tile-content>
            <v-list-tile-content v-else>
              <v-list-tile-title  >{{item.id.split('/')[2].split('.')[0]}}</v-list-tile-title>
              <v-list-tile-sub-title>{{item.id.split('/')[1]}} ({{new Date(item.timeCreated).toDateString()}})</v-list-tile-sub-title>
              <v-list-tile-sub-title v-if="item.data">
                Movies: {{item.data.movies.length}},
                TV Shows: {{item.data.tv.length}}
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-card-text>
    <v-card-actions>
    </v-card-actions>
    <v-card-text class="pt-0">
      <v-btn class="m3-5 mr-3 mb-0 mt-0" :color="darkMode ? '' : 'primary'"  @click="setPlaylist" :loading="isLoading" round block>see all <v-icon >keyboard_arrow_right</v-icon></v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
export default {
  name: 'TOP10',
  computed: {
    ...mapGetters({
      topPlaylists: 'getTopPlaylists',
      darkMode: 'darkMode'
    }),
    finalTop () {
      if (this.topPlaylists && Object.keys(this.topPlaylists).length) {
        return Object.keys(this.topPlaylists).reduce((acc, e) => {
          // console.log("HYEYEYEYYEYE", this.topPlaylists, this.topPlaylists[e].data)
          if (this.topPlaylists[e].data && (this.topPlaylists[e].data.movies || this.topPlaylists[e].data.tv)) {
            if (this.topPlaylists[e].data.movies.length > 2 || this.topPlaylists[e].data.tv.length > 2) {
              acc.push(this.topPlaylists[e])
            }
          }
          return acc
        }, []).slice(0, 10)
      } else return []
    }
  },
  data: () => ({
    showLoader: {},
    isLoading: false
  }),
  mounted () {
    if (!this.finalTop.length) {
      this.$store.dispatch('ACTION_GET_TOP_PLAYLISTS')
    }
    for (let i = 0; i < 15; i++) {
      this.$set(this.showLoader, i, false)
    }
  },
  methods: {
    async setPlaylist (item, index) {
      this.showLoader[index] = true
      let res = await axios.get(item.link + '?alt=media&ignoreCache=' + +new Date())
      console.log(res.data)
      this.$store.commit('MUTATION_SET_PLAYLIST_DETAILS', res.data)
      this.$router.push({ name: 'Playlist', params: { id: res.data.id } })
      this.showLoader = false
    }
  }
}
</script>

<style>

</style>
