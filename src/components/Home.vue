<template>
  <div>
    <h1 class="headline ml-5 font-weight-regular">{{movies.title}}</h1>
    <items-list :itemList="movies.data"></items-list>
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
      movies: 'getMovieList'
    })
  },
  data: () => ({
    title: 'In Theatres'
  })
}
</script>

<style lang="scss">

</style>
