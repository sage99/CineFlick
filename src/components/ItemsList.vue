<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6  v-for="(item, index) in itemList" :key="index">
        <v-card class="ml-3 mt-2 br20" :hover="true">
          <v-layout row>
            <v-flex xs12 sm5>
              <v-img
              :src="appendedUrl + item.poster_path"
              contain
              ></v-img>
            </v-flex>
            <v-flex ml-3 mt-2 xs12 sm7 >
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
                <v-flex ml-2 sm9 xs12>
                  <div class="title font-weight-regular">{{item.original_title}}</div>
                  <div class="font-weight-light">{{new Date(item.release_date).toGMTString().split(" ").splice(0,4).join(" ")}}</div>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex >
                  <div>
                    <span><v-subheader class="pl-0" >Overview:</v-subheader></span>{{text_truncate(item.overview)}}
                  </div>
                </v-flex>
              </v-layout>
              <v-layout mt-5 mr-2>
                <v-flex>
                  <v-btn :color="darkMode ? '' : 'primary'"  @click="getDetails(item, index)" :loading="isLoading[index]" round block>more info <v-icon >keyboard_arrow_right</v-icon></v-btn>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex xs12 sm4></v-flex>
      <!-- <v-divider ></v-divider> -->
      <v-flex xs12 sm4>
        <v-pagination
        v-if="showPagination"
        total-visible="6"
        :length="$route.params.type === 'in-theatre' ? 5 : totalPages"
        v-model="page"
        @input="getMoreMovies"
      ></v-pagination>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ItemsList',
  props: ['itemList', 'showPagination', 'pageNumber', 'totalPages'],
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
    async getDetails (movie, index) {
      this.isLoading[index] = true
      await this.$store.dispatch('ACTION_GET_MOVIE_DETAILS', movie)
      this.isLoading[index] = false
      this.$router.push({ name: 'MovieDetails', params: { id: movie.id } })
    },
    getMoreMovies () {
      if (this.$route.params.type === 'top-rated') {
        this.$store.dispatch('ACTION_GET_TOP_RATED_MOVIES', { page: this.page })
      } else if (this.$route.params.type === 'popular') {
        this.$store.dispatch('ACTION_GET_POPULAR_MOVIES', { page: this.page })
      } else {
        this.$store.dispatch('ACTION_GET_IN_THEATRE_MOVIES', { page: this.page })
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
</style>
