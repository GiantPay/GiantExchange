import GiantOracle from "@/modules/giant-oracle/mocks";

const trading = {
  namespaced: true,
  state: {
    currentBroker: {
      id: "broker_id",
      dealScheme: 0,
      caption: "MyBroker 1",
      awardMultiplier: 1.8,
      rateInterval: {
        minRate: 100,
        maxRate: 1000
      },
      volume: 1258,
      info: "B-T 80%/80%",
      dealIntervalInMinutes: 1,
      intervalCount: 3,
      buyDealEnd: 30 * 1000,
      timeSteps: 5
    }
  },
  mutations: {
    getCurrentBroker(state, currentBroker) {
      state.currentBroker = currentBroker;
    }
  },
  actions: {
    async getCurrentBroker({ commit }, brokerDealScheme) {
      commit(
        "getCurrentBroker",
        await GiantOracle.getCurrentBroker(brokerDealScheme)
      );
    }
  }
};

export default trading;
