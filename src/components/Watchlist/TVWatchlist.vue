<template>

  <v-layout row wrap>
    <v-flex v-if="TVWatchlist && TVWatchlist.length > 0" >
      <h1 class="headline ml-5 font-weight-regular">Watchlist</h1>
      <items-list v-if="TVWatchlist && TVWatchlist.length > 0" type="TV" :showPagination="false" :itemList="TVWatchlist"></items-list>
    </v-flex>
    <v-flex v-else class="position-center">
      <h2 class="title ml-5 font-weight-light">Oops, Looks like you have not added any TV shows to your Watchlist yet.</h2>
    </v-flex>
  </v-layout>
</template>

<script>
import ItemsList from '@/components/Views/ItemsList'
import { mapGetters } from 'vuex'
export default {
  name: 'TVWatchlist',
  components: {
    ItemsList
  },
  computed: {
    ...mapGetters({
      TVWatchlist: 'getTVWatchlist'
    })
  }
}
</script>
