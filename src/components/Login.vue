<template>
  <v-container fluid fill-height>
    <v-layout row wrap justify-center align-center>
      <!-- <v-flex text-xs-center ><h1>Hey there,</h1></v-flex> -->
      <!-- <v-flex :class="{'ml-5' : !isXS}" text-xs-center> -->
      <v-flex text-xs-center>
        <img
          src="../assets/heroes.gif"
        >
        <div class="custom">
          <h1>CINEFLICK</h1>
        </div>
        <p>A decentralized platform to keep track of your favourite (and yet to be favourite) movies and tv shows.</p>
        <!-- <v-img src="https://raw.githubusercontent.com/sage99/CineFlick/master/public/L3_t1.png"></v-img> -->
        <!-- <v-btn @click="signIn" color="red darken-4" round>Sign in with something</v-btn> -->
        <v-btn @click="signIn" round>Sign in with blockstack <v-icon right>arrow_forward</v-icon></v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
  }),
  computed: {
    res () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 'xs'
        case 'sm': return 'sm'
        default: return 'md'
      }
    }
  },
  methods: {
    signIn () {
      const origin = window.location.origin
      this.blockstack.redirectToSignIn(origin, `${origin}/manifest.json`, ['store_write', 'publish_data'])
      // this.blockstack.redirectToSignIn()
    }
  }
}
</script>

<style lang="scss">
// .custom {
//   // body,html{height:100%;margin:0;padding:0;}
//     height:100%;margin:0;padding:0;
//     background:url('https://media.giphy.com/media/pjBLl26fGPCOqTBIvy/giphy.gif');
//   /*   background:url('https://media.giphy.com/media/l4FGmfnKZRGwtJ4v6/giphy.gif'); */
//     background-size:cover;
//     font-family: 'Play', sans-serif;
//     svg{width:100%;letter-spacing: 3px}
// }
</style>
