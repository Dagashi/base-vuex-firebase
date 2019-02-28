<template>
  <v-container grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12 sm6 md6 lg4 v-for="(item, index) in posts" :key="index">
        <v-card>
          <v-card-text>
            {{ item.title }}
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "ShowPosts",
  computed: {
    posts() {
      return this.$store.state.posts;
    }
  },
}
</script>

<style>

</style>
