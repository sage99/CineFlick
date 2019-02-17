<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog1" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card class="transparent-background" max-width="800px">
        <v-toolbar fixed :color=" darkMode ? 'grey darken-3' : 'primary'" dark >
          <v-layout row >
            <v-flex xs12 sm9>
              <v-layout row align-center>
                <v-flex align-center xs2>
                  <v-btn icon dark @click="dialog1 = false">
                    <v-icon>close</v-icon>
                  </v-btn>
                </v-flex>
                <v-flex align-end xs10 sm9>
                  <v-text-field
                    @input="search"
                    color="white"
                    :autofocus="true"
                    :label="label"
                    v-model="searchText"
                    :disabled="!searchType"
                  ></v-text-field>

                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex ml-2 xs2>
              <v-select
                class="zindex500"
                label="Search Type"
                color="white"
                :items="searchTypes"
                v-model="searchType"
              ></v-select>
            </v-flex>
          </v-layout>
        </v-toolbar>
        <v-layout mt-5 class="items-center br20" row wrap>
          <v-flex xs12 sm10 md9>
            <v-card-text>
              <!-- <v-progress-circular
                :size="70"
                :width="7"
                color="purple"
                indeterminate
              ></v-progress-circular> -->
              <Trending @closeDialog="dialog1 = false" v-if="!searchText"></Trending>
              <Results @closeDialog="dialog1 = false" v-else :searchResults="searchResult"></Results>
            </v-card-text>
          </v-flex>
        </v-layout>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'
import Trending from './Trending'
import Results from './Results'
export default {
  components: {
    Trending,
    Results
  },
  data () {
    return {
      dialog1: false,
      notifications: false,
      sound: true,
      widgets: false,
      searchTypes: [
        { text: 'Cineflick Data', value: 'cineflick' },
        { text: 'Blockstack Users', value: null }
      ],
      searchType: 'cineflick',
      searchText: '',
      timer: null
    }
  },
  props: ['dialog'],
  computed: {
    ...mapGetters({
      trending: 'getTrendingResult',
      searchResult: 'getSearchResult',
      darkMode: 'darkMode'
    }),
    label () {
      return this.searchType === 'cineflick' ? 'Search for a movie, tv show...'
        : 'Search for people on Blockstack (coming in next update)'
    }
  },
  watch: {
    dialog1 () {
      if (this.dialog1 === false) {
        this.$emit('updateDialog')
        this.searchText = ''
        window.scroll(0, 0)
        this.$store.commit('MUTATION_SET_SEARCH_RESULT', { results: [] })
      }
    },
    dialog () {
      window.scroll(0, 0)
      this.dialog1 = this.dialog
    },
    searchText () {
      if (!this.searchText) {
        this.$store.commit('MUTATION_SET_SEARCH_RESULT', { results: [] })
      }
    }
  },
  methods: {
    search () {
      this.delayFunction(this.activateSearch, 800)(this.searchText)
    },
    delayFunction (func, delay) {
      return (args) => {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => func.call(this, args), delay)
      }
    },
    activateSearch (text) {
      if (text) {
        this.$store.dispatch('ACTION_SEARCH_CINEFLICK', { query: text })
      }
    }
  },
  mounted () {
    this.$store.dispatch('ACTION_GET_TRENDING')
  }
}
</script>

<style lang="scss" scoped>
.transparent-background{
  background-color: rgba(66, 66, 66, 0.9)
}
.items-center {
  display: flex;
  justify-content: center;
  align-items: center
}
.zindex500 {
  z-index: 500;
}
</style>
