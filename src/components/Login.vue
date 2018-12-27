<template>
  <v-container fluid fill-height>
    <v-layout row wrap justify-center align-center>
      <v-flex text-xs-center ><h1>Hey there,</h1></v-flex>
      <v-flex :class="{'ml-5' : !isXS}" text-xs-center>
        <h1>Let's Log into CineFlick</h1>
        <p>A decentralized solution for your daily movie needs.</p>
        <!-- <v-img src="https://raw.githubusercontent.com/sage99/CineFlick/master/public/L3_t1.png"></v-img> -->
        <v-btn @click="signIn" block color="red darken-4" round>Sign in with blockstack</v-btn>
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
    isXS () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return true
        default: return false
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

<style>
</style>
