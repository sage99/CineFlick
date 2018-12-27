<template>
  <v-toolbar app fixed clipped-left>
    <v-toolbar-side-icon @click="$emit('toggleDrawer')"></v-toolbar-side-icon>
    <v-toolbar-title>CineFlick</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-icon>person</v-icon>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Toolbar'
}
</script>

<style>

</style>
