import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuthorized: !!localStorage.getItem('auth'),
    authModal: false,
    apiNodeModal: false,
    isConnecting: false,
  },
  mutations: {
    authorization(state) {
      state.isAuthorized = true;
    },
    deauthorization(state) {
      state.isAuthorized = false;
    },
    toggleAuthModal(state) {
      state.authModal = !state.authModal;
    },
    toggleApiNodeModal(state) {
      state.apiNodeModal = !state.apiNodeModal;
    },
    connectingToNode(state) {
      state.isConnecting = !state.isConnecting;
    },
  },
  actions: {

  },
});
