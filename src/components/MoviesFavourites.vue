<template>
  <div>
    <h1 v-if="favouriteMovies && favouriteMovies.length > 0" class="headline ml-5 font-weight-regular">Favourite Movies</h1>
    <h2 v-else class="title ml-5 font-weight-light">Oops, Looks like you have not added any favourite movies yet.</h2>
    <items-list v-if="favouriteMovies && favouriteMovies.length > 0" :showPagination="false" :itemList="favouriteMovies"></items-list>
  </div>
</template>

<script>
import ItemsList from './ItemsList'
import { mapGetters } from 'vuex'
export default {
  name: 'MoviesFavourites',
  components: {
    ItemsList
  },
  computed: {
    ...mapGetters({
      favouriteMovies: 'getMovieFavourites'
    })
  }
}
</script>
