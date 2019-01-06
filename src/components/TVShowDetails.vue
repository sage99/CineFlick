<template>
  <v-container v-if="TVShowDetails && Object.keys(TVShowDetails).length > 0" class="white--text">
    <v-layout row wrap class="mb-5">
      <v-flex xs3>
        <v-img :src='appendUrl + TVShowDetails.poster_path'></v-img>
      </v-flex>
      <v-flex class='ml-5' xs7>
        <h1 class="mt-3 mb-3 display-2">{{TVShowDetails.name}} <span class="headline">({{new Date(TVShowDetails.first_air_date).getFullYear()}})</span></h1>
        <!-- <h3>{{new Date(TVShowDetails.release_date).toGMTString().split(" ").splice(0,4).join(" ")}}</h3> -->
        <v-progress-circular
          :rotate='-90'
          :size='70'
          :width='10'
          :value='TVShowDetails.vote_average * 10'
          :color='color(TVShowDetails.vote_average)'
        >
          {{ TVShowDetails.vote_average * 10 }}%
        </v-progress-circular>
        <span class="body-2 ml-2">User Score</span>
        <v-tooltip bottom>
          <v-btn slot="activator" dark class="ml-5" outline fab>
            <v-icon>list</v-icon>
          </v-btn>
          <span>Add to playlist or Create one (Coming Soon...)</span>
        </v-tooltip>

        <v-tooltip v-if="!watchlistTVObj[TVShowDetails.id]" bottom>
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

        <v-tooltip v-if="!favTVObj[TVShowDetails.id]" bottom>
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

        <v-tooltip v-if="TVShowDetails.videos.results.length > 0" right>
          <v-btn @click="eventBus.$emit('playTrailer', {videoid: TVShowDetails.videos.results[0].key})" outline fab slot="activator" dark>
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
        <p>{{TVShowDetails.overview}}</p>
        <v-layout  row wrap>
          <v-flex xs12><h1 class="headline">Stats</h1></v-flex>
          <v-flex class="mt-2" xs4 >
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
                <h2 class="subheading">{{TVShowDetails.number_of_episodes}}</h2>
                <h3 class="caption">Episode Count</h3>
            <!-- </v-card> -->
          </v-flex>
          <v-flex class="mt-2" xs4 >
            <h2 class="subheading">{{TVShowDetails.number_of_seasons}}</h2>
            <h3 class="caption">Total Seasons</h3>
          </v-flex>
          <v-flex class="mt-2" xs4 >
            <h2 class="subheading">{{TVShowDetails.first_air_date}}</h2>
            <h3 class="caption">First Air Date</h3>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
    <v-layout v-if="TVShowDetails.similar.results.length > 0" justify-center align-center class="mt-5" row wrap>
      <h1 class="mt-3 font-weight-light">Recommendations</h1>
      <v-flex s12 >
        <items-list :showPagination="false" type="TV" :itemList="TVShowDetails.similar.results.slice(0,6)" ></items-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { eventBus } from '@/main'
import { mapGetters } from 'vuex'
import ItemsList from './ItemsList'
export default {
  name: 'TVShowDetails',
  components: { ItemsList },
  computed: {
    ...mapGetters({
      TVShowDetails: 'getTVShowDetails',
      TVWatchlist: 'getTVWatchlist',
      TVFavourites: 'getTVFavourites',
      watchlistTVObj: 'getWatchlistTVObj',
      favTVObj: 'getFavTVObj'
    })
  },
  data: () => ({
    appendUrl: 'https://image.tmdb.org/t/p/w342/',
    appendProfileUrl: 'https://image.tmdb.org/t/p/w185/',
    playTrailer: false,
    Id: '',
    eventBus: eventBus
  }),
  watch: {
    deep: true,
    TVShowDetails () {
      window.scroll(0, 0)
      let url = `https://image.tmdb.org/t/p/w1280/${this.TVShowDetails.backdrop_path}`
      let el = document.getElementsByClassName('v-content__wrap')[0]
      el.style['background-image'] = `url(${url})`
    }
  },
  methods: {
    play () {
      this.playTrailer = true
    },
    addToWatchlist () {
      let data = [this.TVShowDetails, ...this.TVWatchlist]
      let fileObj = {
        fileName: 'my_tv_watchlist.json',
        data: data,
        options: { encrypt: true }
      }
      this.$store.dispatch('ACTION_SET_TV_WATCHLIST', fileObj)
    },
    removeFromWatchlist () {
      let TVShows = this.TVWatchlist.filter(item => item.id !== this.TVShowDetails.id)
      let fileObj = {
        fileName: 'my_tv_watchlist.json',
        data: [...TVShows],
        options: { encrypt: true }
      }
      this.$store.dispatch('ACTION_SET_TV_WATCHLIST', fileObj)
    },
    addToFavourites () {
      let data = [this.TVShowDetails, ...this.TVFavourites]
      let fileObj = {
        fileName: 'my_tv_favourites.json',
        data: data,
        options: { encrypt: true }
      }
      this.$store.dispatch('ACTION_SET_TV_FAVOURITES', fileObj)
    },
    removeFromFavourites () {
      let TVShows = this.TVFavourites.filter(item => item.id !== this.TVShowDetails.id)
      let fileObj = {
        fileName: 'my_tv_favourites.json',
        data: [...TVShows],
        options: { encrypt: true }
      }
      this.$store.dispatch('ACTION_SET_TV_FAVOURITES', fileObj)
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
    let url = `https://image.tmdb.org/t/p/w1280/${this.TVShowDetails.backdrop_path}`
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
    if (!(this.TVShowDetails && Object.keys(this.TVShowDetails).length > 0)) {
      if (this.$route.params.id) this.$store.dispatch('ACTION_GET_MOVIE_DETAILS', { id: this.$route.params.id })
      else this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style>
</style>
