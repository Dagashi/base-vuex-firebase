import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import firebase from "firebase";
import router from "@/router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    apiUrl: "https://jsonplaceholder.typicode.com",
    user: null,
    isAuthenticated: false,
    userData: []
  },
  mutations: {
    setPosts(state, payload) {
      state.posts = payload;
    },
    setUser(state, payload) {
      state.user = payload;
    },
    setIsAuthenticated(state, payload) {
      state.isAuthenticated = payload;
    },
    setUserData(state, payload) {
      state.userData = payload;
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
    },
    userRegister({ commit }, { email, password }) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          commit("setUser", user);
          commit("setIsAuthenticated", true);
          router.push("/secure");
        })
        .catch(() => {
          commit("setUser", null);
          commit("setIsAuthenticated", false);
          router.push("/");
        });
    },
    userLogin({ commit }, { email, password }) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
          commit("setUser", user);
          commit("setIsAuthenticated", true);
          router.push("/secure");
        })
        .catch(() => {
          commit("setUser", null);
          commit("setIsAuthenticated", false);
          router.push("/");
        });
    },
    userSignOut({ commit }) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          commit("setUser", null);
          commit("setIsAuthenticated", false);
          router.push("/");
        })
        .catch(() => {
          commit("setUser", null);
          commit("setIsAuthenticated", false);
          router.push("/");
        });
    },
    addTestData({ state }, payload) {
      firebase
        .database()
        .ref("testData")
        .child(state.user.user.uid)
        .push(payload);
    },
    getUserData({ state, commit }) {
      return firebase
        .database()
        .ref("testData/" + state.user.user.uid)
        .once("value", snapshot => {
          commit("setUserData", snapshot.val());
        });
    }
  },
  getters: {
    isAuthenticated(state) {
      return state.user !== null && state.user !== undefined;
    }
  }
});
