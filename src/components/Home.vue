<template>
  <div>
    <h1 class="headline ml-5 font-weight-regular">{{movies.title}}</h1>
    <items-list v-if="movies.data.length > 0" :showPagination="true" :pageNumber="movies.page" :totalPages="movies.max_pages" :itemList="movies.data"></items-list>
  </div>
</template>

<script>
import ItemsList from './ItemsList'
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  components: {
    ItemsList
  },
  computed: {
    ...mapGetters({
      movies: 'getMovieList'
    })
  },
  data: () => ({
    title: 'In Theatres',
    page: 1
  }),
  mounted () {
    if (this.$route.params && this.$route.params.type === 'popular') {
      this.$store.dispatch('ACTION_GET_POPULAR_MOVIES', { page: 1 })
    } else if (this.$route.params && this.$route.params.type === 'top-rated') {
      this.$store.dispatch('ACTION_GET_TOP_RATED_MOVIES', { page: 1 })
    } else {
      this.$store.dispatch('ACTION_GET_IN_THEATRE_MOVIES', { page: 1 })
      this.$router.push({ name: 'Home', params: { type: 'in-theatre' } })
    }
  }
}
</script>

<style lang="scss">

</style>
