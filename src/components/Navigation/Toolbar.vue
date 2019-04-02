<template>
  <div>
    <v-toolbar id="toolbar" dark app fixed clipped-left>
      <v-toolbar-side-icon class="hidden-sm-and-up" @click="$emit('toggleDrawer')"></v-toolbar-side-icon>
      <v-toolbar-side-icon @click="getMovies('IN_THEATRE_MOVIES', 'in-theatre')">
        <v-img
          src="https://raw.githubusercontent.com/sage99/CineFlick/master/src/assets/logo.png"
        ></v-img>

      </v-toolbar-side-icon>
      <v-toolbar-title class="hidden-xs"><a class="title1" @click="getMovies('IN_THEATRE_MOVIES', 'in-theatre')">CineFlick</a></v-toolbar-title>
      <v-btn @click="dialog = !dialog" class="ml-4" icon>
        <v-icon>search</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn @click="getPlaylist" flat>Playlists</v-btn>

        <v-menu transition="slide-y-transition" bottom>
          <v-btn flat slot="activator">
            Watch List
          </v-btn>
          <v-list>
            <v-list-tile @click="getMovieWatchlist">
              <v-list-tile-title>Movies</v-list-tile-title>
            </v-list-tile>
            <v-list-tile @click="getTVWatchlist">
              <v-list-tile-title>TV Shows</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>

        <v-menu transition="slide-y-transition" bottom>
          <v-btn flat slot="activator">
            Favourites
          </v-btn>
          <v-list>
            <v-list-tile @click="getFavouriteMovies">
              <v-list-tile-title>Movies</v-list-tile-title>
            </v-list-tile>
            <v-list-tile @click="getFavouriteTVShows">
              <v-list-tile-title>TV Shows</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>

        <v-menu transition="slide-y-transition" bottom>
          <v-btn flat slot="activator">
            Movies
          </v-btn>
          <v-list>
            <v-list-tile @click="getMovies('IN_THEATRE_MOVIES', 'in-theatres')">
              <v-list-tile-title>In Theaters</v-list-tile-title>
            </v-list-tile>
            <v-list-tile @click="getMovies('POPULAR_MOVIES', 'popular')">
              <v-list-tile-title>Popular</v-list-tile-title>
            </v-list-tile>
            <v-list-tile @click="getMovies('TOP_RATED_MOVIES', 'top-rated')">
              <v-list-tile-title>Top Rated</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>

        <v-menu transition="slide-y-transition" bottom>
          <v-btn flat slot="activator">
            TV Shows
          </v-btn>
          <v-list>
            <v-list-tile @click="getTVShows('ON_AIR_TVSHOWS', 'on-the-air')">
              <v-list-tile-title>On TV</v-list-tile-title>
            </v-list-tile>
            <v-list-tile @click="getTVShows('AIRING_TODAY_TVSHOWS', 'airing-today')">
              <v-list-tile-title>Airing Today</v-list-tile-title>
            </v-list-tile>
            <v-list-tile @click="getTVShows('POPULAR_TVSHOWS', 'popular')">
              <v-list-tile-title>Popular</v-list-tile-title>
            </v-list-tile>
            <v-list-tile @click="getTVShows('TOP_RATED_TVSHOWS', 'top-rated')">
              <v-list-tile-title>Top Rated</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar-items>
      <avatar-menu></avatar-menu>
    </v-toolbar>
    <Search @updateDialog="dialog = false" :dialog="dialog"></Search>
  </div>
</template>

<script>
import AvatarMenu from '@/components/Navigation/AvatarMenu'
import Search from '@/components/Search/Search'
export default {
  name: 'Toolbar',
  components: {
    AvatarMenu,
    Search
  },
  data: () => ({
    dialog: false
  }),
  methods: {
    getMovies (action, type) {
      this.$store.dispatch(`ACTION_GET_${action}`, { page: 1 })
      this.$router.push({ name: 'Home', params: { type: type } })
    },
    getTVShows (action, type) {
      this.$store.dispatch(`ACTION_GET_${action}`, { page: 1 })
      this.$router.push({ name: 'TVShows', params: { type: type } })
    },
    getMovieWatchlist () {
      this.$router.push({ name: 'MoviesWatchlist' })
    },
    getFavouriteMovies () {
      this.$router.push({ name: 'FavouriteMovies' })
    },
    getTVWatchlist () {
      this.$router.push({ name: 'TVWatchlist' })
    },
    getFavouriteTVShows () {
      this.$router.push({ name: 'TVFavourites' })
    },
    getPlaylist () {
      this.$router.push({ name: 'Playlists' })
    }
  }
}
</script>

<style>
.title1 {
  color: white;
  text-decoration: none;
  /* background-image: url('../assets/h1.gif');
  background-size: cover;
  -webkit-background-clip: text;
  background-clip: text;
  letter-spacing: 1px;
  font-family: 'Play', sans-serif;
  -webkit-text-fill-color: transparent;
  font-size: 2em; */
}
</style>
