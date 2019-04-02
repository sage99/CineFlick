<template>
  <v-layout row wrap>
    <v-flex v-if="movieWatchlist && movieWatchlist.length > 0">
      <h1  class="headline ml-5 font-weight-regular">Watchlist</h1>
      <items-list v-if="movieWatchlist && movieWatchlist.length > 0" :showPagination="false" :itemList="movieWatchlist"></items-list>
    </v-flex>
    <v-flex class="position-center" v-else>
      <h2 class="title ml-5 font-weight-light">Oops, Looks like you have not added any movies to your Watchlist yet.</h2>
    </v-flex>
  </v-layout>
</template>

<script>
import ItemsList from '@/components/Views/Brief-view'
import { mapGetters } from 'vuex'
export default {
  name: 'MoviesWatchlist',
  components: {
    ItemsList
  },
  computed: {
    ...mapGetters({
      movieWatchlist: 'getMovieWatchlist'
    })
  }
}
</script>
