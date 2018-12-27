<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6  v-for="(item, index) in itemList" :key="index">
        <v-card dark class="white--text ml-3 mt-2" >
          <v-layout row>
            <v-flex xs12 sm5>
              <v-img
              :src="appendedUrl + item.poster_path"
              contain
              ></v-img>
            </v-flex>
            <v-flex ml-3 mt-2 xs12 sm7>
              <v-layout row align-center justify-center mb-4>
                <v-flex xs12 sm3>
                  <v-progress-circular
                    :rotate="-90"
                    :size="70"
                    :width="10"
                    :value="80"
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
                  <v-btn round block>more info <v-icon >keyboard_arrow_right</v-icon></v-btn>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'ItemsList',
  props: ['itemList'],
  data: () => ({
    appendedUrl: 'https://image.tmdb.org/t/p/w342'
  }),
  methods: {
    color (score) {
      let finalScore = score * 10
      if (finalScore >= 70) return 'success'
      else if (finalScore > 30 && finalScore < 70) return 'lime accent-2'
      else return 'red'
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
    }
  },
  mounted () {
    console.log(document.getElementsByClassName('v-content__wrap'))
    // .style.backgroundImage = 'https://www.themoviedb.org/assets/1/v4/marketing/deadpool-06f2a06d7a418ec887300397b6861383bf1e3b72f604ddd5f75bce170e81dce9.png'
  }
}
</script>

<style>
/* .v-content__wrap {
  background-image: url('https://image.tmdb.org/t/p/original/5A2bMlLfJrAfX9bqAibOL2gCruF.jpg');
   background-image: url('../assets/images/background.jpg');
   background-size: cover;
   background-repeat:   no-repeat;
   background-position: center center;
   background-size:100% 100vh;
   box-shadow:inset 0 0 0 2000px rgba(145, 27, 86, 0.1);
} */
</style>
