<template>
  <div>
    <div v-show="oracle" class="mt-2">
      <b-row>
        <b-col cols="9">
          <OracleInfo :oracle="oracle" />
          <OracleSlider :oracleList="oracleList" @chooseOracle="chooseOracle" />
          <b-row>
            <b-col cols="8">
              <OracleChart :options="chartOptions" />
            </b-col>
            <b-col cols="4">
              <TransactionForm @setDealTime="setDealTime"
                               @buyOption="optionBought"
                               :broker="currentBroker" />
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="8">
              <DealsTable :dealList="dealList"
                          :isLoading="dealsIsLoading"
                          @toggleDeals="toggleDeals" />
            </b-col>
            <b-col cols="4">
              <BrokerList ref="brokerList" :brokerList="brokerList" />
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="3">
          <AssetList :assetList="assetList" />
        </b-col>
      </b-row>
    </div>
    <div v-show="!oracle">
      Oracle not found
    </div>
  </div>
</template>

<script>
import GiantOracle from '@/modules/giant-oracle/mocks';
import GiantConnect from '@/modules/giant-connect/giant-connect';

import OracleInfo from '@/components/page-components/Trading/OracleInfo.vue';
import OracleSlider from '@/components/page-components/Trading/OracleSlider.vue';
import OracleChart from '@/components/page-components/Trading/OracleChart.vue';
import AssetList from '@/components/page-components/Trading/AssetList.vue';
import DealsTable from '@/components/page-components/Trading/DealsTable.vue';
import BrokerList from '@/components/page-components/Trading/BrokerList.vue';
import TransactionForm from '@/components/page-components/Trading/TransactionForm.vue';

import _ from 'lodash';

import { DEAL_SCHEME, DEAL_OWNER } from '@/modules/constants';

const offsetTime = 60 * 2000;


export default {
  name: 'Trading',
  components: {
    OracleInfo,
    OracleSlider,
    OracleChart,
    AssetList,
    DealsTable,
    BrokerList,
    TransactionForm,
  },
  data: () => ({
    oracle: {
      reviews: [],
      volume: {},
    },

    oracleList: [],

    assetList: [],

    brokerList: [],
    currentBroker: {
      dealScheme: DEAL_SCHEME.BROKER_TRADER,
    },

    dealList: [],
    dealsIsLoading: true,

    chartOptions: {
      lineData: [],
      xAxisMax: +new Date() + offsetTime,
      markLineY: 0,
      markLineX: 0,
      scatterData: [],
      time: '', // T-T
      newOption: {},
    },

    interval: '',


    awardMultiplier: 1.3,
  }),
  methods: {
    async getOracleData() {
      this.oracleList = await GiantOracle.getOracleList();

      this.oracleList = this.oracleList.map(oracle => ({
        ...oracle,
        isActive: false,
      }));
      const activeOracle = _.find(this.oracleList, { id: this.$route.params.oracle_id });
      if (activeOracle) {
        activeOracle.isActive = true;
      }
      this.oracle = activeOracle;
    },
    async getAssetList() {
      this.assetList = await GiantOracle.getAssetList();
    },
    runChartUpdates() {
      GiantOracle.on('data', (data => {
        this.chartOptions.lineData.splice(0, 1);

        setTimeout(() => {
          this.chartOptions.lineData.push({
            name: data.time,
            value: [
              data.time,
              data.rate.toFixed(2),
            ],
          });
        }, 50);

        this.chartOptions.markLineY = data.rate;
        this.chartOptions.markLineX = data.time;
        this.chartOptions.scatterData = [[data.time, data.rate]];
        this.chartOptions.xAxisMax = +new Date() + offsetTime;
      }));
      this.interval = GiantOracle.runInterval();
    },
    async getChartData() {
      const rates = await GiantOracle.getLastRates();
      this.chartOptions.lineData = rates.map(rate => ({
        name: rate.time,
        value: [
          rate.time,
          rate.rate,
        ],
      }));

      const lastRateValue = rates[rates.length - 1];
      this.chartOptions.markLineY = lastRateValue.rate;
      this.chartOptions.markLineX = lastRateValue.time;
      this.chartOptions.scatterData = [[lastRateValue.time, lastRateValue.rate]];
    },
    setDealTime(time) {
      this.chartOptions.time = time;
    },
    async getDeals() {
      this.dealsIsLoading = true;

      this.dealList = await GiantOracle.getUserDeals();

      this.dealsIsLoading = false;
    },
    async toggleDeals(dealOwner) {
      this.dealsIsLoading = true;

      if (dealOwner === DEAL_OWNER.USER) {
        this.dealList = await GiantOracle.getUserDeals();
      } else {
        this.dealList = await GiantOracle.getAllDeals();
      }

      this.dealsIsLoading = false;
    },
    async getBrokerList() {
      this.brokerList = await GiantOracle.getBrokerList();
    },
    async getCurrentBroker() {
      this.currentBroker = await GiantOracle.getCurrentBroker(this.$route.params.broker_id);
    },
    async preparePage() {
      this.$store.commit('showPreload');

      await Promise.all([
        this.getOracleData(),
        this.getAssetList(),
        this.getBrokerList(),
        this.getChartData(),
        this.getDeals(),
      ]);
      this.runChartUpdates();

      this.$store.commit('hidePreload');
    },
    toggleFavoriteOracle() {
      this.isFavorite = !this.isFavorite;
    },
    chooseOracle(index) {
      clearInterval(this.interval);
      this.$router.push({
        name: 'trading',
        params: {
          oracle_id: this.oracleList[index].id,
        },
      });
    },

    async optionBought(option) {
      const optionDetails = {
        currentRate: this.chartOptions.markLineY,
        awardMultiplier: this.awardMultiplier,
        ...option,
      };
      try {
        this.chartOptions.newOption = await GiantConnect.buyOption(optionDetails);
      } catch (error) {
        // TODO -- catch error
      }
    },
  },
  watch: {
    $route(to, from) {
      const isEqualBroker = to.params.broker_id === from.params.broker_id;
      if (isEqualBroker) {
        this.preparePage();
      } else {
        this.getDeals();
      }
    },
  },
  created() {
    this.preparePage();
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
};
</script>

<style scoped>

</style>
