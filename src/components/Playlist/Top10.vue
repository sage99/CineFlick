<template>
  <v-card class="br20">
    <v-card-title class="headline">
      Top Playlists
    </v-card-title>
    <v-card-text>
      <v-list two-line >
        <template v-for="(item, index) in topPlaylists.slice(0,15)"  >
            <v-divider
              v-if="index"
              :key="index"
              ></v-divider>
          <v-list-tile @click="setPlaylist(item)" :key="index+'das'">
            <v-list-tile-content>
              <v-list-tile-title >{{item.id.split('/')[2].split('.')[0]}}</v-list-tile-title>
              <v-list-tile-sub-title>{{item.id.split('/')[1]}} ({{new Date(item.timeCreated).toDateString()}})</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
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
      topPlaylists: 'getTopPlaylists'
    })
  },
  mounted () {
    this.$store.dispatch('ACTION_GET_TOP_PLAYLISTS')
  },
  methods: {
    async setPlaylist (item) {
      let res = await axios.get(item.link + '?alt=media&ignoreCache=' + +new Date())
      console.log(res.data)
      this.$store.commit('MUTATION_SET_PLAYLIST_DETAILS', res.data)
      this.$router.push({ name: 'Playlist', params: { id: res.data.id } })
    }
  }
}
</script>

<style>

</style>
