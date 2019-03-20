import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import trading from './modules/trading';

import { DEAL_STATUS_CAPTION } from '@/modules/constants';

export default new Vuex.Store({
  state: {
    isAuthorized: !!localStorage.getItem('auth'),
    authModal: false,
    apiNodeModal: false,
    isConnecting: false,
    isLoading: false,

    usersPublicKey: (Math.random() * 1000).toString(),
    endedDealData: {},
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

    dealEndedNotify(state, deal) {
      if (deal.usersPublicKey === state.usersPublicKey) {
        state.endedDealData = deal;
        const isWinner = DEAL_STATUS_CAPTION.SUCCESS === deal.status;
        this._vm.$notify({
          title: isWinner ? 'The forecast came true' : 'The forecast did not come true',
          text: isWinner ? `You win ${deal.reward} GIC` : 'You win 0 GIC',
          type: isWinner ? 'success' : 'error',
        });
      }
    },
  },
  actions: {

  },
  modules: {
    trading,
  },
});
