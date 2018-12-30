<template>
  <div>
    <v-dialog v-model="player">
      <v-card>
        YOOOOOOOOOOOOOOOO
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'Player',
  props: ['playTrailer'],
  data: () => ({
    player: false
  }),
  watch: {
    playTrailer () {
      this.player = this.playTrailer
    }
  },
  methods: {
    close () {
      this.player = false
    }
  }
}
</script>

<style>

</style>
