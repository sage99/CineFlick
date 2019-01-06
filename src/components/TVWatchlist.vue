<template>
  <div>
    <h1 v-if="TVWatchlist && TVWatchlist.length > 0" class="headline ml-5 font-weight-regular">Watchlist</h1>
    <h2 v-else class="title ml-5 font-weight-light">Oops, Looks like you have not added any TV shows to your Watchlist yet.</h2>
    <items-list v-if="TVWatchlist && TVWatchlist.length > 0" type="TV" :showPagination="false" :itemList="TVWatchlist"></items-list>
  </div>
</template>

<script>
import ItemsList from './ItemsList'
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
