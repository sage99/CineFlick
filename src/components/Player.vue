<template>
  <div>
    <v-dialog max-width="960" v-model="playTrailer" class="align-center justify-content">
      <youtube class="pb-0" player-width="960" player-height="540" :player-vars="{autoplay: 1}" :video-id="videoid" @ready="ready" @playing="playing"></youtube>
    </v-dialog>
  </div>
</template>

<script>
import { eventBus } from '@/main'
export default {
  name: 'Player',
  data: () => ({
    playTrailer: false,
    videoid: ''
  }),
  watch: {
    playTrailer () {
      if (!this.playTrailer) {
        this.player.stopVideo()
      }
    }
  },
  mounted () {
    eventBus.$on('playTrailer', data => {
      this.playTrailer = true
      this.videoid = data.videoid
    })
  },
  destroyed () {
    eventBus.$off('playTrailer')
    this.player.stopVideo()
  },
  methods: {
    ready (event) {
      this.player = event.target
    },
    playing (event) {
    },
    change () {
      // when you change the value, the player will also change.
      // If you would like to change `playerVars`, please change it before you change `videoId`.
      // If `playerVars.autoplay` is 1, `loadVideoById` will be called.
      // If `playerVars.autoplay` is 0, `cueVideoById` will be called.
      this.videoId = 'another video id'
    },
    stop () {
      this.player.stopVideo()
    },
    pause () {
      this.player.pauseVideo()
    }
  }
}
</script>

<style>

</style>
