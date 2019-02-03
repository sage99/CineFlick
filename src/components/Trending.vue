<template>
  <v-list class="mt-2 br20">
    <v-card-title class="headline">Trending searches</v-card-title>
    <template v-for="(item, index) in trending" >
      <v-list-tile @click="search(item.name || item.original_title, index)" :key="index">
        <v-list-tile-avatar>
          <v-btn :loading="isLoading[index]" icon read-only><v-icon>search</v-icon></v-btn>
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>{{item.name || item.original_language === 'en' ? item.original_title || item.original_name : item.title}}</v-list-tile-title>
          <!-- <v-list-tile-sub-title>HEYEYYYY</v-list-tile-sub-title> -->
        </v-list-tile-content>
      </v-list-tile>
      <v-divider :key="index+'a'"></v-divider>
    </template>
  </v-list>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      isLoading: {}
    }
  },
  computed: {
    ...mapGetters({
      trending: 'getTrendingResult'
    })
  },
  methods: {
    createObj (length) {
      for (let index = 0; index < length; index++) {
        this.$set(this.isLoading, index, false)
      }
    },
    async search (text, index) {
      this.isLoading[index] = true
      await this.$store.dispatch('ACTION_SEARCH_CINEFLICK', { query: text })
      this.isLoading[index] = false
      this.$emit('closeDialog')
      this.$router.push({ name: 'SearchResult' })
    }
  },
  mounted () {
    this.createObj(20)
  }
}
</script>

<style>
/* .br20 {
  border-radius: 20px;
} */
</style>
