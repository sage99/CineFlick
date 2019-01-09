<template>
  <v-dialog :max-width="width" v-model="playTrailer">
    <v-btn class="cl" fab top right light small @click="close" ><v-icon>close</v-icon></v-btn>
    <div class="video_wrapper">
      <youtube  :player-width="size.width" :player-height="size.height" :player-vars="{autoplay: 1}" :video-id="videoid" @ready="ready" @playing="playing"></youtube>
    </div>
  </v-dialog>
</template>

<script>
import { eventBus } from '@/main'
export default {
  name: 'Player',
  data: () => ({
    playTrailer: false,
    videoid: '',
    size: {}
  }),
  computed: {
    width () {
      return window.outerWidth * 0.74
    }
  },
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
      this.size = data.size
      this.videoid = data.videoid
    })
  },
  destroyed () {
    eventBus.$off('playTrailer')
    this.player.stopVideo()
  },
  methods: {
    close () {
      this.stop()
      this.playTrailer = !this.playTrailer
    },
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

<style lang="scss" scoped>
.cl {
  position: absolute;
  right: 14%;
  z-index: 999;
}

.video_wrapper {
  position: absolute;
  top: 3em;
}
</style>
