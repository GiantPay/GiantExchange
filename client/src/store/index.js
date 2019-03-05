import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import trading from './modules/trading';

export default new Vuex.Store({
  state: {
    isAuthorized: !!localStorage.getItem('auth'),
    authModal: false,
    apiNodeModal: false,
    isConnecting: false,
    isLoading: false,
  },
  mutations: {
    authorization(state) {
      state.isAuthorized = true;
    },
    deauthorization(state) {
      state.isAuthorized = false;
      localStorage.removeItem('auth');
    },
    toggleAuthModal(state) {
      state.authModal = !state.authModal;
    },
    toggleApiNodeModal(state) {
      state.apiNodeModal = !state.apiNodeModal;
    },
    connectingToNode(state) {
      state.isConnecting = true;
    },
    connectedToNode(state) {
      state.isConnecting = false;
    },
    showPreload(state) {
      state.isLoading = true;
    },
    hidePreload(state) {
      state.isLoading = false;
    },
  },
  actions: {

  },
  modules: {
    trading,
  },
});
