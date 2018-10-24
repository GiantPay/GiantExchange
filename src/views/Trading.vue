<template>
  <div>
    <div v-show="oracle" class="mt-2">
      <b-row>
        <b-col cols="9">
          <OracleInfo :oracle="oracle" />
          <OracleSlider :oracleList="oracleList" @chooseOracle="chooseOracle" />
          <OracleChart :options="chartOptions" />
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

import OracleInfo from '@/components/page-components/Trading/OracleInfo.vue';
import OracleSlider from '@/components/page-components/Trading/OracleSlider.vue';
import OracleChart from '@/components/page-components/Trading/OracleChart.vue';
import AssetList from '@/components/page-components/Trading/AssetList.vue';
import DealsTable from '@/components/page-components/Trading/DealsTable.vue';
import BrokerList from '@/components/page-components/Trading/BrokerList.vue';

import _ from 'lodash';

const offsetTime = 60 * 1000;


export default {
  name: 'Trading',
  components: {
    OracleInfo,
    OracleSlider,
    OracleChart,
    AssetList,
    DealsTable,
    BrokerList,
  },
  data: () => ({
    oracle: {
      reviews: [],
      volume: {},
    },

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
    },

    interval: '',
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
        this.chartOptions.xAxisMax = +new Date() + (offsetTime);
      }));
      this.interval = GiantOracle.runInterval();
    },
    async getChartData() {
      const rates = await GiantOracle.getLastRates();
      this.chartOptions.lineData = rates.map(rate => ({
        name: rate.time,
        value: [
          rate.time,
          rate.rate.toFixed(2),
        ],
      }));

      const lastRateValue = rates[rates.length - 1];
      this.chartOptions.markLineY = lastRateValue.rate;
      this.chartOptions.markLineX = lastRateValue.time;
      this.chartOptions.scatterData = [[lastRateValue.time, lastRateValue.rate]];
    },
    async getDeals() {
      this.dealsIsLoading = true;

      this.dealList = await GiantOracle.getUserDeals();

      this.dealsIsLoading = false;
    },
    async toggleDeals(caption) {
      this.dealsIsLoading = true;

      // Change logic
      if (caption === 'My') {
        this.dealList = await GiantOracle.getUserDeals();
      } else {
        this.dealList = await GiantOracle.getAllDeals();
      }

      this.dealsIsLoading = false;
    },
    async getBrokerList() {
      this.brokerList = await GiantOracle.getBrokerList();
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
