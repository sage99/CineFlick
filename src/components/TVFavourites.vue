<template>
  <div>
    <h1 v-if="TVFavourite && TVFavourite.length > 0" class="headline ml-5 font-weight-regular">Favourite Movies</h1>
    <h2 v-else class="title ml-5 font-weight-light">Oops, Looks like you have not added any favourite TV shows yet.</h2>
    <items-list v-if="TVFavourite && TVFavourite.length > 0" type="TV" :showPagination="false" :itemList="TVFavourite"></items-list>
  </div>
</template>

<script>
import ItemsList from './ItemsList'
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
