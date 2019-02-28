<template>
  <v-app>
    <AppNav />
    <v-content transition="slide-x-transition">
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import AppNav from './components/AppNav.vue';

export default {
  name: "App",
  components: {
    AppNav,
  }
};
</script>

<style>
</style>
