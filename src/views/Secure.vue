<template>
  <v-container fluid>
    <v-layout column>
      <h1>Secure Page</h1>
      <v-card class="elevation-12">
        <v-toolbar dark color="primary">
          <v-toolbar-title>Data test Form</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field name="testData" label="Test Data" id="testData"
                            type="text" required v-model="testData" :rules="testDataRules">
            </v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" :disabled="!valid" @click="submit">Send data</v-btn>
        </v-card-actions>
      </v-card>

      <div v-for="(item, idx) in userData" class="subheading mb-3" :key="idx">
        {{item}}
      </div>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: 'Secure',
  data() {
    return {
      valid: false,
      testData: '',
      testDataRules: [
        v => !!v || 'Data is required',
        v =>
          v.length >= 3 ||
          'Data must be greater than 3 characters'
      ]
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        if (this.isAuthenticated) {
          this.$store.dispatch('addTestData', this.testData);
          this.testData = "Data sent!";
        } else {
          this.$router.push('/sign-in');
        }
      }
    },
    getRecipes() {
      this.$store.dispatch('getUserData');
    }
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
    userData() {
      return this.$store.state.userData;
    }
  },
  mounted() {
    this.getRecipes();
  },
};
</script>
<style scoped>
</style>