<template>
  <div>
    <div v-show="oracle" class="mt-2">
      <b-row>
        <b-col cols="9">
          <OracleInfo :oracle="oracle" />
          <OracleSlider :oracleList="oracleList" @chooseOracle="chooseOracle" />
          <OracleChart :options="chartOptions" />
          <DealsTable :dealList="dealList" :isLoading="dealsIsLoading" @toggleDeals="toggleDeals" />
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
  },
  data: () => ({
    oracle: {
      reviews: [],
      volume: {},
    },

    oracleList: [],

    assetList: [],

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
      this.$store.commit('showPreload');

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

      this.$store.commit('hidePreload');
    },
    async getAssetList() {
      this.$store.commit('showPreload');
      this.assetList = await GiantOracle.getAssetList();
      this.$store.commit('hidePreload');
    },
    runChartUpdates() {
      GiantOracle.on('data', (data => {
        this.chartOptions.lineData.splice(0, 1);

        this.chartOptions.lineData.push({
          name: data.time,
          value: [
            data.time,
            data.rate.toFixed(2),
          ],
        });

        this.chartOptions.markLineY = data.rate;
        this.chartOptions.markLineX = data.time;
        this.chartOptions.scatterData = [[data.time, data.rate]];
        this.chartOptions.xAxisMax = +new Date() + (offsetTime);
      }));
      this.interval = GiantOracle.runInterval();
    },
    async getChartData() {
      this.$store.commit('showPreload');

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

      this.$store.commit('hidePreload');
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
    async preparePage() {
      await this.getOracleData();
      await this.getAssetList();
      await this.getChartData();
      this.runChartUpdates();
      this.getDeals();
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
    $route() {
      this.preparePage();
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
