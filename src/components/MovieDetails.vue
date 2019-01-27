<template>
  <v-container fluid v-if="movieDetails && Object.keys(movieDetails).length > 0" class="white--text">
    <v-layout row wrap id="movieDetail" class="mb-5">
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
          <span>Add to playlist or Create one (Coming Soon...)</span>
        </v-tooltip>

        <v-tooltip v-if="!watchlistMovieObj[movieDetails.id]" bottom>
          <v-btn @click="addToWatchlist" slot="activator" dark outline fab>
            <v-icon>bookmark_border</v-icon>
          </v-btn>
          <span>Add to Watchlist</span>
        </v-tooltip>

        <v-tooltip v-else bottom>
          <v-btn @click="removeFromWatchlist" slot="activator" dark outline fab>
            <v-icon>bookmark</v-icon>
          </v-btn>
          <span>Remove from Watchlist</span>
        </v-tooltip>

        <v-tooltip v-if="!favMovieObj[movieDetails.id]" bottom>
          <v-btn @click="addToFavourites" outline fab slot="activator" dark>
            <v-icon >favorite_border</v-icon>
          </v-btn>
          <span>Add to Favourites</span>
        </v-tooltip>

        <v-tooltip v-else bottom>
          <v-btn @click="removeFromFavourites" outline fab slot="activator" dark>
            <v-icon >favorite</v-icon>
          </v-btn>
          <span>Remove from Favourites</span>
        </v-tooltip>

        <v-tooltip v-if="movieDetails.videos.results.length > 0" right>
          <v-btn @click="eventBus.$emit('playTrailer', {videoid: movieDetails.videos.results[movieDetails.videos.results.length - 1].key, size: playerSize})" outline fab slot="activator" dark>
            <v-icon>play_arrow</v-icon>
          </v-btn>
          <span>Play Trailer</span>
        </v-tooltip>
        <v-tooltip v-else right>
          <v-btn outline fab slot="activator" dark>
            <v-icon>play_arrow</v-icon>
          </v-btn>
          <span>Trailer not available.</span>
        </v-tooltip>
        <v-subheader class='pl-0 white--text'>Overview:</v-subheader>
        <p>{{movieDetails.overview}}</p>
        <v-layout  row wrap>
          <v-flex xs12><h1 class="headline">Featured Crew</h1></v-flex>
          <v-flex class="mt-2" xs4 v-for="(item, index) in movieDetails.credits.crew.slice(0,6)" :key="index + 'a'" >
            <h2 class="subheading">{{item.name}}</h2>
            <h3 class="caption">{{item.department}}</h3>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
    <!-- CAST OVERVIEW -->
    <v-layout mt-5 row wrap>
      <v-flex mt-3 xs12><div class="title">Cast Overview:</div></v-flex>
      <v-flex xs7>
        <v-layout row wrap>
          <v-flex d-flex xs3 v-for="(item, index1) in movieDetails.credits.cast.slice(0,8)" :key="index1 + 'b'" >
            <v-card class="mt-3 br20 ml-3">
              <v-img
                :src="appendProfileUrl+item.profile_path"
              ></v-img>
              <v-card-text class="text-xs-center" primary-title>
                <div>
                  <div>{{item.name}}</div>
                  <div>as</div>
                  <div>{{item.character}}</div>
                </div>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-btn :color="darkMode ? '' : 'primary'" @click="redirectToCast" block round class="ml-3 mt-3">View Full Cast and Crew  <v-icon >keyboard_arrow_right</v-icon></v-btn>
        </v-layout>
      </v-flex>
      <!-- STATS -->
      <v-flex mt-3 ml-3 xs4>
        <v-card class="br20">
          <v-card-title class="headline">Stats</v-card-title>
          <v-list two-line>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>Homepage</v-list-tile-title>
                <v-list-tile-sub-title><a target="_blank" :href="movieDetails.homepage">{{movieDetails.homepage}}</a></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>Release Date</v-list-tile-title>
                <v-list-tile-sub-title>{{movieDetails.release_date}}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>Original Language</v-list-tile-title>
                <v-list-tile-sub-title>{{getSpokenLanguage()}}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>Runtime</v-list-tile-title>
                <v-list-tile-sub-title>{{toHoursMinutes(movieDetails.runtime)}}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>Budget</v-list-tile-title>
                <v-list-tile-sub-title>{{'$' + movieDetails.budget}}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>Revenue</v-list-tile-title>
                <v-list-tile-sub-title>{{'$' + movieDetails.revenue}}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
          <v-card-text>
            <div class="title font-weight-regular">Genre:</div>
            <v-chip color="teal lighten-2" class="mt-3 " v-for="(genre, index2) in movieDetails.genres" :key="index2 + 'c'">
              {{genre ? genre.name : null}}
            </v-chip>
            <div class="title font-weight-regular mt-3">Keywords:</div>
            <v-chip color="teal lighten-2" class="mt-3 " v-for="(keyword, index3) in movieDetails.keywords.keywords" :key="index3 + 'd'">
              {{keyword ? keyword.name : null}}
            </v-chip>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout id="movieEnd" v-if="movieDetails.similar.results.length > 0" justify-center align-center class="mt-5" row wrap>
      <h1 >Similar Movies</h1>
      <v-flex s12 >
        <items-list :showPagination="false" :itemList="movieDetails.similar.results.slice(0,6)" ></items-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { eventBus } from '@/main'
import { mapGetters } from 'vuex'
import ItemsList from './ItemsList'
export default {
  name: 'MovieDetails',
  components: { ItemsList },
  computed: {
    ...mapGetters({
      movieDetails: 'getMovieDetails',
      movieWatchlist: 'getMovieWatchlist',
      movieFavourites: 'getMovieFavourites',
      watchlistMovieObj: 'getWatchlistMovieObj',
      favMovieObj: 'getFavMovieObj',
      darkMode: 'darkMode'
    }),
    playerSize () {
      return {
        width: window.outerWidth * 0.7,
        height: window.outerWidth * 0.38
      }
    }
    // imageHeight () {
    //   switch (this.$vuetify.breakpoint.name) {
    //     case 'xs': return '220px'
    //     case 'sm': return '400px'
    //     case 'md': return '500px'
    //     case 'lg': return '600px'
    //     case 'xl': return '800px'
    //   }
    // }
  },
  data: () => ({
    appendUrl: 'https://image.tmdb.org/t/p/w342/',
    appendProfileUrl: 'https://image.tmdb.org/t/p/w154/',
    playTrailer: false,
    Id: '',
    eventBus: eventBus
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
    redirectToCast () {
      this.$store.commit('MUTATION_SET_CAST_AND_CREW', this.movieDetails.credits)
      this.$router.push({ name: 'CastAndCrew' })
    },
    getSpokenLanguage () {
      let language = this.movieDetails.spoken_languages.find(item => item.iso_639_1 === this.movieDetails.original_language)
      return language ? language.name : null
    },
    toHoursMinutes (minutes) {
      let hours = Math.floor(minutes / 60)
      let remainingMinutes = Math.floor(minutes % 60)
      return `${hours}h ${remainingMinutes}m`
    },
    play () {
      this.playTrailer = true
    },
    addToWatchlist () {
      let data = [this.movieDetails, ...this.movieWatchlist]
      let fileObj = {
        fileName: 'my_movie_watchlist.json',
        data: data,
        options: { encrypt: true }
      }
      this.$store.dispatch('ACTION_SET_MOVIE_WATCHLIST', fileObj)
    },
    removeFromWatchlist () {
      let movies = this.movieWatchlist.filter(item => item.id !== this.movieDetails.id)
      let fileObj = {
        fileName: 'my_movie_watchlist.json',
        data: movies,
        options: { encrypt: true }
      }
      this.$store.dispatch('ACTION_SET_MOVIE_WATCHLIST', fileObj)
    },
    addToFavourites () {
      let data = [this.movieDetails, ...this.movieFavourites]
      let fileObj = {
        fileName: 'my_movie_favourites.json',
        data: data,
        options: { encrypt: true }
      }
      this.$store.dispatch('ACTION_SET_MOVIE_FAVOURITES', fileObj)
    },
    removeFromFavourites () {
      let movies = this.movieFavourites.filter(item => item.id !== this.movieDetails.id)
      let fileObj = {
        fileName: 'my_movie_favourites.json',
        data: [...movies],
        options: { encrypt: true }
      }
      this.$store.dispatch('ACTION_SET_MOVIE_FAVOURITES', fileObj)
    },
    color (score) {
      let finalScore = score * 10
      if (finalScore >= 70) return 'success'
      else if (finalScore > 30 && finalScore < 70) return 'lime accent-2'
      else return 'red'
    }
  },
  mounted () {
    let availableHeight = `${window.innerHeight - document.getElementById('toolbar').offsetHeight}`
    let docHeight = document.body.scrollHeight
    let marginBottom = availableHeight - document.getElementById('movieDetail').offsetHeight
    if (this.movieDetails.similar.results.length > 0) {
      document.getElementById('movieEnd').style['marginTop'] = `${marginBottom}px`
    }
    window.scroll(0, 0)

    let url = `https://image.tmdb.org/t/p/w1280/${this.movieDetails.backdrop_path}`
    let el = document.getElementsByClassName('v-content__wrap')[0]
    el.style['background-image'] = `url(${url})`
    el.style['background-size'] = `100% 100vh`
    el.style['box-shadow'] = `inset 0 ${docHeight + 1000}px 0 0 rgba(65, 63, 64, 0.9)`
    // el.style['background-position'] = 'center center'
  },
  destroyed () {
    let el = document.getElementsByClassName('v-content__wrap')[0]
    el.style['background-image'] = `url('')`
    el.style['background-size'] = 'initial'
    el.style['background-position'] = ''
    el.style['box-shadow'] = 'initial'
  },
  created () {
    if (!(this.movieDetails && Object.keys(this.movieDetails).length > 0)) {
      if (this.$route.params.id) this.$store.dispatch('ACTION_GET_MOVIE_DETAILS', { id: this.$route.params.id })
      else this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style>
</style>
