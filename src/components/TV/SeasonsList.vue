<template>
  <v-layout row wrap>
    <v-flex d-flex v-for="(item, index) in seasons" :key="index" xs2>
      <v-card v-if="item.episode_count" class="mt-3 br20 ml-3">
        <v-img
          :src="appendUrl + item.poster_path"
        ></v-img>
        <v-card-text class="text-xs-center" primary-title>
          <div>
            <div>{{item.name}} <span v-if="item.air_date">({{item.air_date.split('-')[0]}})</span></div>
            <div>Episode Count: {{item.episode_count}}</div>
            <!-- <div>Air Date: {{item.air_date}}</div> -->
          </div>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ['seasons', 'appendUrl'],
  data: () => ({
    yoo: ''
  }),
  methods: {
    y () {}
  }
}
</script>

<style>

</style>
