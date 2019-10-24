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
      <DealsDashboard :dealList="dealList" :currentItem="setCurrentItem"></DealsDashboard>
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
      value: 1000,
      deals: 3,
      winDeals: 3,
      loseDeals: 2,
      betVolume: 2300,
      betWin: 1500,
      betLose: 500,
      dealsTab: [
        {
          status: true,
          dateDeals: { date: "03.07.2019", time: "13:45" },
          asset: "BTC/USD",
          time: "1 min",
          bet: 300,
          profit: { status: false, value: 300 }
        },
        {
          status: false,
          dateDeals: { date: "02.07.2019", time: "12:35" },
          asset: "BTC/USD",
          time: "5 min",
          bet: 1000,
          profit: { status: true, value: 1000 }
        },
        {
          status: false,
          dateDeals: { date: "01.07.2019", time: "10:45" },
          asset: "BTC/USD",
          time: "2 min",
          bet: 500,
          profit: { status: true, value: -500 }
        }
      ]
    },
    {
      id: "0000002",
      group: "TRADING",
      title: "Trader / Trader",
      value: -350,
      deals: 3,
      winDeals: 1,
      loseDeals: 2,
      betVolume: 1250,
      betWin: 300,
      betLose: 650,
      dealsTab: [
        {
          status: true,
          dateDeals: { date: "03.07.2019", time: "10:45" },
          asset: "BTC/USD",
          time: "1 min",
          bet: 300,
          profit: { status: false, value: 300 }
        },
        {
          status: false,
          dateDeals: { date: "02.02.2019", time: "11:25" },
          asset: "BTC/USD",
          time: "5 min",
          bet: 650,
          profit: { status: true, value: -650 }
        },
        {
          status: false,
          dateDeals: { date: "01.02.2019", time: "10:25" },
          asset: "BTC/USD",
          time: "2 min",
          bet: 300,
          profit: { status: true, value: 300 }
        }
      ]
    }
  ],
  myOracles: [
    {
      id: "0000003",
      group: "ORACLE",
      title: "BitMEX",
      value: 235,
      asset: "BTC/UCD",
      rating: 8,
      fee: 0.25,
      items: {
        title: "Brokers",
        value: 3
      },
      deals: 3,
      volume: 5300,
      AVGfee: 2.3,
      AVGdealTime: 135,
      dealsTab: [
        {
          status: true,
          dateDeals: { date: "03.07.2019", time: "13:45" },
          oracle: { title: "Title oracle", id: "48857738008B" },
          volume: 120,
          profit: { status: false, value: 20 }
        },
        {
          status: false,
          dateDeals: { date: "02.07.2019", time: "11:45" },
          oracle: { title: "Title oracle", id: "48857738008B" },
          volume: 120,
          profit: { status: true, value: 320 }
        },
        {
          status: false,
          dateDeals: { date: "01.07.2019", time: "13:45" },
          oracle: { title: "Title oracle", id: "48857738008B" },
          volume: 120,
          profit: { status: true, value: 620 }
        }
      ]
    },
    {
      id: "0000004",
      group: "ORACLE",
      title: "Binance",
      value: 155,
      asset: "BTC/UCD",
      rating: 2,
      fee: 0.25,
      items: {
        title: "Brokers",
        value: 3
      },
      deals: 3,
      volume: 1300,
      AVGfee: 2.3,
      AVGdealTime: 435,
      dealsTab: [
        {
          status: true,
          dateDeals: { date: "03.07.2019", time: "13:45" },
          oracle: { title: "Title oracle", id: "48857738008B" },
          volume: 120,
          profit: { status: false, value: 20 }
        },
        {
          status: false,
          dateDeals: { date: "02.07.2019", time: "13:45" },
          oracle: { title: "Title oracle", id: "48857738008B" },
          volume: 120,
          profit: { status: true, value: 220 }
        },
        {
          status: false,
          dateDeals: { date: "01.07.2019", time: "11:45" },
          oracle: { title: "Title oracle", id: "48857738008B" },
          volume: 120,
          profit: { status: true, value: 320 }
        }
      ]
    },
    {
      id: "0000005",
      group: "ORACLE",
      title: "Huobi",
      value: 135,
      asset: "BTC/UCD",
      rating: 5,
      fee: 0.25,
      items: {
        title: "Brokers",
        value: 3
      },
      deals: 3,
      volume: 2300,
      AVGfee: 2.3,
      AVGdealTime: 335,
      dealsTab: [
        {
          status: true,
          dateDeals: { date: "03.07.2019", time: "13:45" },
          oracle: { title: "Title oracle", id: "48857738008B" },
          volume: 120,
          profit: { status: false, value: 620 }
        },
        {
          status: false,
          dateDeals: { date: "02.07.2019", time: "10:45" },
          oracle: { title: "Title oracle", id: "48857738008B" },
          volume: 120,
          profit: { status: true, value: 320 }
        },
        {
          status: false,
          dateDeals: { date: "01.07.2019", time: "07:45" },
          oracle: { title: "Title oracle", id: "48857738008B" },
          volume: 120,
          profit: { status: true, value: 520 }
        }
      ]
    }
  ],
  myBrokers: [
    {
      id: "0000006",
      group: "BROKER",
      title: "BitMEX",
      value: 335,
      asset: "BTC/UCD",
      rating: 4,
      fee: 0.25,
      items: {
        title: "Traders",
        value: 3
      },
      deals: 3,
      volume: 7300,
      AVGfee: 2.3,
      AVGdealTime: 535,
      dealsTab: [
        {
          status: true,
          dateDeals: { date: "03.07.2019", time: "15:45" },
          broker: { title: "Title", id: "48857738008B" },
          volume: 120,
          profit: { status: false, value: 320 }
        },
        {
          status: true,
          dateDeals: { date: "02.07.2019", time: "10:45" },
          broker: { title: "Title", id: "48857738008B" },
          volume: 120,
          profit: { status: false, value: 120 }
        },
        {
          status: false,
          dateDeals: { date: "01.07.2019", time: "13:45" },
          broker: { title: "Title", id: "48857738008B" },
          volume: 120,
          profit: { status: true, value: 420 }
        }
      ]
    },
    {
      id: "0000007",
      group: "BROKER",
      title: "Binance",
      value: 355,
      asset: "BTC/UCD",
      rating: 3,
      fee: 0.25,
      items: {
        title: "Traders",
        value: 3
      },
      deals: 3,
      volume: 3700,
      AVGfee: 2.3,
      AVGdealTime: 635,
      dealsTab: [
        {
          status: true,
          dateDeals: { date: "03.07.2019", time: "10:45" },
          broker: { title: "Title", id: "48857738008B" },
          volume: 120,
          profit: { status: false, value: 320 }
        },
        {
          status: false,
          dateDeals: { date: "02.07.2019", time: "13:45" },
          broker: { title: "Title", id: "48857738008B" },
          volume: 120,
          profit: { status: true, value: 520 }
        },
        {
          status: false,
          dateDeals: { date: "01.07.2019", time: "09:45" },
          broker: { title: "Title", id: "48857738008B" },
          volume: 120,
          profit: { status: true, value: 120 }
        }
      ]
    },
    {
      id: "0000008",
      group: "BROKER",
      title: "Huobi",
      value: 435,
      asset: "BTC/UCD",
      rating: 9,
      fee: 0.25,
      items: {
        title: "Traders",
        value: 3
      },
      deals: 3,
      volume: 5300,
      AVGfee: 2.3,
      AVGdealTime: 235,
      dealsTab: [
        {
          status: false,
          dateDeals: { date: "03.07.2019", time: "13:45" },
          broker: { title: "Title", id: "48857738008B" },
          volume: 120,
          profit: { status: true, value: 120 }
        },
        {
          status: false,
          dateDeals: { date: "02.07.2019", time: "15:45" },
          broker: { title: "Title", id: "48857738008B" },
          volume: 120,
          profit: { status: true, value: 520 }
        },
        {
          status: false,
          dateDeals: { date: "01.07.2019", time: "17:45" },
          broker: { title: "Title", id: "48857738008B" },
          volume: 120,
          profit: { status: true, value: 230 }
        },
        {
          active: false,
          amount: 150,
          asset: "BTC/USD",
          brokerType: 0,
          closeValue: 7478.73,
          dealInterval: "1",
          id: "1571863092605",
          openValue: 7478.88,
          reward: 0,
          status: "Fail",
          time: {
            close: "2019-10-23T20:39:12Z",
            open: "2019-10-23T22:38:12+02:00"
          },
          type: 0,
          usersPublicKey: "781.8635204078183"
        }
      ]
    }
  ]
};

import ControlDashboard from "../components/ui-components/Dashboard/ControlDashboard.vue";
import MyTrading from "../components/ui-components/Dashboard/MyTrading.vue";
import MyOracles from "../components/ui-components/Dashboard/MyOracles.vue";
import MyBrokers from "../components/ui-components/Dashboard/MyBrokers.vue";
import DataSection from "../components/ui-components/Blocks/DataSection.vue";
import DealsDashboard from "../components/ui-components/Dashboard/DealsDashboard.vue";

import { DEAL_LIST } from "@/graphql";

export default {
  name: "Dashboard",
  components: {
    ControlDashboard,
    MyTrading,
    MyOracles,
    MyBrokers,
    DataSection,
    DealsDashboard
  },
  data() {
    return {
      user: user,
      currentItem: user.myTrading[0],
      myTrading: user.myTrading,
      myOracles: user.myOracles,
      myBrokers: user.myBrokers,
      activeItem: user.myTrading[0].id,
      dealList:[],
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
    },
    async getAllDeals() {
        const { data } = await this.$apollo.query({
          query: DEAL_LIST,
          fetchPolicy: "no-cache"
        });
        this.dealList = data.dealList;
    }
  },
  created() {
    this.getAllDeals();
  }
};
</script>

<style scoped>
.block-grid {
  margin: 5px auto;
  width: 95vw;
  min-width: 0;
  display: grid;
  grid-gap: 20px;
  grid-template-rows: 100%;
  grid-template-columns: 32% 32% 32%;
  grid-template-areas: "left center right";
  overflow: hidden;
  padding: 10px 0 20px 0;
}
.block-left {
  grid-area: left;
  max-width: 100%;
  padding: 5px;
}
.block-center {
  grid-area: center;
  max-width: 100%;
  padding: 5px;
}
.block-right {
  grid-area: right;
  max-width: 100%;
  padding: 5px;
}
@media only screen and (max-width: 1420px) and (min-width: 960px) {
  .block-grid {
    margin: 5px;
    width: 96vw;
    min-width: 0;
    display: grid;
    grid-gap: 10px;
    grid-template-rows: 971px 920px;
    grid-template-columns: 49% 49%;
    grid-template-areas:
      "left center"
      "right right";
    overflow: hidden;
    padding: 10px 0 20px 0;
  }
}
@media only screen and (max-width: 960px) and (min-width: 320px) {
  .block-grid {
    margin: 5px;
    width: 96vw;
    min-width: 0;
    display: grid;
    grid-gap: 10px;
    grid-template-rows: 971px 971px 920px;
    grid-template-columns: 98%;
    grid-template-areas:
      "left"
      "center"
      "right";
    overflow: hidden;
    padding: 10px 0 20px 0;
  }
}
</style>
