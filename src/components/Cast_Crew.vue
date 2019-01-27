<template>
  <v-layout row wrap>
    <v-flex xs12> <h1 class="headline">Cast:</h1></v-flex>
    <v-flex d-flex v-for="(item, index) in castAndCrew.cast" :key="index + 'a'" xs2>
      <v-card class="mt-3 br20 ml-3">
        <v-img
          v-if="item.profile_path"
          :src="profilePrefixUrl + item.profile_path"
        ></v-img>
        <v-img
          v-else
          src="https://www.freeiconspng.com/uploads/no-image-icon-6.png"
        ></v-img>
        <v-card-text class="text-xs-center" primary-title>
          <div>
            <div>{{item.name}}</div>
            <div>as</div>
            <div>{{item.character}}</div>
          </div>
        </v-card-text>
      </v-card>
    </v-flex>

    <v-flex mt-5 xs12><h1 class="headline">Crew:</h1></v-flex>
    <v-flex d-flex v-for="(item, index) in castAndCrew.crew" :key="index + 'b'" xs2>
      <v-card class="mt-3 br20 ml-3">
        <v-img
          v-if="item.profile_path"
          :src="profilePrefixUrl + item.profile_path"
        ></v-img>
        <v-img
          v-else
          src="https://www.freeiconspng.com/uploads/no-image-icon-6.png"
        ></v-img>
        <v-card-text class="text-xs-center" primary-title>
          <div>
            <div>{{item.name}} ({{item.department}})</div>
            <div>{{item.job}}</div>
          </div>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Cast-and-Crew',
  props: ['cast', 'crew'],
  computed: {
    ...mapGetters({
      castAndCrew: 'getCastAndCrew',
      profilePrefixUrl: 'getProfilePrefixUrl'
    })
  },
  mounted () {
    window.scroll(0, 0)
  },
  destroyed () {
    this.$store.commit('MUTATION_SET_CAST_AND_CREW', {})
  }
}
</script>

<style>

</style>
