<template>
  <v-container>
    <h2 v-if="filteredResult.movies.length > 0" class="headline text-xs-center">Search Results</h2>
    <span v-if="filteredResult.movies.length > 0" class="headline">Movies</span>
    <items-list v-if="filteredResult.movies.length > 0" :showPagination="false" :itemList="filteredResult.movies"></items-list>
    <h2 v-if="filteredResult.tv.length > 0" class="headline">TV Shows</h2>
    <items-list v-if="filteredResult.tv.length > 0" type="TV" :showPagination="false" :itemList="filteredResult.tv"></items-list>
  </v-container>
  <!-- <v-layout row wrap>
    <v-flex xs12><h1 class="headline">Search Results: </h1></v-flex>
    <v-flex xs12 sm6 xl4  v-for="(item, index) in searchResult.movies" :key="index">
      <v-card class="ml-3 mt-2 br20" :hover="true">
        <v-layout row>
          <v-flex xs12 sm5>
            <v-img
            :src="appendedUrl + item.poster_path"
            contain
            ></v-img>
          </v-flex>
          <v-flex class="flex-card-content" ml-3 mt-2 xs12 sm7 >
            <v-layout row align-center justify-center mb-4>
              <v-flex xs12 sm3>
                <v-progress-circular
                  :rotate="-90"
                  :size="70"
                  :width="10"
                  :value="item.vote_average * 10"
                  :color="color(item.vote_average)"
                >
                  {{ item.vote_average * 10 }}%
                </v-progress-circular>
              </v-flex>
              <v-flex :class="mode ? '' : 'ml-2'" sm9 xs12>
                <div class="title font-weight-regular">{{item.media_type === 'TV' ? item.name : item.title}}</div>
                <div v-if="item.media_type === 'TV' && mode === 'season'" class="font-weight-light">({{item.air_date.split('-')[0]}})</div>
                <div v-else-if="item.media_type === 'TV'" class="font-weight-light">({{item.first_air_date.split('-')[0]}})</div>
                <div v-else class="font-weight-light">{{new Date(item.release_date).toGMTString().split(" ").splice(0,4).join(" ")}}</div>
              </v-flex>
            </v-layout>
            <v-layout>
              <v-flex class="mr-1" >
                <div>
                  <span><v-subheader class="pl-0" >Overview:</v-subheader></span>{{text_truncate(item.overview)}}
                </div>
              </v-flex>
            </v-layout>
            <v-layout class="flex-button-align-end" mr-2>
              <v-flex>
                <v-btn :color="darkMode ? '' : 'primary'"  @click="item.media_type === 'TV' ? getTVShowDetails(item, index) :getMovieDetails(item, index)" :loading="isLoading[index]" round block>more info <v-icon >keyboard_arrow_right</v-icon></v-btn>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout> -->
</template>

<script>
import { mapGetters } from 'vuex'
import ItemsList from '@/components/Views/ItemsList'
export default {
  name: 'SearchResult',
  components: { ItemsList },
  data () {
    return {
      isLoading: {},
      appendedUrl: 'https://image.tmdb.org/t/p/w342/',
      mode: ''
    }
  },
  computed: {
    ...mapGetters({
      filteredResult: 'getFilteredResult',
      darkMode: 'darkMode'
    }),
    filteredSearchResult () {
      let obj = {
        'tv': [],
        'movies': []
      }
      this.searchResult.forEach(element => {
        if (element.media_type === 'tv') {
          obj.tv.push(element)
        } else if (element.media_type === 'movie') {
          obj.movies.push(element)
        }
      })
      return obj
    }
  },
  methods: {
    createobj (length) {
      for (let i = 0; i < length; i++) {
        this.$set(this.isLoading, i, false)
      }
    }
  },
  mounted () {
    this.createobj(20)
    window.scroll(0, 0)
  }
  // destroyed () {
  //   this.$store.commit('MUTATION_SET_FILTERED_SEARCH_RESULT', {})
  // }
}
</script>

<style>

</style>
