<template>
  <span>
    <HomeHero />
    <v-btn color="success" @click="showPosts('posts')">Get posts</v-btn>
    <ShowPosts />
  </span>
</template>

<script>
import HomeHero from '@/components/HomeHero'
import ShowPosts from '@/components/ShowPosts'

export default {
  name: "home",
  components: {
    HomeHero,
    ShowPosts
  },
  methods: {
    showPosts(type) {
      this.$store.dispatch('getPosts', type);
    }
  },
};
</script>
