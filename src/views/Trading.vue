<template>
  <div>
    <div v-show="oracle" class="mt-2">
      <b-row>
        <b-col cols="9">
          <OracleInfo :oracle="oracle" />
          <OracleSlider :oracleList="oracleList" @chooseOracle="chooseOracle" />
          <OracleChart :chart-data="chartData" :options="chartOptions" />
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

import _ from 'lodash';
import moment from 'moment';

const timeFormat = 'H[h] mm[m] ss[s]';

export default {
  name: 'Trading',
  components: {
    OracleInfo,
    OracleSlider,
    OracleChart,
    AssetList,
  },
  data: () => ({
    oracle: {
      reviews: [],
      volume: {},
    },

    oracleList: [],

    assetList: [],

    chartData: {
      labels: [],
      datasets: [
        {
          label: '',
          borderColor: '#0078E5',
          backgroundColor: '#0078E5',
          pointBorderWidth: 5,
          lineTension: 0,
          fill: false,
          data: [],
        },
      ],
      flag: [],
    },
    chartOptions: {
      maintainAspectRatio: false,
      responsive: true,
      tooltips: {
        mode: 'index',
        intersect: false,
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

        const timeLabel = moment(data.time).format(timeFormat);
        this.chartData.labels.splice(4, 0, timeLabel);
        this.chartData.datasets[0].data.splice(4, 0, data.rate);
      }));
      this.interval = GiantOracle.runInterval();
    },
    async getChartData() {
      const rates = await GiantOracle.getLastRates();
      this.chartData.datasets[0].label = this.oracle.pair;
      this.chartData.labels = rates.map(value => moment(value.time).format(timeFormat));
      this.chartData.labels = this.chartData.labels.concat(['', '', '', '']);
      this.chartData.datasets[0].data = rates.map(value => value.rate);
    },
    async preparePage() {
      await this.getOracleData();
      await this.getAssetList();
      await this.getChartData();
      this.runChartUpdates();
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
