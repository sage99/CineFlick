<template>
  <v-container v-if="TVShowDetails && Object.keys(TVShowDetails).length > 0" class="white--text">
    <v-layout id="tvDetails" row wrap class="mb-5">
      <v-flex xs3>
        <v-img :src='appendUrl + TVShowDetails.poster_path'></v-img>
      </v-flex>
      <v-flex class='ml-5' xs7>
        <h1 class="mt-3 mb-3 display-2">{{TVShowDetails.name}} <span class="headline">({{new Date(TVShowDetails.first_air_date).getFullYear()}})</span></h1>
        <!-- <h3>{{new Date(TVShowDetails.release_date).toGMTString().split(" ").splice(0,4).join(" ")}}</h3> -->
        <!-- <v-progress-circular
          :rotate='-90'
          :size='70'
          :width='10'
          :value='TVShowDetails.vote_average * 10'
          :color='color(TVShowDetails.vote_average)'
        >
          {{ TVShowDetails.vote_average * 10 }}%
        </v-progress-circular> -->
        <v-menu light open-on-hover right offset-x>
          <v-progress-circular
            :rotate='-90'
            :size='70'
            slot="activator"
            :width='10'
            :value='TVShowDetails.vote_average * 10'
            :color='color(TVShowDetails.vote_average)'
          >
            {{ TVShowDetails.vote_average * 10 }}%
          </v-progress-circular>
          <v-card>
            <!-- <v-card-title class="headline"></v-card-title> -->
            <v-card-text>
              <p>
                Number of users who rated this show: {{TVShowDetails.vote_count}}
              </p>
              <p>
                Average rating: {{TVShowDetails.vote_average}}
              </p>
              <div>
                *Rating source is a community driven open source platform. <br>
                *You will be able to rate movies and add reviews on CineFlick in the next update.</div>
            </v-card-text>
          </v-card>
        </v-menu>
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
          <v-btn @click="eventBus.$emit('playTrailer', {videoid: TVShowDetails.videos.results[0].key, size: playerSize})" outline fab slot="activator" dark>
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
            <h2 class="subheading">{{TVShowDetails.number_of_episodes}}</h2>
            <h3 class="caption">Episode Count</h3>
          </v-flex>
          <v-flex class="mt-2" xs4>
            <h2 class="subheading">{{TVShowDetails.number_of_seasons}}</h2>
            <h3 class="caption">Total Seasons</h3>
          </v-flex>
          <v-flex class="mt-2" xs4 >
            <h2 class="subheading">{{TVShowDetails.first_air_date}}</h2>
            <h3 class="caption">First Air Date</h3>
          </v-flex>
          <v-flex v-if="TVShowDetails.last_episode_to_air" class="mt-2" xs4>
            <h2 class="subheading">{{TVShowDetails.last_episode_to_air.air_date}}</h2>
            <h3 class="caption">Last Episode Air Date</h3>
          </v-flex>
          <v-flex v-if="TVShowDetails.next_episode_to_air" class="mt-2" xs4>
            <h2 class="subheading">{{TVShowDetails.next_episode_to_air.air_date}}</h2>
            <h3 class="caption">Next Episode Air Date</h3>
          </v-flex>
          <!-- <h1 class="headline mt-2">Last Episode Air date: {{TVShowDetails.last_episode_to_air.air_date}}</h1>
          <h1 class="headline mt-2">Next Episode Air date: {{TVShowDetails.next_episode_to_air.air_date}}</h1> -->
        </v-layout>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>

    <v-layout mt-5 row wrap>
      <v-flex mt-3 xs12><div class="title">Cast Overview:</div></v-flex>
      <v-flex xs7>
        <v-layout row wrap>
          <!-- eslint-disable-next-line -->
          <v-flex d-flex xs3 v-for="(item, index1) in TVShowDetails.credits.cast.slice(0,8)" :key="index1 + 'b'" >
            <v-card v-if="showCast" class="mt-3 br20 ml-3">
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
          <v-flex v-if="!showCast" mt-5>
            <h1 class="headline font-weight-regular">Oops, No cast found for this show.</h1>
          </v-flex>
          <v-flex mr-2 xs12>
            <v-btn v-if="showCastButton" :color="darkMode ? '' : 'primary'" @click="redirectToCast" block round class="ml-3 mt-3">View Full Cast and Crew  <v-icon >keyboard_arrow_right</v-icon></v-btn>
          </v-flex>
        </v-layout>
      </v-flex>

      <v-flex mt-3 ml-3 xs4>
        <v-card class="br20">
          <v-card-title class="headline">Stats</v-card-title>
          <v-list two-line>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>Homepage</v-list-tile-title>
                <v-list-tile-sub-title><a target="_blank" :href="TVShowDetails.homepage">{{TVShowDetails.homepage}}</a></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>Status</v-list-tile-title>
                <v-list-tile-sub-title>{{TVShowDetails.in_production ? 'In Production' : 'Ended'}}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>First Air Date</v-list-tile-title>
                <v-list-tile-sub-title>{{TVShowDetails.first_air_date}}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>Runtime</v-list-tile-title>
                <v-list-tile-sub-title>{{toHoursMinutes(TVShowDetails.episode_run_time[0])}}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>Type</v-list-tile-title>
                <v-list-tile-sub-title>{{TVShowDetails.type}}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
          <v-card-text>
            <div class="title font-weight-regular">Networks:</div>
            <div >
              <v-layout row wrap>
                <v-flex ml-2 mt-1 v-for="(network, index2) in TVShowDetails.networks" :key="index2 + 'f'" xs4 d-flex align-center justify-center >
                  <v-img contain height="50px" :src="appendLogoUrl + network.logo_path"></v-img>
                </v-flex>
              </v-layout>
              <!-- <v-chip color="teal lighten-2" class="mt-3 ">
                {{network ? network.name : null}}
              </v-chip> -->
            </div>

            <div class="title font-weight-regular mt-2">Genre:</div>
            <v-chip color="teal lighten-2" class="mt-3 " v-for="(genre, index2) in TVShowDetails.genres" :key="index2 + 'c'">
              {{genre ? genre.name : null}}
            </v-chip>
            <div class="title font-weight-regular mt-3">Keywords:</div>
            <v-chip @click="searchKeyword(keyword)" color="teal lighten-2" class="mt-3 " v-for="(keyword, index3) in TVShowDetails.keywords.results" :key="index3 + 'd'">
              {{keyword ? keyword.name : null}}
            </v-chip>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout v-if="TVShowDetails.seasons.length > 0" justify-center align-center class="mt-5" row wrap>
     <v-flex xs12>
        <h1 class="mt-3 font-weight-light">Seasons:</h1>
     </v-flex>
      <v-flex xs12 >
        <SeasonsList :seasons="TVShowDetails.seasons" :appendUrl="appendProfileUrl"></SeasonsList>
        <!-- <items-list :showPagination="false" mode="season" type="TV" :itemList="TVShowDetails.seasons" ></items-list> -->
      </v-flex>
    </v-layout>

    <v-layout id="tvEnd" v-if="TVShowDetails.similar.results.length > 0" justify-center align-center class="mt-5" row wrap>
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
import SeasonsList from './SeasonsList'
export default {
  name: 'TVShowDetails',
  components: { ItemsList, SeasonsList },
  computed: {
    ...mapGetters({
      TVShowDetails: 'getTVShowDetails',
      TVWatchlist: 'getTVWatchlist',
      TVFavourites: 'getTVFavourites',
      watchlistTVObj: 'getWatchlistTVObj',
      favTVObj: 'getFavTVObj',
      darkMode: 'darkMode'
    }),
    playerSize () {
      return {
        width: window.outerWidth * 0.8,
        height: window.outerHeight * 0.6
      }
    },
    showCastButton () {
      let cast = this.TVShowDetails.credits.cast
      let crew = this.TVShowDetails.credits.crew
      if (cast.length > 0 || crew.length > 0) {
        return true
      }
      return false
    },
    showCast () {
      let cast = this.TVShowDetails.credits.cast
      if (cast.length > 0) {
        return true
      }
      return false
    }
  },
  data: () => ({
    appendUrl: 'https://image.tmdb.org/t/p/w342/',
    appendProfileUrl: 'https://image.tmdb.org/t/p/w185/',
    appendLogoUrl: 'https://image.tmdb.org/t/p/w92/',
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
    redirectToCast () {
      this.$store.commit('MUTATION_SET_CAST_AND_CREW', this.TVShowDetails.credits)
      this.$router.push({ name: 'CastAndCrew' })
    },
    async searchKeyword (keyword) {
      // this.isLoading[index] = true
      await this.$store.dispatch('ACTION_SEARCH_KEYWORD', { type: 'TV', id: keyword.id })
      // this.isLoading[index] = false
      // this.$emit('closeDialog')
      this.$router.push({ name: 'SearchResult', params: { type: 'keyword' } })
    },
    getSpokenLanguage () {
      let language = this.TVShowDetails.spoken_languages ? this.TVShowDetails.spoken_languages.find(item => item.iso_639_1 === this.TVShowDetails.original_language) : null
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
    // window.scroll(0, 0)
    // let p = `${window.innerHeight - document.getElementById('toolbar').offsetHeight}px`
    // let url = `https://image.tmdb.org/t/p/w1280/${this.TVShowDetails.backdrop_path}`
    // let el = document.getElementsByClassName('v-content__wrap')[0]
    // el.style['background-image'] = `url(${url})`
    // el.style['background-size'] = `100% ${p}`
    // el.style['box-shadow'] = `inset 0 ${p} 0 0 rgba(65, 63, 64, 0.9)`
    // // el.style['background-position'] = 'center center'
    console.log('YOOOO', document.getElementById('tvDetails'), document.getElementById('tvEnd'))
    let availableHeight = `${window.innerHeight - document.getElementById('toolbar').offsetHeight}`
    let docHeight = document.body.scrollHeight
    let marginBottom = availableHeight - document.getElementById('tvDetails').offsetHeight
    document.getElementById('tvEnd').style['marginTop'] = `${marginBottom}px`
    window.scroll(0, 0)

    let url = `https://image.tmdb.org/t/p/w1280/${this.TVShowDetails.backdrop_path}`
    let el = document.getElementsByClassName('v-content__wrap')[0]
    el.style['background-image'] = `url(${url})`
    el.style['background-size'] = `100% 100vh`
    el.style['box-shadow'] = `inset 0 ${docHeight + 1000}px 0 0 rgba(65, 63, 64, 0.9)`
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
