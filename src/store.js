import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuthorized: false,
    authModal: false,
    apiNodeModal: false,
  },
  mutations: {
    toggleAuthModal(state) {
      state.authModal = !state.authModal;
    },
    toggleApiNodeModal(state) {
      state.apiNodeModal = !state.apiNodeModal;
    },
  },
  actions: {

  },
});
