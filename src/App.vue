<template>
  <v-app :dark="darkMode">
    <div v-if="blockstack.isUserSignedIn()">
      <Navbar class="hidden-sm-and-up" :drawer="drawer"></Navbar>
      <toolbar :dark="darkMode" @toggleDrawer="drawer = !drawer"></toolbar>
    </div>
    <v-content :class="!blockstack.isUserSignedIn() ? res : ''">
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <!-- <Login v-if="!blockstack.isUserSignedIn()"></Login> -->
            <v-tooltip left v-if="blockstack.isUserSignedIn()">
              <v-btn class="ml-2" :color="darkMode ? '#424242' : 'primary'"  @click="$store.commit('MUTATION_SET_DARK_MODE', !darkMode)" slot="activator" fixed dark fab bottom right>
                <v-icon v-if="!darkMode">brightness_3</v-icon>
                <v-icon v-else>wb_sunny</v-icon>
              </v-btn>
              <span>Toggle Dark Mode</span>
            </v-tooltip>
            <router-view />
              <!-- <v-btn block >Sign In with blockstack</v-btn> -->
            <Player></Player>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
import Toolbar from '@/components/Toolbar'
// import Login from '@/components/Login'
import Player from '@/components/Player'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    Navbar,
    Toolbar,
    Player
    // Login
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
  async mounted () {
    if (this.blockstack.isUserSignedIn()) {
      this.getMovieWatchlist()
      this.getMovieFavourites()
      this.getTVWatchlist()
      this.getTVFavourites()
      this.userData = this.blockstack.loadUserData()
      this.$store.commit('MUTATION_SET_PROFILE_DATA', this.userData)
      if (!this.$route.name) this.$router.push({ name: 'Home', params: { type: 'in-theatre' } })
    } else if (this.blockstack.isSignInPending()) {
      this.blockstack.handlePendingSignIn()
        .then(() => {
          window.location = window.location.origin
        })
    } else {
      this.$router.push({ name: 'Login' })
    }
  },
  methods: {
    getMovieWatchlist () {
      let fileObjMovie = {
        fileName: 'my_movie_watchlist.json',
        options: { decrypt: true }
      }
      this.$store.dispatch('ACTION_GET_MOVIE_WATCHLIST', fileObjMovie)
    },
    getMovieFavourites () {
      let fileObjMovie = {
        fileName: 'my_movie_favourites.json',
        options: { decrypt: true }
      }
      this.$store.dispatch('ACTION_GET_MOVIE_FAVOURITES', fileObjMovie)
    },
    getTVWatchlist () {
      let fileObjTV = {
        fileName: 'my_tv_watchlist.json',
        options: { decrypt: true }
      }
      this.$store.dispatch('ACTION_GET_TV_WATCHLIST', fileObjTV)
    },
    getTVFavourites () {
      let fileObjTV = {
        fileName: 'my_tv_favourites.json',
        options: { decrypt: true }
      }
      this.$store.dispatch('ACTION_GET_TV_FAVOURITES', fileObjTV)
    }
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
.v-chip .v-chip__content {
  cursor: pointer;
}
.theme--light.application {
  background: #eee;
}
body {
  font-family: 'Play', sans-serif !important;
}

.br20 {
  border-radius: 20px;
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
