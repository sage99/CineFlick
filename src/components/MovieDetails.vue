<template>
  <v-container class="white--text">
    <v-layout row wrap class="mb-5">
      <v-flex xs3>
        <v-img :src='appendUrl + movieDetails.poster_path'></v-img>
      </v-flex>
      <v-flex class='ml-5' xs7>
        <h1 class="mt-3 mb-3 display-2">{{movieDetails.original_title}} <span class="headline">({{new Date(movieDetails.release_date).getFullYear()}})</span></h1>
        <!-- <h3>{{new Date(movieDetails.release_date).toGMTString().split(" ").splice(0,4).join(" ")}}</h3> -->
        <v-progress-circular
          :rotate='-90'
          :size='70'
          :width='10'
          :value='movieDetails.vote_average * 10'
          :color='color(movieDetails.vote_average)'
        >
          {{ movieDetails.vote_average * 10 }}%
        </v-progress-circular>
        <span class="body-2 ml-2">User Score</span>
        <v-tooltip bottom>
          <v-btn slot="activator" dark class="ml-5" outline fab>
            <v-icon>list</v-icon>
          </v-btn>
          <span>Add to playlist or Create one</span>
        </v-tooltip>
        <v-tooltip bottom>
          <v-btn slot="activator" dark outline fab>
            <v-icon>bookmark_border</v-icon>
          </v-btn>
          <span>Add to watchlist</span>
        </v-tooltip>
        <v-tooltip bottom>
          <v-btn outline fab slot="activator" dark>
            <v-icon>favorite_border</v-icon>
          </v-btn>
          <span>Add to favourite</span>
        </v-tooltip>
        <v-tooltip right>
          <v-btn outline fab slot="activator" dark>
            <v-icon>play_arrow</v-icon>
          </v-btn>
          <span>Play Trailer</span>
        </v-tooltip>
        <v-subheader class='pl-0 white--text'>Overview:</v-subheader>
        <p>{{movieDetails.overview}}</p>
        <v-layout  row wrap>
          <v-flex xs12><h1 class="headline">Featured Crew</h1></v-flex>
          <v-flex class="mt-2" xs4 v-for="(item, index) in movieDetails.credits.crew.slice(0,6)" :key="index" >
            <h2 class="subheading">{{item.name}}</h2>
            <h3 class="caption">{{item.department}}</h3>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
    <v-layout v-if="movieDetails.similar.results.length > 0" justify-center align-center class="mt-5" row wrap>
      <h1 class="mt-3">Similar Movies</h1>
      <v-flex s12 >
        <items-list :itemList="movieDetails.similar.results.slice(0,6)" ></items-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import ItemsList from './ItemsList'
export default {
  name: 'MovieDetails',
  components: { ItemsList },
  computed: {
    ...mapGetters({
      movieDetails: 'getMovieDetails'
    })
  },
  data: () => ({
    appendUrl: 'https://image.tmdb.org/t/p/w342/'
  }),
  watch: {
    deep: true,
    movieDetails () {
      window.scroll(0, 0)
      let url = `https://image.tmdb.org/t/p/w1280/${this.movieDetails.backdrop_path}`
      let el = document.getElementsByClassName('v-content__wrap')[0]
      el.style['background-image'] = `url(${url})`
    }
  },
  methods: {
    color (score) {
      let finalScore = score * 10
      if (finalScore >= 70) return 'success'
      else if (finalScore > 30 && finalScore < 70) return 'lime accent-2'
      else return 'red'
    }
  },
  mounted () {
    window.scroll(0, 0)
    console.log(this.movieDetails)
    let url = `https://image.tmdb.org/t/p/w1280/${this.movieDetails.backdrop_path}`
    let el = document.getElementsByClassName('v-content__wrap')[0]
    el.style['background-image'] = `url(${url})`
    el.style['background-size'] = '100% 100vh'
    el.style['box-shadow'] = 'inset 0 100vh 0 0 rgba(65, 63, 64, 0.9)'
    // el.style['background-position'] = 'center center'
  },
  destroyed () {
    let el = document.getElementsByClassName('v-content__wrap')[0]
    el.style['background-image'] = `url('')`
    el.style['background-size'] = 'initial'
    el.style['background-position'] = ''
    el.style['box-shadow'] = 'initial'
  }
}
</script>

<style>
</style>
