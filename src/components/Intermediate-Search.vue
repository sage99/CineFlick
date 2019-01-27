<template>
  <v-layout row wrap>
    <h1 class="headline">Search Results: </h1>
    <v-flex xs12 sm6 xl4  v-for="(item, index) in searchResult" :key="index">
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
              <v-flex :class="mode ? '' : 'ml-2'" sm9 xs12>
                <div class="title font-weight-regular">{{type === 'TV' ? item.name : item.title}}</div>
                <div v-if="type === 'TV' && mode === 'season'" class="font-weight-light">({{item.air_date.split('-')[0]}})</div>
                <div v-else-if="type === 'TV'" class="font-weight-light">({{item.first_air_date.split('-')[0]}})</div>
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
                <v-btn :color="darkMode ? '' : 'primary'"  @click="type === 'TV' ? getTVShowDetails(item, index) :getMovieDetails(item, index)" :loading="isLoading[index]" round block>more info <v-icon >keyboard_arrow_right</v-icon></v-btn>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'SearchResult',
  computed: {
    ...mapGetters({
      searchResult: 'getSearchResult'
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
  }
}
</script>

<style>

</style>
