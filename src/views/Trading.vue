<template>
  <div>
    <div v-show="oracle" class="mt-2">
      <b-row>
        <b-col cols="9">
          <OracleInfo :oracle="oracle" />
          <OracleSlider :oracleList="oracleList" @chooseOracle="chooseOracle" />
          <OracleChart :chart-data="chartData" :options="chartOptions" />
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
import moment from 'moment';

const timeFormat = 'H:mm:ss';
const updateTime = 60 * 1000;

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

    chartData: {
      labels: [],
      datasets: [
        {
          label: '',
          borderColor: '#0078E5',
          backgroundColor: '#0078E5',
          pointBorderWidth: 5,
          fill: false,
          data: [],
        },
      ],
    },
    chartOptions: {
      maintainAspectRatio: false,
      responsive: true,
      tooltips: {
        mode: 'index',
        intersect: false,
      },
      layout: {
        padding: {
          top: 10,
          bottom: 10,
        },
      },
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
        this.chartData.labels.splice(0, 1);
        this.chartData.datasets[0].data.splice(0, 1);

        const timeLabel = moment(+data.time + (updateTime * 8)).format(timeFormat);
        this.chartData.labels.push(timeLabel);
        this.chartData.datasets[0].data.splice(9, 0, data.rate);
      }));
      this.interval = GiantOracle.runInterval();
    },
    async getChartData() {
      this.$store.commit('showPreload');

      const rates = await GiantOracle.getLastRates();
      this.chartData.datasets[0].label = this.oracle.pair;
      this.chartData.labels = rates.map(value => moment(value.time).format(timeFormat));
      for (let i = 1; i < 9; i++) {
        this.chartData.labels.push(moment(+new Date() + (updateTime * i)).format(timeFormat));
      }
      this.chartData.datasets[0].data = rates.map(value => value.rate);

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
