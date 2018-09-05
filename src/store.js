import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuthorized: false,
    authModal: false,
  },
  mutations: {
    showAuthModal(state) {
      state.authModal = true;
    },
  },
  actions: {

  },
});
