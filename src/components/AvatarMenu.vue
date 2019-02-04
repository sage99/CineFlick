<template lang="html">
  <v-menu bottom left min-width=200>
    <v-btn icon slot="activator" >
      <v-avatar size="32px">
        <img v-if="profileData.hasOwnProperty('profile') && profileData.profile.hasOwnProperty('image')" :src="profileData.profile.image[0].contentUrl" alt="avatar">
        <v-icon v-else>account_circle</v-icon>
      </v-avatar>
    </v-btn>
    <v-list>
      <v-list-tile @click="showProfile">
        <v-list-tile-action>
          <v-icon>person</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Profile</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click="$router.push({ name: 'Playlists' })">
        <v-list-tile-action>
          <v-icon>list</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Playlists</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile three-lines @click="dark = !dark">
        <v-list-tile-action>
          <v-checkbox class="mt-3" color="blue" type="checkbox" v-model="dark"></v-checkbox>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Dark Mode</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <!-- <v-list-tile @click="redirectToSettings">
        <v-list-tile-action>
          <v-icon>settings</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Settings</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile> -->
      <v-divider></v-divider>
      <v-list-tile @click="signOut">
        <v-list-tile-action>
          <v-icon>exit_to_app</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Logout</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-menu>

</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      profileData: 'getProfileData',
      darkMode: 'darkMode'
    })
  },
  watch: {
    dark () {
      this.$store.commit('MUTATION_SET_DARK_MODE', this.dark)
    },
    darkMode () {
      this.dark = this.darkMode
    }
  },
  data: () => ({
    dark: false
  }),
  methods: {
    showProfile () {
      // this.$store.commit('MUTATION_SET_USER')
      // this.$store.commit('MUTATION_SET_SEARCH_STATE', false)
      // this.$store.commit('MUTATION_SET_SEARCH_RESULT', [])
      this.$router.push({ name: 'Profile' })
    },
    // redirectToSettings () {
    //   this.$router.push({name: 'Settings'})
    // },
    signOut () {
      this.blockstack.signUserOut(window.location.href)
      window.location.href = '/'
    }
  },
  mounted () {
    this.dark = this.darkMode
  }
}
</script>

<style lang="css">
</style>
