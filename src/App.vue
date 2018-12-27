<template>
  <v-app dark>
    <Navbar :drawer="drawer"></Navbar>
    <toolbar @toggleDrawer="drawer = !drawer"></toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <v-tooltip right>
              <v-btn
                icon
                large
                target="_blank"
                slot="activator"
              >
                <v-icon large>code</v-icon>
              </v-btn>
              <span>Source</span>
            </v-tooltip>
              <!-- <v-btn block >Sign In with blockstack</v-btn> -->
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
import Toolbar from '@/components/Toolbar'

export default {
  name: 'App',
  components: {
    Navbar,
    Toolbar
  },
  data () {
    return {
      drawer: true
    }
  },
  mounted () {
    if (this.blockstack.isUserSignedIn()) {
      this.userData = this.blockstack.loadUserData()
      this.$store.commit('MUTATION_SET_USER_PROFILE_DATA', this.userData)
    } else if (this.blockstack.isSignInPending()) {
      this.blockstack.handlePendingSignIn()
        .then(() => {
          window.location = window.location.origin
        })
    }
  }
}
</script>
<style lang="scss">
.v-content__wrap {
  background-image: url('./assets/images/background.jpg');
  background-size: cover;
  background-repeat:   no-repeat;
  background-position: center center;
  box-shadow:inset 0 0 0 2000px rgba(65, 63, 64, 0.9);
}
</style>
