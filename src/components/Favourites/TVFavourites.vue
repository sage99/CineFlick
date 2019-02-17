<template>
  <v-layout row wrap>
    <v-flex v-if="TVFavourite && TVFavourite.length > 0">
      <h1 class="headline ml-5 font-weight-regular">Favourite TV Shows</h1>
      <items-list v-if="TVFavourite && TVFavourite.length > 0" type="TV" :showPagination="false" :itemList="TVFavourite"></items-list>
    </v-flex>
    <v-flex v-else class="position-center">
      <h2 class="title ml-5 font-weight-light">Oops, Looks like you have not added any favourite TV shows yet.</h2>
    </v-flex>
  </v-layout>
</template>

<script>
import ItemsList from '@/components/Views/ItemsList'
import { mapGetters } from 'vuex'
export default {
  name: 'TVFavourite',
  components: {
    ItemsList
  },
  computed: {
    ...mapGetters({
      TVFavourite: 'getTVFavourites'
    })
  }
}
</script>
