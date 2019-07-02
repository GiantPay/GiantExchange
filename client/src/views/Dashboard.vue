<template>
  <div class="block-grid">
    <div class="block-left">
      <ControlDashboard></ControlDashboard>
      <MyTrading
        :myTrading="myTrading"
        :activeItem="setItemActive"
        v-on:changeItem="changeItem"
      ></MyTrading>
      <MyOracles
        :myOracles="myOracles"
        :activeItem="setItemActive"
        v-on:changeItem="changeItem"
      ></MyOracles>
      <MyBrokers
        :myBrokers="myBrokers"
        :activeItem="setItemActive"
        v-on:changeItem="changeItem"
      ></MyBrokers>
    </div>
    <div class="block-center">
      <DataSection :user="user" :currentItem="setCurrentItem"></DataSection>
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
  wallet: "GagC6C3PAqdPw9TjGas6C3PAqdPw9TjGas6C3PAqdPw9TjGas1",
  balance: "25566.45877",
  myTrading: [
    {
      id: "0000001",
      group: "TRADING",
      title: "Trader / Broker",
      value: 1250,
      deals: 5,
      winDeals: 3,
      loseDeals: 2,
      betVolume: 2000,
      betWin: 1500,
      betLose: 500
    },
    {
      id: "0000002",
      group: "TRADING",
      title: "Trader / Trader",
      value: -350,
      deals: 3,
      winDeals: 1,
      loseDeals: 2,
      betVolume: 650,
      betWin: 300,
      betLose: 350
    }
  ],
  myOracles: [
    {
      id: "0000003",
      group: "ORACLE",
      title: "BitMEX",
      value: 235,
      asset: "BTC / UCD",
      rating: 8,
      fee: 0.25,
      items: {
        title: "Brokers",
        value: 3
      },
      deals: 3,
      volume: 5300,
      AVGfee: 2.3,
      AVGdealTime: 135
    },
    {
      id: "0000004",
      group: "ORACLE",
      title: "Binance",
      value: -155,
      asset: "BTC / UCD",
      rating: 2,
      fee: 0.25,
      items: {
        title: "Brokers",
        value: 3
      },
      deals: 3,
      volume: 1300,
      AVGfee: 2.3,
      AVGdealTime: 435
    },
    {
      id: "0000005",
      group: "ORACLE",
      title: "Huobi",
      value: 135,
      asset: "BTC / UCD",
      rating: 5,
      fee: 0.25,
      items: {
        title: "Brokers",
        value: 3
      },
      deals: 3,
      volume: 2300,
      AVGfee: 2.3,
      AVGdealTime: 335
    }
  ],
  myBrokers: [
    {
      id: "0000006",
      group: "BROKER",
      title: "BitMEX",
      value: 335,
      asset: "BTC / UCD",
      rating: 4,
      fee: 0.25,
      items: {
        title: "Traders",
        value: 3
      },
      deals: 3,
      volume: 7300,
      AVGfee: 2.3,
      AVGdealTime: 535
    },
    {
      id: "0000007",
      group: "BROKER",
      title: "Binance",
      value: -55,
      asset: "BTC / UCD",
      rating: 3,
      fee: 0.25,
      items: {
        title: "Traders",
        value: 3
      },
      deals: 3,
      volume: 3700,
      AVGfee: 2.3,
      AVGdealTime: 635
    },
    {
      id: "0000008",
      group: "BROKER",
      title: "Huobi",
      value: 435,
      asset: "BTC / UCD",
      rating: 9,
      fee: 0.25,
      items: {
        title: "Traders",
        value: 3
      },
      deals: 3,
      volume: 5300,
      AVGfee: 2.3,
      AVGdealTime: 235
    }
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
      currentItem: user.myTrading[0],
      myTrading: user.myTrading,
      myOracles: user.myOracles,
      myBrokers: user.myBrokers,
      activeItem: user.myTrading[0].id
    };
  },
  computed: {
    setCurrentItem: {
      get: function() {
        return this.currentItem;
      },
      set: function(item) {
        this.currentItem = item;
      }
    },
    setItemActive: {
      get: function() {
        return this.activeItem;
      },
      set: function(id) {
        this.activeItem = id;
      }
    }
  },
  methods: {
    changeItem(item) {
      this.setCurrentItem = item;
      this.setItemActive = item.id;
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
