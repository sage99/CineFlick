<template>
  <v-toolbar app fixed clipped-left>
    <v-toolbar-side-icon @click="$emit('toggleDrawer')"></v-toolbar-side-icon>
    <v-toolbar-title>CineFlick</v-toolbar-title>
    <v-spacer></v-spacer>
    <avatar-menu></avatar-menu>
  </v-toolbar>
</template>

<script>
import AvatarMenu from '@/components/AvatarMenu'
export default {
  name: 'Toolbar',
  components: {
    AvatarMenu
  },
  data: () => ({
    items: [
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me 2' }
    ]
  })
}
</script>

<style>

</style>
