<template>
  <!-- <div>
    <h1 class="headline ml-5 font-weight-regular">{{TVShows.title}}</h1>
    <items-list v-if="TVShows.data.length > 0" type="TV" :showPagination="true" :pageNumber="TVShows.page" :totalPages="TVShows.max_pages" :itemList="TVShows.data"></items-list>
  </div> -->
  <v-layout row wrap>
    <v-flex :class="viewType === 'Compact' ? 'xs8' : 'xs12'">
      <v-layout row wrap>
        <v-flex xs8>
          <h1 class="headline ml-5 font-weight-regular">{{TVShows.title}}</h1>
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
      <compact-view  v-if="TVShows.data.length > 0 && viewType === 'Compact'"  type="TV" :showPagination="true" :pageNumber="TVShows.page" :totalPages="TVShows.max_pages" :itemList="TVShows.data"></compact-view>
      <brief-view  v-if="TVShows.data.length > 0 && viewType === 'Detailed'" type="TV" :showPagination="true" :pageNumber="TVShows.page" :totalPages="TVShows.max_pages" :itemList="TVShows.data"></brief-view>
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
  name: 'TVShowsList',
  components: {
    BriefView,
    CompactView,
    TopPlaylist
  },
  data: () => ({
    viewType: 'Compact',
    viewTypes: [
      'Compact',
      'Detailed'
    ]
  }),
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
