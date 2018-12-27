<template>
  <v-container fluid fill-height>
    <v-layout justify-center align-centerp>
      <v-flex shrink>
        Welcome to 
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
  }),
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
