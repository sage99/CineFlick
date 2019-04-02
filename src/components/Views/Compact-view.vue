<template>
  <v-container>
    <v-layout row wrap>
      <!-- <AddToPlaylist></AddToPlaylist> -->
      <v-flex d-flex xs12 sm4 xl3  v-for="(item, index) in itemList" :key="index">
        <v-card @click="type === 'TV' ? getTVShowDetails(item, index) :getMovieDetails(item, index)" class="ml-3 mr-3 mt-2 br20" hover>
          <v-img
            d-flex
            :src="appendedUrl + item.poster_path"
            contain
          >
            <div class="image-text-box">
              <div class="title font-weight-regular image-text-area pt-3 pb-2 pl-2 pr-2 white--text">
                {{type === 'TV' ? item.name : item.title}}
                <span :color="color(item.vote_average)">
                  <v-icon class="mt-0" :color="color(item.vote_average)">trending_up</v-icon>
                  <span class="ml-2 mb-2" >{{ (item.vote_average ? (item.vote_average) : 'NR') }}</span>
                </span>
              </div>
            </div>
          </v-img>
          <!-- <v-card-text>
            <span class="title font-weight-regular">{{type === 'TV' ? item.name : item.title}}</span>
            <span :color="color(item.vote_average)">
              <v-icon class="mt-0" :color="color(item.vote_average)">trending_up</v-icon>
              <span class="ml-2 mb-2" >{{ (item.vote_average ? (item.vote_average) : 'NR') }}</span>
            </span>
          </v-card-text> -->
          <!-- <v-card-actions class="flex-button-align-end">

            <v-spacer></v-spacer>
            <v-btn :color="darkMode ? '' : 'primary'" small round >
              <v-icon>keyboard_arrow_right</v-icon>
            </v-btn>
          </v-card-actions> -->
            <!-- <v-layout row>
              <v-flex xs12 sm5>
              </v-flex>
              <v-flex class="flex-card-content" ml-3 mt-2 xs12 sm7>
                <v-layout row align-center justify-center mb-4>
                  <v-flex v-if="!mode" xs12 sm3>
                    <v-progress-circular
                      :rotate="-90"
                      :size="70"
                      :width="10"
                      :value="item.vote_average * 10"
                      :color="color(item.vote_average)"
                    >
                      {{ (item.vote_average ? (item.vote_average * 10) + '%' : 'NR') }}
                    </v-progress-circular>

                  </v-flex>
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
            </v-layout> -->
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout mt-2>
      <v-flex class="pagination-center">
        <v-pagination
        v-if="showPagination"
        total-visible="6"
        :length="$route.params.type === 'in-theatre' ? 5 : totalPages"
        v-model="page"
        @input="type === 'TV' ? getMoreTVShows() : getMoreMovies()"
      ></v-pagination>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ItemsList',
  props: ['itemList', 'showPagination', 'pageNumber', 'totalPages', 'type', 'mode'],
  computed: {
    ...mapGetters({
      darkMode: 'darkMode'
    })
  },
  data: () => ({
    appendedUrl: 'https://image.tmdb.org/t/p/w342',
    isLoading: {},
    page: 1
  }),
  watch: {
    pageNumber () {
      this.page = this.pageNumber
    }
  },
  methods: {
    color (score) {
      if (score === 0) return 'info'
      let finalScore = score * 10
      if (finalScore >= 70) return 'success'
      else if (finalScore > 30 && finalScore < 70) return 'lime accent-2'
      else return 'red'
    },
    createobj (length) {
      for (let i = 0; i < length; i++) {
        this.$set(this.isLoading, i, false)
      }
    },
    text_truncate (str, length, ending) {
      if (length == null) {
        length = 160
      }
      if (ending == null) {
        ending = '...'
      }
      if (str.length > length) {
        return str.substring(0, length - ending.length) + ending
      } else {
        return str
      }
    },
    async getMovieDetails (movie, index) {
      this.isLoading[index] = true
      await this.$store.dispatch('ACTION_GET_MOVIE_DETAILS', movie)
      this.isLoading[index] = false
      this.$router.push({ name: 'MovieDetails', params: { id: movie.id } })
    },
    async getTVShowDetails (TVshow, index) {
      this.isLoading[index] = true
      await this.$store.dispatch('ACTION_GET_TV_SHOW_DETAILS', TVshow)
      this.isLoading[index] = false
      this.$router.push({ name: 'TVShowDetails', params: { id: TVshow.id } })
    },
    getMoreMovies () {
      if (this.$route.params.type === 'top-rated') {
        this.$store.dispatch('ACTION_GET_TOP_RATED_MOVIES', { page: this.page })
      } else if (this.$route.params.type === 'popular') {
        this.$store.dispatch('ACTION_GET_POPULAR_MOVIES', { page: this.page })
      } else {
        this.$store.dispatch('ACTION_GET_IN_THEATRE_MOVIES', { page: this.page })
      }
    },
    getMoreTVShows () {
      if (this.$route.params.type === 'top-rated') {
        this.$store.dispatch('ACTION_GET_TOP_RATED_TVSHOWS', { page: this.page })
      } else if (this.$route.params.type === 'popular') {
        this.$store.dispatch('ACTION_GET_POPULAR_TVSHOWS', { page: this.page })
      } else if (this.$route.params && this.$route.params.type === 'on-the-air') {
        this.$store.dispatch('ACTION_GET_ON_AIR_TVSHOWS', { page: this.page })
      } else {
        this.$store.dispatch('ACTION_GET_AIRING_TODAY_TVSHOWS', { page: this.page })
      }
    }
  },
  mounted () {
    this.page = this.pageNumber
    this.createobj(this.itemList.length)
  }
}
</script>

<style>
.br20 {
  border-radius: 20px
}
.v-content__wrap {
  /* background-image: url('https://image.tmdb.org/t/p/w780/5A2bMlLfJrAfX9bqAibOL2gCruF.jpg'); */
   /* background-image: url('../assets/images/background.jpg'); */
   /* background-size: cover; */
   /* background-repeat: repeat-y;
   background-position: center center;
   background-size:100% 100vh; */
   /* box-shadow:inset 0 0 0 2000px rgba(0, 70, 139, 0.6); */
   /* box-shadow:inset 0 0 0 2000px rgba(35, 38, 41, 0.6); */
}
/* .transparent {
   background-color: rgba(255, 255, 255, 0.185)!important;
   opacity: 0.9;
   border-color: transparent!important;
 } */
 /* h1 {
  background: -webkit-linear-gradient(#59C173,#a17fe0, #5D26C1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
} */
.image-text-box {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
}
.image-text-area {
  background: black;
  opacity: 0.8;
  display: flex;
  justify-content: space-around
}
.flex-card-content {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.flex-button-align-end {
  align-items: flex-end
}
.pagination-center {
  display: flex;
  justify-content: center;
}
</style>
