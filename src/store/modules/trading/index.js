import GiantOracle from '@/modules/giant-oracle/mocks';

const trading = {
  namespaced: true,
  state: {
    currentBroker: {},
  },
  mutations: {
    getCurrentBroker(state, currentBroker) {
      state.currentBroker = currentBroker;
    },
  },
  actions: {
    async getCurrentBroker({ commit }, brokerDealScheme) {
      commit('getCurrentBroker', await GiantOracle.getCurrentBroker(brokerDealScheme));
    },
  },
};

export default trading;
