<template>
  <div>
    <h1 class="headline ml-5 font-weight-regular">{{TVShows.title}}</h1>
    <items-list v-if="TVShows.data.length > 0" type="TV" :showPagination="true" :pageNumber="TVShows.page" :totalPages="TVShows.max_pages" :itemList="TVShows.data"></items-list>
  </div>
</template>

<script>
import ItemsList from '@/components/Views/ItemsList'
import { mapGetters } from 'vuex'
export default {
  name: 'TVShowsList',
  components: {
    ItemsList
  },
  computed: {
    ...mapGetters({
      TVShows: 'getTVShowsList'
    })
  },
  mounted () {
    if (this.$route.params && this.$route.params.type === 'popular') {
      this.$store.dispatch('ACTION_GET_POPULAR_TVSHOWS', { page: 1 })
    } else if (this.$route.params && this.$route.params.type === 'top-rated') {
      this.$store.dispatch('ACTION_GET_TOP_RATED_TVSHOWS', { page: 1 })
    } else if (this.$route.params && this.$route.params.type === 'on-the-air') {
      this.$store.dispatch('ACTION_GET_ON_AIR_TVSHOWS', { page: 1 })
    } else {
      this.$store.dispatch('ACTION_GET_AIRING_TODAY_TVSHOWS', { page: 1 })
      this.$router.push({ name: 'TVShows', params: { type: 'airing-today' } })
    }
  }
}
</script>
