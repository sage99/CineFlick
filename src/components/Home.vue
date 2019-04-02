<template>
  <v-layout row wrap>
    <v-flex :class="viewType === 'Compact' ? 'xs8' : 'xs12'">
      <v-layout row wrap>
        <v-flex xs8>
          <h1 class="headline ml-5 font-weight-regular">{{movies.title}}</h1>
        </v-flex>
        <v-flex xs4>
          <v-select
          class="mt-0 mr-5"
          :color="$store.state.darkMode ? 'white' : 'primary'"
          label="Select View Type"
          :items="viewTypes"
          v-model="viewType"
        ></v-select>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex :class="viewType === 'Compact' ? 'xs8' : 'xs12'">

      <compact-view  v-if="movies.data.length > 0 && viewType === 'Compact'" :showPagination="true" :pageNumber="movies.page" :totalPages="movies.max_pages" :itemList="movies.data"></compact-view>
      <brief-view  v-if="movies.data.length > 0 && viewType === 'Detailed'" :showPagination="true" :pageNumber="movies.page" :totalPages="movies.max_pages" :itemList="movies.data"></brief-view>
    </v-flex>
    <v-flex class="mt-4" v-if="viewType === 'Compact'" xs4>
      <top-playlist></top-playlist>
    </v-flex>
  </v-layout>
</template>

<script>
import BriefView from '@/components/Views/Brief-view'
import TopPlaylist from '@/components/Playlist/Top10'
import CompactView from '@/components/Views/Compact-view'
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  components: {
    BriefView,
    CompactView,
    TopPlaylist
  },
  computed: {
    ...mapGetters({
      movies: 'getMovieList'
    })
  },
  data: () => ({
    title: 'In Theatres',
    page: 1,
    viewTypes: [
      'Compact',
      'Detailed'
    ],
    viewType: 'Compact'
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
    this.$store.dispatch('ACTION_GET_PLAYLIST', {
      fileName: 'my_playlist.json',
      options: { decrypt: false }
    })
  }
}
</script>

<style lang="scss">

</style>
