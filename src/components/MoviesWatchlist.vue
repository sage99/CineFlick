<template>
  <div>
    <h1 v-if="movieWatchlist && movieWatchlist.length > 0" class="headline ml-5 font-weight-regular">Watchlist</h1>
    <h2 v-else class="title ml-5 font-weight-light">Oops, Looks like you have not added any movies to your Watchlist yet.</h2>
    <items-list v-if="movieWatchlist && movieWatchlist.length > 0" :showPagination="false" :itemList="movieWatchlist"></items-list>
  </div>
</template>

<script>
import ItemsList from './ItemsList'
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
