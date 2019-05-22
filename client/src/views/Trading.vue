<template>
  <div>
    <div class="trading-grid">
      <div class="asset">
        <BlockAssets :data="assetsMockList" />
      </div>
      <div class="oracles">
        <BlockOracles
          :currencyFirst="oracleInfo.currencyFirst"
          :currencySecond="oracleInfo.currencySecond"
          :oracleId="oracleInfo.oracleId"
          :ratingValue="oracleInfo.ratingValue"
          :pingValue="oracleInfo.pingValue"
          :urlOracles="oracleInfo.urlOracles"
          :optionsValue="oracleInfo.optionsValue"
          :brokersValue="oracleInfo.brokersValue"
          :feeValue="oracleInfo.feeValue"
        />
      </div>
      <div class="brokers">
        <BlockBrokers
          :brokerId="brokerInfo.brokerId"
          :ratingValue="brokerInfo.ratingValue"
          :reserved="brokerInfo.reserved"
          :avaliable="brokerInfo.avaliable"
          :rewardValue="brokerInfo.rewardValue"
          :volumeValue="brokerInfo.volumeValue"
          :feeValue="brokerInfo.feeValue"
        />
      </div>
      <div class="deals">
        <DealsList :deals-list="dealList" @toggleDeals="toggleDeals" />
      </div>
      <div class="graph">
        <OracleChart
          ref="chart"
          :options="chartOptions"
          @buyDealEnd="buyDealEnd"
        />
      </div>
      <div class="bet">
        <BlockBet
          ref="transactionForm"
          :current-cost="chartOptions.markLineY"
          @setDealTime="setDealTime"
          @buyOption="optionBought"
        />
      </div>
    </div>
    <div class="display-none">
      <div v-show="oracle" class="mt-2">
        <b-row>
          <b-col cols="9">
            <OracleInfo :oracle="oracle" />
            <OracleSlider
              :oracle-list="oracleList"
              :show-popup="getDetailInfo"
              @chooseOracle="chooseOracle"
            />
            <b-row>
              <b-col cols="8"></b-col>
              <b-col cols="4">
                <TransactionForm
                  ref="transactionForm"
                  :current-cost="chartOptions.markLineY"
                  @setDealTime="setDealTime"
                  @buyOption="optionBought"
                />
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="8">
                <DealsTable
                  :deal-list="dealList"
                  :is-loading="dealsIsLoading"
                  @toggleDeals="toggleDeals"
                  @showDeal="showDeal"
                />
              </b-col>
              <b-col cols="4">
                <BrokerList
                  ref="brokerList"
                  :broker-list="brokerList"
                  :show-popup="getDetailInfo"
                />
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="3">
            <AssetList :asset-list="assetList" />
          </b-col>
        </b-row>
        <PopupInfo ref="popupInfo" :popup-info="popupInfo" />
      </div>
      <div v-show="!oracle">
        Oracle not found
      </div>
    </div>
  </div>
</template>

<script>
import OracleInfo from "@/components/page-components/Trading/OracleInfo.vue";
import OracleSlider from "@/components/page-components/Trading/OracleSlider.vue";
import OracleChart from "@/components/page-components/Trading/OracleChart.vue";
import AssetList from "@/components/page-components/Trading/AssetList.vue";
import DealsTable from "@/components/page-components/Trading/DealsTable.vue";
import BrokerList from "@/components/page-components/Trading/BrokerList.vue";
import TransactionForm from "@/components/page-components/Trading/TransactionForm.vue";
import PopupInfo from "@/components/page-components/Trading/popups/PopupInfo.vue";

import DealsList from "@/components/page-components/Trading/DealsList.vue";
import BlockBrokers from "@/components/ui-components/Blocks/BlockBrokers.vue";
import BlockOracles from "@/components/ui-components/Blocks/BlockOracles.vue";
import BlockAssets from "@/components/ui-components/Blocks/BlockAssets.vue";
import BlockBet from "@/components/ui-components/Blocks/BlockBet.vue";

import {
  TRADING_INFO,
  CHART_DATA,
  CHART_DATA_SUB,
  ADD_DEAL,
  DEAL_LIST,
  DEAL_LIST_USER,
  BROKER_DETAIL,
  ORACLE_DETAIL
} from "@/graphql";

import { mapActions, mapState } from "vuex";

import find from "lodash/find";
import moment from "moment";
import { toSnakeCase } from "@/modules/helpers";

import { DEAL_OWNER, POPUP_TYPE } from "@/modules/constants";

const offsetTime = 3 * 60 * 1000;

export default {
  name: "Trading",
  components: {
    OracleInfo,
    OracleSlider,
    OracleChart,
    AssetList,
    DealsTable,
    BrokerList,
    TransactionForm,
    PopupInfo,
    DealsList,
    BlockBrokers,
    BlockOracles,
    BlockAssets,
    BlockBet
  },
  data() {
    return {
      oracle: {
        reviews: [],
        volume: {}
      },
      chartDataAdded: {},

      oracleList: [],

      assetList: [],

      brokerList: [],

      dealList: [],
      dealsIsLoading: true,

      chartOptions: {
        lineData: [],
        xAxisMax: +new Date() + offsetTime,
        markLineY: 0,
        markLineX: 0,
        scatterData: [],
        time: "",
        newOption: {}
      },

      popupInfo: {
        volume: {},
        statistics: [],
        reviews: []
      },

      brokerInfo: {
        brokerId: "0944989249",
        ratingValue: 9,
        reserved: 1000,
        avaliable: 800,
        rewardValue: 80,
        volumeValue: 12000
      },
      oracleInfo: {
        currencyFirst: "BTC",
        currencySecond: "USD",
        oracleId: "634636448",
        ratingValue: 9,
        pingValue: 62,
        urlOracles: "cryptocompare.com",
        optionsValue: 0,
        brokersValue: 1,
        feeValue: 0
      },
      assetsMockList: [
        {
          currencyFirst: "BTC",
          currencySecond: "USD",
          oracleValue: 175,
          brokerValue: 246,
          isActive: true,
          barValue: 75,
          barVariant: "success"
        },
        {
          currencyFirst: "ETH",
          currencySecond: "USD",
          oracleValue: 119,
          brokerValue: 135,
          isActive: false,
          barValue: 55,
          barVariant: "success"
        },
        {
          currencyFirst: "LTC",
          currencySecond: "USD",
          oracleValue: 95,
          brokerValue: 85,
          isActive: false,
          barValue: 15,
          barVariant: "success"
        },
        {
          currencyFirst: "EOS",
          currencySecond: "USD",
          oracleValue: 25,
          brokerValue: 35,
          isActive: false,
          barValue: 27,
          barVariant: "success"
        },
        {
          currencyFirst: "BCH",
          currencySecond: "USD",
          oracleValue: 39,
          brokerValue: 35,
          isActive: false,
          barValue: 15,
          barVariant: "success"
        },
        {
          currencyFirst: "XRP",
          currencySecond: "USD",
          oracleValue: 75,
          brokerValue: 85,
          isActive: false,
          barValue: 31,
          barVariant: "success"
        },
        {
          currencyFirst: "TRX",
          currencySecond: "USD",
          oracleValue: 42,
          brokerValue: 65,
          isActive: false,
          barValue: 15,
          barVariant: "success"
        },
        {
          currencyFirst: "DASH",
          currencySecond: "USD",
          oracleValue: 29,
          brokerValue: 45,
          isActive: false,
          barValue: 13,
          barVariant: "success"
        },
        {
          currencyFirst: "NEO",
          currencySecond: "USD",
          oracleValue: 12,
          brokerValue: 25,
          isActive: false,
          barValue: 9,
          barVariant: "success"
        },
        {
          currencyFirst: "ATOM",
          currencySecond: "USD",
          oracleValue: 75,
          brokerValue: 65,
          isActive: false,
          barValue: 16,
          barVariant: "success"
        },
        {
          currencyFirst: "XEM",
          currencySecond: "USD",
          oracleValue: 19,
          brokerValue: 35,
          isActive: false,
          barValue: 10,
          barVariant: "success"
        }
      ]
    };
  },
  computed: {
    ...mapState("trading", ["currentBroker"]),
    ...mapState(["usersPublicKey", "endedDealData"])
  },
  methods: {
    mapOracleData() {
      this.oracleList = this.oracleList.map(oracle => ({
        ...oracle,
        isActive: false
      }));
      const activeOracle = find(this.oracleList, {
        id: this.$route.params.oracle_id
      });
      if (activeOracle) {
        activeOracle.isActive = true;
      }
      this.oracle = activeOracle;
    },
    async getChartData() {
      const { data } = await this.$apollo.query({
        query: CHART_DATA,
        variables: {
          usersPublicKey: this.usersPublicKey
        },
        fetchPolicy: "no-cache"
      });
      const rates = data.chartDataListv2;
      this.chartOptions.lineData = rates.map(rate => ({
        name: rate.time,
        value: [rate.time, rate.rate]
      }));

      const lastRateValue = rates[rates.length - 1];
      this.chartOptions.markLineY = lastRateValue.rate;
      this.chartOptions.markLineX = lastRateValue.time;
      this.chartOptions.scatterData = [
        [lastRateValue.time, lastRateValue.rate]
      ];
      this.chartOptions.xAxisMax = +moment(lastRateValue.time) + offsetTime;

      this.updateChart();
    },
    async updateChart() {
      await this.$apollo.addSmartSubscription("chartDatav2", {
        query: CHART_DATA_SUB,
        result({ data }) {
          const newData = data.chartDataAddedv2;
          this.chartOptions.lineData.splice(0, 1);

          setTimeout(() => {
            this.chartOptions.lineData.push({
              name: newData.time,
              value: [newData.time, newData.rate.toFixed(2)]
            });
          }, 50);

          this.chartOptions.markLineY = newData.rate;
          this.chartOptions.markLineX = newData.time;
          this.chartOptions.scatterData = [[newData.time, newData.rate]];
          this.chartOptions.xAxisMax = +moment(newData.time) + offsetTime;
        }
      });
    },
    setDealTime(time) {
      this.chartOptions.time = time;
    },
    async toggleDeals(dealOwner) {
      this.dealsIsLoading = true;

      if (dealOwner === DEAL_OWNER.USER) {
        const { data } = await this.$apollo.query({
          query: DEAL_LIST_USER,
          variables: {
            usersPublicKey: this.usersPublicKey
          },
          fetchPolicy: "no-cache"
        });
        this.dealList = data.dealList;
      } else {
        const { data } = await this.$apollo.query({
          query: DEAL_LIST,
          fetchPolicy: "no-cache"
        });
        this.dealList = data.dealList;
      }

      this.dealsIsLoading = false;
    },
    showDeal(id) {
      this.$refs.chart.dealVisibilitySwitching(id);
    },
    mapBrokerList() {
      this.brokerList = this.brokerList.map(broker => ({
        _id: broker.id,
        caption: broker.caption,
        _info: broker.info,
        _dealScheme: broker.dealScheme,
        _volume: broker.volume,
        isActive:
          toSnakeCase(broker.caption) === this.$route.params.broker_caption
      }));
    },
    async getTradingInfo() {
      const { data } = await this.$apollo.query({
        query: TRADING_INFO,
        variables: {
          usersPublicKey: this.usersPublicKey
        }
      });

      this.brokerList = data.brokerList;
      this.oracleList = data.oracleList;
      this.assetList = data.assetList;
      this.dealList = data.dealList;

      this.dealsIsLoading = false;

      this.mapBrokerList();
      this.mapOracleData();
    },
    async preparePage() {
      this.$store.commit("showPreload");

      await Promise.all([this.getTradingInfo(), this.getChartData()]);

      this.getCurrentBroker(find(this.brokerList, "isActive")._dealScheme);

      this.$store.commit("hidePreload");
    },
    toggleFavoriteOracle() {
      this.isFavorite = !this.isFavorite;
    },
    chooseOracle(index) {
      this.$apollo.subscriptions.chartDatav2.destroy();
      this.$router.push({
        name: "trading",
        params: {
          oracle_id: this.oracleList[index].id
        }
      });
    },

    async optionBought(option) {
      this.$store.commit("showPreload");

      const openValue = this.chartOptions.markLineY;
      const brokerType = this.currentBroker.dealScheme;

      const { data } = await this.$apollo.mutate({
        mutation: ADD_DEAL,
        variables: {
          id: option.id.toString(),
          asset: "BTC/USD",
          type: option.dealType,
          time: {
            open: moment().format(),
            close: moment
              .utc()
              .add(+option.time, "minute")
              .format()
          },
          amount: option.rate,
          reward: option.rate * 1.8,
          dealInterval: option.time.toString(),
          usersPublicKey: this.usersPublicKey,
          openValue,
          brokerType
        }
      });

      this.chartOptions.newOption = data.addDeal;
      this.dealList.push(data.addDeal);

      this.$store.commit("hidePreload");
    },

    dealEndedHook(dealEnded) {
      const currentDeal = find(this.dealList, deal => deal.id === dealEnded.id);
      if (currentDeal) {
        currentDeal.closeValue = dealEnded.closeValue;
        currentDeal.reward = dealEnded.reward;
        currentDeal.status = dealEnded.status;
        currentDeal.time.close = dealEnded.time.close;
        currentDeal.active = dealEnded.active;
      }
      this.$refs.chart.removeDeal(dealEnded);
    },

    buyDealEnd() {
      this.$refs.transactionForm.updateTime();
    },

    async getDetailInfo({ _id }, type) {
      this.$store.commit("showPreload");

      const { data } = await this.$apollo.query({
        query: type === POPUP_TYPE.BROKER ? BROKER_DETAIL : ORACLE_DETAIL,
        variables: {
          id: _id
        }
      });
      this.popupInfo = data.broker || data.oracle;

      this.$store.commit("hidePreload");
      this.$refs.popupInfo.showModal();
    },

    ...mapActions("trading", ["getCurrentBroker"])
  },
  watch: {
    $route(to, from) {
      const isEqualBroker =
        to.params.broker_caption === from.params.broker_caption;
      if (isEqualBroker) {
        this.preparePage();
      } else {
        this.$refs.chart.removeBrokerDeals();
      }
    },
    // Deal ended watcher from Vuex
    endedDealData(data) {
      this.dealEndedHook(data);
    }
  },
  created() {
    this.preparePage();
  },
  beforeDestroy() {
    this.$apollo.subscriptions.chartDatav2.destroy();
  }
};
</script>

<style scoped>
.display-none {
  display: none;
}
.trading-grid {
  width: 100%;
  display: grid;
  grid-gap: 30px;
  grid-template-rows: 260px auto;
  grid-template-columns: auto 350px 350px 245px;
  grid-template-areas:
    "asset oracles brokers deals"
    "graph graph bet deals";
}
.asset {
  grid-area: asset;
  max-width: 100%;
  min-width: 350px;
  background-color: #ffffff;
  border-radius: 10px;
}
.oracles {
  grid-area: oracles;
  max-width: 350px;
  height: 260px;
  background-color: #ffffff;
  border-radius: 10px;
}
.brokers {
  grid-area: brokers;
  max-width: 350px;
  height: 260px;
  background-color: #ffffff;
  border-radius: 10px;
}
.deals {
  grid-area: deals;
  max-width: 245px;
  height: 916px;
  background-color: #ffffff;
  border-radius: 10px;
}
.graph {
  grid-area: graph;
  max-width: 100%;
  height: 624px;
  background-color: #ffffff;
  border-radius: 10px;
}
.bet {
  grid-area: bet;
  max-width: 350px;
  height: 624px;
  background-color: #ffffff;
  border-radius: 10px;
}
@media only screen and (max-width: 1140px) and (min-width: 961px) {
  .trading-grid {
    max-width: 1140px;
    display: grid;
    grid-gap: 30px;
    grid-template-rows: 260px auto 221px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
      "asset oracles brokers"
      "graph graph bet"
      "deals deals deals";
  }
  .asset {
    max-width: 100%;
    min-width: 350px;
    height: 260px;
  }
  .oracles {
    max-width: 100%;
    min-width: 290px;
    height: 260px;
  }
  .brokers {
    max-width: 100%;
    min-width: 290px;
    height: 260px;
  }
  .graph {
    max-width: 100%;
    height: 404px;
  }
  .bet {
    max-width: 350px;
    height: 404px;
  }
  .deals {
    grid-area: deals;
    max-width: 100%;
    height: 221px;
    overflow-x: scroll;
  }
}
@media only screen and (max-width: 960px) and (min-width: 461px) {
  .trading-grid {
    width: 100%;
    grid-template-rows: 272px 272px 272px 386px 422px 416px;
    grid-template-columns: 100%;
    grid-template-areas:
      "asset"
      "oracles"
      "brokers"
      "graph"
      "bet"
      "deals";
  }
  .asset {
    max-width: 100%;
    height: 272px;
    min-width: 350px;
  }
  .oracles {
    max-width: 100%;
    height: 272px;
  }
  .brokers {
    max-width: 100%;
    height: 272px;
  }
  .graph {
    max-width: 100%;
    height: 386px;
  }
  .bet {
    max-width: 100%;
    height: 404px;
  }
  .deals {
    max-width: 100%;
    height: 221px;
  }
}
@media only screen and (max-width: 960px) and (min-width: 541px) {
  .trading-grid {
    width: 100%;
    grid-template-rows: 272px 272px 272px 386px 422px 235px;
    grid-template-columns: 100%;
    grid-template-areas:
      "asset"
      "oracles"
      "brokers"
      "graph"
      "bet"
      "deals";
  }
  .asset {
    max-width: 100%;
    height: 272px;
    min-width: 350px;
  }
  .oracles {
    max-width: 100%;
    height: 272px;
  }
  .brokers {
    max-width: 100%;
    height: 272px;
  }
  .graph {
    max-width: 100%;
    height: 386px;
  }
  .bet {
    max-width: 100%;
    height: 404px;
  }
  .deals {
    max-width: 100%;
    height: 221px;
  }
}@media only screen and (max-width: 540px) and (min-width: 461px) {
  .trading-grid {
    width: 100%;
    grid-template-rows: 272px 272px 272px 386px 422px 416px;
    grid-template-columns: 100%;
    grid-template-areas:
      "asset"
      "oracles"
      "brokers"
      "graph"
      "bet"
      "deals";
  }
}
@media only screen and (max-width: 460px) and (min-width: 320px) {
  .trading-grid {
    width: 100%;
    grid-template-rows: 272px 272px 272px 386px 422px 416px;
    grid-template-columns: 100%;
    grid-template-areas:
      "asset"
      "oracles"
      "brokers"
      "graph"
      "bet"
      "deals";
  }
  .asset {
    max-width: 100%;
    height: 272px;
    min-width: 0;
    justify-content: center;
  }
  .oracles {
    max-width: 100%;
    height: 272px;
  }
  .brokers {
    max-width: 100%;
    height: 272px;
  }
  .graph {
    max-width: 100%;
    height: 386px;
  }
  .bet {
    max-width: 100%;
    height: 404px;
  }
  .deals {
    max-width: 100%;
    height: 340px;
  }
}
</style>
