<template>
  <v-app :dark="darkMode">
    <div v-if="blockstack.isUserSignedIn()">
      <Navbar class="hidden-sm-and-up" :drawer="drawer"></Navbar>
      <toolbar :dark="darkMode" @toggleDrawer="drawer = !drawer"></toolbar>
    </div>
    <v-content id="backImage" :class="!blockstack.isUserSignedIn() ? res : ''">
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <Login v-if="!blockstack.isUserSignedIn()"></Login>
            <router-view v-else/>
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
import Login from '@/components/Login'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    Navbar,
    Toolbar,
    Login
  },
  computed: {
    ...mapGetters({
      darkMode: 'darkMode'
    }),
    res () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 'xsh1'
        case 'sm': return 'smh1'
        default: return 'mdh1'
      }
    }
  },
  data () {
    return {
      drawer: false
    }
  },
  mounted () {
    if (this.blockstack.isUserSignedIn()) {
      this.userData = this.blockstack.loadUserData()
      this.$store.commit('MUTATION_SET_PROFILE_DATA', this.userData)
    } else if (this.blockstack.isSignInPending()) {
      this.blockstack.handlePendingSignIn()
        .then(() => {
          window.location = window.location.origin
        })
    }
    this.$store.dispatch('ACTION_GET_IN_THEATRE_MOVIES')
    this.$router.push({ name: 'Home', params: { type: 'in-theatres' } })
  }
}
</script>
<style lang="scss">
// .v-content__wrap {
//   background-image: url('./assets/images/background.jpg');
//   background-size: cover;
//   background-repeat:   no-repeat;
//   background-position: center center;
//   box-shadow:inset 0 0 0 2000px rgba(65, 63, 64, 0.9);
// }
body {
  font-family: 'Play', sans-serif !important;
}

.xsh1 {
  .v-content__wrap {
    background: black;
    h1 {
      background-image: url('./assets/h1.gif');
      background-size: cover;
      -webkit-background-clip: text;
      background-clip: text;
      letter-spacing: 3px;
      font-family: 'Play', sans-serif;
      -webkit-text-fill-color: transparent;
      font-size: 3em;
    }
  }
}
.smh1 {
  .v-content__wrap {
    background: black;
    h1 {
      background-image: url('./assets/h1.gif');
      background-size: cover;
      -webkit-background-clip: text;
      background-clip: text;
      letter-spacing: 3px;
      font-family: 'Play', sans-serif;
      -webkit-text-fill-color: transparent;
      font-size: 5em;
    }
  }
}
.mdh1 {
  .v-content__wrap {
    background: black;
    h1 {
      background-image: url('./assets/h1.gif');
      background-size: cover;
      -webkit-background-clip: text;
      background-clip: text;
      letter-spacing: 5px;
      font-family: 'Play', sans-serif;
      -webkit-text-fill-color: transparent;
      font-size: 7em;
    }
  }
}

.list {
  .v-content__wrap {
    background-image: url('https://image.tmdb.org/t/p/w1400_and_h450_face/5A2bMlLfJrAfX9bqAibOL2gCruF.jpg');
  //  background-image: url('https://www.themoviedb.org/assets/1/v4/marketing/deadpool-06f2a06d7a418ec887300397b6861383bf1e3b72f604ddd5f75bce170e81dce9.png');
   /* background-image: url('../assets/images/background.jpg'); */
   /* background-size: cover; */
   background-repeat:   no-repeat;
   background-position: center center;
   /* background-size:100% 100vh; */
   box-shadow:inset 0 0 0 2000px rgba(52, 111, 221, 0.5);
 }
}
</style>
