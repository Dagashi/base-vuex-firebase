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
            <v-btn to="/secure" flat class="hidden-sm-and-down">Secure</v-btn>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <div v-if="!isAuthenticated" class="hidden-sm-and-down">
              <v-btn flat to="/sign-in">SIGN IN</v-btn>
              <v-btn color="brown lighten-3" to="/register">Register</v-btn>
            </div>
            <v-btn v-else outline color="white" @click="logout">Logout</v-btn>
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
        { title: 'Secure' },
        { title: 'Sign In' },
        { title: 'Register' },
      ]
    }
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('userSignOut');
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