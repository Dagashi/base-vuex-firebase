<template>
    <span>
        <v-navigation-drawer app v-model="drawer" class="blue-grey lighten-2" dark disable-resize-watcher>
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-tile :key="index">
                        <v-list-tile-content>
                            {{item.title}}
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app color="blue-grey darken-4" dark>
            <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <router-link to="/">
              <v-toolbar-title to="/">{{appTitle}}</v-toolbar-title>
            </router-link>
            <v-btn to="/about" flat class="hidden-sm-and-down">About</v-btn>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <v-btn to="/sign-in" flat class="hidden-sm-and-down">SIGN IN</v-btn>
            <v-btn to="/register" color="blue-grey lighten-3" class="hidden-sm-and-down">REGISTER</v-btn>
        </v-toolbar>
    </span>
</template>

<script>
export default {
  name: "AppNav",
  data() {
    return {
      appTitle: 'VueX Firebase Base',
      drawer: false,
      items: [
        { title: 'About' },
        { title: 'Sign In' },
        { title: 'Register' },
      ]
    }
  }
};
</script>

<style scoped>
  a {
    color: white;
    text-decoration: none;
  }
</style>