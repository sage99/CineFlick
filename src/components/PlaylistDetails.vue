<template>
  <div>
    <h2 class="headline text-xs-center">{{playlistDetails.name}}</h2>
    <span v-if="playlistDetails.movies.length > 0" class="headline">Movies</span>
    <items-list v-if="playlistDetails.movies.length > 0" :showPagination="false" :itemList="playlistDetails.movies"></items-list>
    <h2 v-if="playlistDetails.tv.length > 0" class="headline">TV Shows</h2>
    <items-list v-if="playlistDetails.tv.length > 0" type="TV" :showPagination="false" :itemList="playlistDetails.tv"></items-list>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ItemsList from './ItemsList'
export default {
  data: () => ({
  }),
  components: {
    ItemsList
  },
  computed: {
    ...mapGetters({
      playlistDetails: 'getPlaylistDetails'
    })
  }
}
</script>

<style>

</style>
