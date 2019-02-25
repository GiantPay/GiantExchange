<template>
  <div>
    <div v-show="oracle" class="mt-2">
      <b-row>
        <b-col cols="9">
          <OracleInfo :oracle="oracle" />
          <OracleSlider :oracleList="oracleList" @chooseOracle="chooseOracle" />
          <b-row>
            <b-col cols="8">
              <OracleChart ref="chart"
                           :options="chartOptions"
                           @buyDealEnd="buyDealEnd"
                           @optionEnded="optionEnded" />
            </b-col>
            <b-col cols="4">
              <TransactionForm ref="transactionForm"
                               @setDealTime="setDealTime"
                               @buyOption="optionBought"
                               :currentCost="chartOptions.markLineY" />
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="8">
              <DealsTable :dealList="dealList"
                          :isLoading="dealsIsLoading"
                          @toggleDeals="toggleDeals"
                          @showDeal="showDeal" />
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
import GiantConnect from '@/plugins/giant-connect/giant-connect';

import OracleInfo from '@/components/page-components/Trading/OracleInfo.vue';
import OracleSlider from '@/components/page-components/Trading/OracleSlider.vue';
import OracleChart from '@/components/page-components/Trading/OracleChart.vue';
import AssetList from '@/components/page-components/Trading/AssetList.vue';
import DealsTable from '@/components/page-components/Trading/DealsTable.vue';
import BrokerList from '@/components/page-components/Trading/BrokerList.vue';
import TransactionForm from '@/components/page-components/Trading/TransactionForm.vue';

import { TRADING_INFO, CHART_DATA, CHART_DATA_SUB } from '@/graphql';

import { mapActions, mapState } from 'vuex';

import _ from 'lodash';

import { DEAL_OWNER, DEAL_STATUS_CAPTION } from '@/modules/constants';

const offsetTime = 3 * 60 * 1000;


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
  data() {
    return {
      oracle: {
        reviews: [],
        volume: {},
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
        time: '',
        newOption: {},
      },
    };
  },
  computed: mapState('trading', [
    'currentBroker',
  ]),
  methods: {
    mapOracleData() {
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
    async getChartData() {
      const { data } = await this.$apollo.query({
        query: CHART_DATA,
      });
      const rates = data.chartDataList;
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

      this.updateChart();
    },
    async updateChart() {
      await this.$apollo.addSmartSubscription('chartData', {
        query: CHART_DATA_SUB,
        result({ data }) {
          const newData = data.chartDataAdded;
          this.chartOptions.lineData.splice(0, 1);

          setTimeout(() => {
            this.chartOptions.lineData.push({
              name: newData.time,
              value: [
                newData.time,
                newData.rate.toFixed(2),
              ],
            });
          }, 50);

          this.chartOptions.markLineY = newData.rate;
          this.chartOptions.markLineX = newData.time;
          this.chartOptions.scatterData = [[newData.time, newData.rate]];
          this.chartOptions.xAxisMax = +new Date() + offsetTime;
        },
      });
    },
    setDealTime(time) {
      this.chartOptions.time = time;
    },
    // async getDeals() {
    //   this.dealsIsLoading = true;
    //
    //   this.dealList = await GiantOracle.getUserDeals();
    //
    //   this.dealsIsLoading = false;
    // },
    async toggleDeals(dealOwner) {
      this.dealsIsLoading = true;

      if (dealOwner === DEAL_OWNER.USER) {
        this.dealList = await GiantOracle.getUserDeals();
      } else {
        this.dealList = await GiantOracle.getAllDeals();
      }

      this.dealsIsLoading = false;
    },
    showDeal(id) {
      this.$refs.chart.dealVisibilitySwitching(id);
    },
    mapBrokerList() {
      this.brokerList = this.brokerList.map(broker => ({
        ...broker,
        isActive: broker.id === this.$route.params.broker_id,
      }));
    },
    async getTradingInfo() {
      const { data } = await this.$apollo.query({
        query: TRADING_INFO,
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
      this.$store.commit('showPreload');

      await Promise.all([
        this.getTradingInfo(),
        this.getChartData(),
        // this.getDeals(),
      ]);

      this.getCurrentBroker(_.find(this.brokerList, 'isActive').dealScheme);

      this.$store.commit('hidePreload');
    },
    toggleFavoriteOracle() {
      this.isFavorite = !this.isFavorite;
    },
    chooseOracle(index) {
      this.$apollo.subscriptions.chartData.stop();
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
        awardMultiplier: this.currentBroker.awardMultiplier,
        ...option,
      };
      try {
        this.chartOptions.newOption = await GiantConnect.buyOption(optionDetails);
        const dealItem = {
          id: this.chartOptions.newOption.id,
          openValue: this.chartOptions.markLineY,
          time: {
            open: this.chartOptions.markLineX,
            close: '-',
          },
          closeValue: '-',
          amount: `${this.chartOptions.newOption.rate} GIC`,
          reward: '-',
          status: DEAL_STATUS_CAPTION.WAITING,
        };
        this.dealList.push(dealItem);
      } catch (error) {
        // TODO -- catch error
      }
    },

    optionEnded(option) {
      const completeOption = _.find(this.dealList, { id: option.id });
      completeOption.closeValue = option.closeValue;
      completeOption.time.close = option.closeTime;
      completeOption.reward = `${option.reward} GIC`;
      completeOption.status = option.isWinner
        ? DEAL_STATUS_CAPTION.SUCCESS
        : DEAL_STATUS_CAPTION.FAIL;
    },

    buyDealEnd() {
      this.$refs.transactionForm.updateTime();
    },

    ...mapActions('trading', [
      'getCurrentBroker',
    ]),
  },
  watch: {
    $route(to, from) {
      const isEqualBroker = to.params.broker_id === from.params.broker_id;
      if (isEqualBroker) {
        this.preparePage();
      } else {
        this.getDeals();
        this.$refs.chart.removeBrokerDeals();
      }
    },
  },
  created() {
    this.preparePage();
  },
  beforeDestroy() {
    this.$apollo.subscriptions.chartData.destroy();
  },
};
</script>

<style scoped>

</style>
