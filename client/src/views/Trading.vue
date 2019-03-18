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
                           @buyDealEnd="buyDealEnd" />
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
import OracleInfo from '@/components/page-components/Trading/OracleInfo.vue';
import OracleSlider from '@/components/page-components/Trading/OracleSlider.vue';
import OracleChart from '@/components/page-components/Trading/OracleChart.vue';
import AssetList from '@/components/page-components/Trading/AssetList.vue';
import DealsTable from '@/components/page-components/Trading/DealsTable.vue';
import BrokerList from '@/components/page-components/Trading/BrokerList.vue';
import TransactionForm from '@/components/page-components/Trading/TransactionForm.vue';

import { TRADING_INFO, CHART_DATA, CHART_DATA_SUB, ADD_DEAL, DEAL_ENDED, DEAL_LIST, DEAL_LIST_USER } from '@/graphql';

import { mapActions, mapState } from 'vuex';

import _ from 'lodash';
import moment from 'moment';

import { DEAL_OWNER } from '@/modules/constants';

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

      usersPublicKey: Math.random() * 1000,
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
        variables: {
          usersPublicKey: this.usersPublicKey.toString(),
        },
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
      this.chartOptions.xAxisMax = +moment(lastRateValue.time) + offsetTime;

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
          this.chartOptions.xAxisMax = +moment(newData.time) + offsetTime;
        },
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
            usersPublicKey: this.usersPublicKey.toString(),
          },
          fetchPolicy: 'no-cache',
        });
        this.dealList = data.dealList;
      } else {
        const { data } = await this.$apollo.query({
          query: DEAL_LIST,
          fetchPolicy: 'no-cache',
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
        isActive: broker.id === this.$route.params.broker_id,
      }));
    },
    async getTradingInfo() {
      const { data } = await this.$apollo.query({
        query: TRADING_INFO,
        variables: {
          usersPublicKey: this.usersPublicKey.toString(),
        },
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
      ]);

      this.getCurrentBroker(_.find(this.brokerList, 'isActive')._dealScheme);

      this.$store.commit('hidePreload');
    },
    toggleFavoriteOracle() {
      this.isFavorite = !this.isFavorite;
    },
    chooseOracle(index) {
      this.$apollo.subscriptions.chartData.destroy();
      this.$router.push({
        name: 'trading',
        params: {
          oracle_id: this.oracleList[index].id,
        },
      });
    },

    async optionBought(option) {
      this.$store.commit('showPreload');

      const openValue = this.chartOptions.markLineY;
      const usersPublicKey = this.usersPublicKey.toString();
      const brokerType = this.currentBroker.dealScheme;

      const { data } = await this.$apollo.mutate({
        mutation: ADD_DEAL,
        variables: {
          id: option.id.toString(),
          type: option.dealType,
          time: {
            open: moment().format('YYYY-MM-DD, H:mm:ss'),
          },
          amount: option.rate,
          dealInterval: option.time.toString(),
          openValue,
          usersPublicKey,
          brokerType,
        },
      });

      this.chartOptions.newOption = data.addDeal;
      this.dealList.push(data.addDeal);

      this.$apollo.addSmartSubscription('dealEnded', {
        query: DEAL_ENDED,
        result({ data: { dealEnded } }) {
          const currentDeal = _.find(this.dealList, deal => deal.id === dealEnded.id);
          if (currentDeal) {
            currentDeal.closeValue = dealEnded.closeValue;
            currentDeal.reward = dealEnded.reward;
            currentDeal.status = dealEnded.status;
            currentDeal.time.close = dealEnded.time.close;
          }
          this.$refs.chart.removeDeal(dealEnded);
        },
      });

      this.$store.commit('hidePreload');
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
