import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    apiUrl: "https://jsonplaceholder.typicode.com"
  },
  mutations: {
    setPosts(state, payload) {
      state.posts = payload;
    }
  },
  actions: {
    async getPosts({ state, commit }, type) {
      try {
        let response = await axios.get(`${state.apiUrl}/${type}`);
        commit("setPosts", response.data);
      } catch (error) {
        commit("setPosts", []);
      }
    }
  }
});
