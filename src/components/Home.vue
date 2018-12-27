<template>
  <div>
    <h1 class="headline ml-5 font-weight-regular">Now Playing</h1>
    <items-list :itemList="inTheatresMovies"></items-list>
  </div>
</template>

<script>
import ItemsList from './ItemsList'
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  components: {
    ItemsList
  },
  computed: {
    ...mapGetters({
      inTheatresMovies: 'getInTheatreMovies'
    })
  }
}
</script>

<style lang="scss">

</style>
