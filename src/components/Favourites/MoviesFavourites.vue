<template>
  <v-layout row wrap class="position-center">
    <v-flex v-if="favouriteMovies && favouriteMovies.length > 0">
      <h1 class="headline ml-5 font-weight-regular">Favourite Movies</h1>
      <items-list v-if="favouriteMovies && favouriteMovies.length > 0" :showPagination="false" :itemList="favouriteMovies"></items-list>
    </v-flex>
    <v-flex v-else class="position-center">
      <h2 class="title ml-5 font-weight-light">Oops, Looks like you have not added any favourite movies yet.</h2>
    </v-flex>
  </v-layout>
</template>

<script>
import ItemsList from '@/components/Views/Brief-view'
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
