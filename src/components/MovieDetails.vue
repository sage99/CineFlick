<template>
  <v-container v-if="movieDetails && Object.keys(movieDetails).length > 0" class="white--text">
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

        <v-tooltip right>
          <v-btn outline fab slot="activator" dark>
            <v-icon>play_arrow</v-icon>
          </v-btn>
          <span>Play Trailer (Coming Soon...)</span>
        </v-tooltip>
        <v-subheader class='pl-0 white--text'>Overview:</v-subheader>
        <p>{{movieDetails.overview}}</p>
        <v-layout  row wrap>
          <v-flex xs12><h1 class="headline">Featured Crew</h1></v-flex>
          <v-flex class="mt-2" xs4 v-for="(item, index) in movieDetails.credits.crew.slice(0,6)" :key="index" >
            <!-- <v-card> -->
              <!-- <v-layout>
                <v-flex xs4>
                  <v-img
                    :src="appendProfileUrl+item.profile_path"
                    height="125px"
                    contain
                  ></v-img>
                </v-flex>
                <v-flex xs6>
                  <v-card-title primary-title>
                    <div>
                      <div>{{item.name}}</div>
                      <div>{{item.character}}</div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout> -->
              <!-- <v-card-content> -->
              <!-- </v-card-content> -->
              <!-- <v-img contain :src="appendProfileUrl+item.profile_path"></v-img> -->
                <h2 class="subheading">{{item.name}}</h2>
                <h3 class="caption">{{item.department}}</h3>
            <!-- </v-card> -->
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
    <v-layout v-if="movieDetails.similar.results.length > 0" justify-center align-center class="mt-5" row wrap>
      <h1 class="mt-3">Similar Movies</h1>
      <v-flex s12 >
        <items-list :showPagination="false" :itemList="movieDetails.similar.results.slice(0,6)" ></items-list>
      </v-flex>
    </v-layout>
    <player :playTrailer="playTrailer" :trailerId="Id"></player>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import ItemsList from './ItemsList'
import Player from './Player'
export default {
  name: 'MovieDetails',
  components: { ItemsList, Player },
  computed: {
    ...mapGetters({
      movieDetails: 'getMovieDetails',
      movieWatchlist: 'getMovieWatchlist',
      movieFavourites: 'getMovieFavourites',
      watchlistMovieObj: 'getWatchlistMovieObj',
      favMovieObj: 'getFavMovieObj'
    })
  },
  data: () => ({
    appendUrl: 'https://image.tmdb.org/t/p/w342/',
    appendProfileUrl: 'https://image.tmdb.org/t/p/w185/',
    playTrailer: false,
    Id: ''
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
    window.scroll(0, 0)
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
