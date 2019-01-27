<template>
  <v-list class="mt-2 br20">
    <v-card-title class="headline">Search Results</v-card-title>
    <template v-for="(item, index) in searchResults" >
      <v-list-tile @click="item.media_type === 'tv' ? getTVShowDetails(item, index) :getMovieDetails(item, index)" :key="index">
        <v-list-tile-avatar>
          <v-btn icon read-only :loading="isLoading[index]">
            <v-icon v-if="item.media_type === 'movie'"  >movie</v-icon>
            <v-icon v-else-if="item.media_type === 'tv'">tv</v-icon>
            <v-icon v-else>search</v-icon>
          </v-btn>
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>
            {{item.name || item.original_title}}
            <span class="v-list__tile__sub-title">{{item.media_type === 'movie' ? 'in Movies' : item.media_type === 'tv' ? 'in TV Shows' : ''}}</span>
          </v-list-tile-title>
          <!-- <v-list-tile-sub-title>{{item.media_type === 'movie' ? 'in Movies' : item.media_type === 'tv' ? 'in TV Shows' : ''}}</v-list-tile-sub-title> -->
        </v-list-tile-content>
      </v-list-tile>
      <v-divider :key="index+'a'"></v-divider>
    </template>
  </v-list>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: ['searchResults'],
  computed: {
    ...mapGetters({
      results: 'getSearchResult'
    })
  },
  data: () => ({
    isLoading: {}
  }),
  methods: {
    createobj (length) {
      for (let i = 0; i < length; i++) {
        this.$set(this.isLoading, i, false)
      }
    },
    async getMovieDetails (movie, index) {
      this.isLoading[index] = true
      await this.$store.dispatch('ACTION_GET_MOVIE_DETAILS', movie)
      this.isLoading[index] = false
      this.$emit('closeDialog')
      this.$router.push({ name: 'MovieDetails', params: { id: movie.id } })
    },
    async getTVShowDetails (TVshow, index) {
      this.isLoading[index] = true
      await this.$store.dispatch('ACTION_GET_TV_SHOW_DETAILS', TVshow)
      this.isLoading[index] = false
      this.$emit('closeDialog')
      this.$router.push({ name: 'TVShowDetails', params: { id: TVshow.id } })
    }
  },
  mounted () {
    this.createobj(20)
  }
}
</script>

<style>
/* .br20 {
  border-radius: 20px;
} */
</style>
