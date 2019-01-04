<template>
  <v-toolbar dark app fixed clipped-left>
    <v-toolbar-side-icon class="hidden-sm-and-up" @click="$emit('toggleDrawer')"></v-toolbar-side-icon>
    <v-toolbar-title><a class="title1" @click="getMovies('IN_THEATRE_MOVIES', 'in-theatre')">CineFlick</a></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-menu transition="slide-y-transition" bottom min-width="20">
      <v-btn flat slot="activator">
        Watch List
      </v-btn>
      <v-list>
        <v-list-tile @click="getMovieWatchlist">
          <v-list-tile-title>Movies</v-list-tile-title>
        </v-list-tile>
        <v-list-tile >
          <v-list-tile-title>TV Shows (Coming Soon...)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>

    <v-menu transition="slide-y-transition" bottom min-width="20">
      <v-btn flat slot="activator">
        Favourites
      </v-btn>
      <v-list>
        <v-list-tile @click="getFavouriteMovies">
          <v-list-tile-title>Movies</v-list-tile-title>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-title>TV Shows (Coming Soon...)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>

    <v-menu transition="slide-y-transition" bottom min-width="20">
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

    <v-menu transition="slide-y-transition" bottom min-width="20">
      <v-btn flat slot="activator">
        TV Shows
      </v-btn>
      <v-list>
        <v-list-tile>
          <v-list-tile-title>In Theaters (Coming Soon...)</v-list-tile-title>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-title>Popular (Coming Soon...)</v-list-tile-title>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-title>Top Rated (Coming Soon...)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    <avatar-menu></avatar-menu>
  </v-toolbar>
</template>

<script>
import AvatarMenu from '@/components/AvatarMenu'
export default {
  name: 'Toolbar',
  components: {
    AvatarMenu
  },
  methods: {
    getMovies (action, type) {
      this.$store.dispatch(`ACTION_GET_${action}`, { page: 1 })
      this.$router.push({ name: 'Home', params: { type: type } })
    },
    getMovieWatchlist () {
      this.$router.push({ name: 'MoviesWatchlist' })
    },
    getFavouriteMovies () {
      this.$router.push({ name: 'FavouriteMovies' })
    }
  }
}
</script>

<style>
.title1 {
  color: white;
  text-decoration: none;
}
</style>
