<template>
  <div>
    <div v-if="userData.hasOwnProperty('profile')" >
      <!-- <v-container > -->
        <v-layout class="br20">
          <v-flex class="mr-5" xs12>
            <v-card class="br20">
              <v-img
                v-if="userData.profile.hasOwnProperty('image')"
                :src="userData.profile.image[0].contentUrl"
              >
              </v-img>
              <v-img
                v-else
                height="200px"
                src="https://www.freeiconspng.com/uploads/no-image-icon-6.png"
                gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)">
              </v-img>

              <v-card-title>
                <div class="display-1">{{userData.profile.name}}</div>
                <v-list two-line>
                  <v-list-tile>
                    <!-- <v-list-tile-action>
                      <v-tooltip bottom>
                        <v-icon slot="activator" color="teal accent-4">chat</v-icon>
                        <span > {{ userData.username }} </span>
                      </v-tooltip>
                    </v-list-tile-action> -->

                    <v-list-tile-content class="text-wrap">
                      <v-list-tile-title >{{userData.username || 'None'}}</v-list-tile-title>
                      <v-list-tile-sub-title>Fully Qualified Name</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <!-- <v-divider inset></v-divider> -->

                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon color="teal accent-4">mail</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                      <v-list-tile-title>{{userData.profile['@type'] || 'None'}}</v-list-tile-title>
                      <v-list-tile-sub-title>Type</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>

                  <v-list-tile>
                    <v-list-tile-action><v-icon>account_box</v-icon></v-list-tile-action>

                    <v-list-tile-content>
                      <v-list-tile-title v-if="userData.profile.hasOwnProperty('account')" >{{userData.profile.account.length || 0}}</v-list-tile-title>
                      <v-list-tile-sub-title>Account</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card-title>
            </v-card>
          </v-flex>

          <v-flex xs12 >
            <v-card class="br20">
              <v-card-title>
                <div class="headline">Your Data</div>
              </v-card-title>
              <v-card-text>
              </v-card-text>
              <v-subheader>Favourites</v-subheader>
              <v-list two-line>
                <v-list-tile @click="$router.push({ name: 'FavouriteMovies' })">
                  <v-list-tile-action>
                    <v-icon color="teal accent-4">movie</v-icon>
                  </v-list-tile-action>

                  <v-list-tile-content>
                    <v-list-tile-title>{{movieFavourites.length}}</v-list-tile-title>
                    <v-list-tile-sub-title>Movies</v-list-tile-sub-title>
                  </v-list-tile-content>

                </v-list-tile>

                <v-list-tile @click="$router.push({ name: 'TVFavourites' })">
                  <v-list-tile-action>
                    <v-icon color="teal accent-4">live_tv</v-icon>
                  </v-list-tile-action>

                  <v-list-tile-content>
                    <v-list-tile-title>{{TVFavourites.length}}</v-list-tile-title>
                    <v-list-tile-sub-title>TV Shows</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>

              <v-subheader>Watchlist</v-subheader>
              <v-list two-line>
                <v-list-tile @click="$router.push({ name: 'MoviesWatchlist' })">
                  <v-list-tile-action>
                    <v-icon color="teal accent-4">movie</v-icon>
                  </v-list-tile-action>

                  <v-list-tile-content>
                    <v-list-tile-title>{{movieWatchlist.length}}</v-list-tile-title>
                    <v-list-tile-sub-title>Movies</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>

                <v-list-tile @click="$router.push({ name: 'TVWatchlist' })">
                  <v-list-tile-action>
                    <v-icon color="teal accent-4">live_tv</v-icon>
                  </v-list-tile-action>

                  <v-list-tile-content>
                    <v-list-tile-title>{{TVWatchlist.length}}</v-list-tile-title>
                    <v-list-tile-sub-title>TV Shows</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>

        </v-layout>
      <!-- </v-container> -->
    </div>
  </div>

</template>

<script>
// import { eventBus } from '@/main'
import { mapGetters } from 'vuex'

export default {
  name: 'Profile',
  // eventBus: eventBus,
  data () {
    return {
      cineflickData: {
        favourites: {
          movies: 0,
          tv: 0
        },
        watchlist: {
          movies: 0,
          tv: 0
        }
      }
    }
  },
  computed: {
    ...mapGetters({
      userData: 'getProfileData',
      movieFavourites: 'getMovieFavourites',
      movieWatchlist: 'getMovieWatchlist',
      TVFavourites: 'getTVFavourites',
      TVWatchlist: 'getTVWatchlist'
      // contacts: 'getContacts',
      // searchedUserProfileData: 'getUserProfileData',
      // isResolved: 'isResolved',
      // isRedirected: 'isRedirected'
    })
  },
  methods: {
    redirectToResources () {}
  }
}
</script>
<style lang="scss" scoped>
.profile-info {
  .headline {
  color: #5a5d5f
  }
  h3{
    color: grey
  }
}
.br20 {
  border-radius: 20px
}
.qr-code {
  margin: 1% 0% 3% 0%
}
.ml25 {
  margin-left: 1em
}
.si {
  .v-icon {
  font-size: 15px !important
  }
}

</style>
