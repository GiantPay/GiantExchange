<template>
  <div class="block-grid">
    <div class="block-left">
      <ControlDashboard></ControlDashboard>
      <MyTrading
        :user="user"
        v-on:changeItem="changeItem"
      ></MyTrading>
      <MyOracles
        :user="user"
      ></MyOracles>
      <MyBrokers
        :user="user"
      ></MyBrokers>
    </div>
    <div class="block-center">
      <DataSection
        :user="user"
        :currentProfit="setCurrentProfit"
      ></DataSection>
    </div>
    <div class="block-right">
      <DealsBrokerDashboard v-if="false"></DealsBrokerDashboard>
      <DealsTraderDashboard v-if="false"></DealsTraderDashboard>
      <DealsOracleDashboard></DealsOracleDashboard>
    </div>
  </div>
</template>

<script>
  let user = {
    wallet: 'GagC6C3PAqdPw9TjGas6C3PAqdPw9TjGas6C3PAqdPw9TjGas1',
    balance: '25566.45877',
    allProfit: 5600,
    myTrading: {
      traderBroker: 1250,
      traderTrader: -350
    },
    myOracles: [
      { BitMEX: 235 },
      { Binance: 155 },
      { Huobi: 335 }
    ],
    myBrokers: [
      { BitMEX: 535 },
      { Binance: 655 },
      { Huobi: 335 }
    ]
  };

import ControlDashboard from "../components/ui-components/Dashboard/ControlDashboard.vue";
import MyTrading from "../components/ui-components/Dashboard/MyTrading.vue";
import MyOracles from "../components/ui-components/Dashboard/MyOracles.vue";
import MyBrokers from "../components/ui-components/Dashboard/MyBrokers.vue";
import DataSection from "../components/ui-components/Blocks/DataSection.vue";
import DealsBrokerDashboard from "../components/ui-components/Dashboard/DealsBrokerDashboard.vue";
import DealsOracleDashboard from "../components/ui-components/Dashboard/DealsOracleDashboard.vue";
import DealsTraderDashboard from "../components/ui-components/Dashboard/DealsTraderDashboard.vue";

export default {
  name: "Dashboard",
  components: {
    ControlDashboard,
    MyTrading,
    MyOracles,
    MyBrokers,
    DataSection,
    DealsBrokerDashboard,
    DealsOracleDashboard,
    DealsTraderDashboard
  },
  data() {
    return {
      user: user,
      currentProfit: user.myTrading.traderBroker,
    };
  },
  computed: {
    setCurrentProfit: {
      get: function () {
        return this.currentProfit;
      },
      set: function (profit) {
        this.currentProfit = profit;
      }
    },
    
  },
  methods: {
    changeItem (param) {
      this.setCurrentProfit = param;
    }
  }
};
</script>

<style scoped>
.block-grid {
  width: 100%;
  display: grid;
  grid-gap: 30px;
  grid-template-rows: 100%;
  grid-template-columns: 32% 32% 32%;
  grid-template-areas: "left center right";
}
.block-left {
  grid-area: left;
  max-width: 100%;
  background-color: #f7f7f7;
  border-radius: 5px;
}
.block-center {
  grid-area: center;
  max-width: 100%;
  background-color: #ffffff;
  border-radius: 5px;
}
.block-right {
  grid-area: right;
  max-width: 100%;
  background-color: #ffffff;
  border-radius: 5px;
}
</style>
