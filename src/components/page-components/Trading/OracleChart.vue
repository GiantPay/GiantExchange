<template>
  <e-charts ref="chart" :options="chartOptions" class="chart" :auto-resize="true"/>
</template>

<script>
import ECharts from 'vue-echarts/components/ECharts.vue';
import 'echarts/index';

import _ from 'lodash';
import moment from 'moment';

import { mapState } from 'vuex';

import { DEAL_SCHEME, DEAL_TYPE, COLORS } from '@/modules/constants';


export default {
  name: 'OracleChart',
  components: {
    ECharts,
  },
  props: {
    options: {
      type: Object,
    },
  },
  data() {
    return {
      BTDealListIds: [],

      interval: 1,

      buyDealEnd: 30 * 1000,

      buyDealEndCheckpoint: 0,

      chartOptions: {
        color: '#5c90d2',
        tooltip: {
          trigger: 'axis',
          showContent: false,
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#ccc',
              borderColor: '#aaa',
              borderWidth: 1,
              shadowBlur: 0,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              textStyle: {
                color: '#222',
              },
            },
          },
        },
        xAxis: {
          type: 'time',
          max: 0,
          axisPointer: {
            lineStyle: {
              type: 'dashed',
            },
            animation: false,
          },
          splitLine: {
            show: false,
          },
          maxInterval: 60 * 1000,
        },
        yAxis: {
          type: 'value',
          scale: true,
          position: 'right',
          axisPointer: {
            label: {
              formatter(params) {
                return params.value;
              },
            },
          },
          splitLine: {
            show: false,
          },
        },
        grid: {
          left: 0,
          top: 30,
          right: '7%',
        },
        series: [
          // Main line
          {
            type: 'line',
            showSymbol: false,
            data: [],
            markLine: {
              label: {
                backgroundColor: '#ccc',
                borderColor: '#aaa',
                borderWidth: 1,
                shadowBlur: 0,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                textStyle: {
                  color: '#222',
                },
                padding: 5,
              },
              symbol: 'none',
              data: [
                // Current value
                {
                  yAxis: 0,
                },
                // Current time
                {
                  xAxis: 0,
                  label: {
                    formatter: () => 'Deal start',
                  },
                },
              ],
            },
          },
          // Scatter
          {
            type: 'effectScatter',
            data: [],
            rippleEffect: {
              brushType: 'stroke',
            },
          },
          {
            type: 'line',
            data: [],
            markLine: {
              label: {
                backgroundColor: '#ccc',
                borderColor: '#aaa',
                borderWidth: 1,
                shadowBlur: 0,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                textStyle: {
                  color: '#222',
                },
                padding: 5,
              },
              symbol: 'none',
              data: [
                // DealEnd
                {
                  xAxis: new Date(),
                  label: {
                    formatter: () => 'Deal end',
                  },
                },
              ],
            },
          },
        ],
      },
    };
  },
  computed: mapState('trading', {
    currentBroker(state) {
      return state.currentBroker;
    },
  }),
  watch: {
    currentBroker: {
      handler(val) {
        if (val.dealScheme === DEAL_SCHEME.BROKER_TRADER) {
          this.setBTOptions();
        } else {
          this.setTTOptions();
        }
      },
      immediate: true,
      deep: true,
    },
    // Chart data
    'options.lineData': {
      handler(val) {
        this.chartOptions.series[0].data = val;
      },
      immediate: true,
    },
    'options.xAxisMax': {
      handler(val) {
        this.chartOptions.xAxis.max = val;
      },
      immediate: true,
    },
    'options.markLineY': {
      handler(val) {
        this.chartOptions.series[0].markLine.data[0].yAxis = val;
      },
      immediate: true,
    },
    'options.markLineX': {
      handler(val) {
        this.chartOptions.series[0].markLine.data[1].xAxis = val;
        // B-T deal end
        if (this.currentBroker.dealScheme === DEAL_SCHEME.BROKER_TRADER) {
          this.chartOptions.series[2].markLine.data[0].xAxis = moment(val).add(this.interval, 'minute').format();
        } else if (this.currentBroker.dealScheme === DEAL_SCHEME.TRADER_TRADER) {
          if (val >= this.buyDealEndCheckpoint) {
            this.$emit('buyDealEnd');
          }
        }
      },
      immediate: true,
    },
    'options.scatterData': {
      handler(val) {
        this.chartOptions.series[1].data = val;
      },
      immediate: true,
    },

    // Buy time
    'options.time': {
      handler(val) {
        this.interval = val;
        const currentTime = this.chartOptions.series[0].markLine.data[1].xAxis;
        if (this.currentBroker.dealScheme === DEAL_SCHEME.BROKER_TRADER) {
          this.chartOptions.series[2].markLine.data[0].xAxis = moment(currentTime).add(this.interval, 'minute').format();
          this.chartOptions.series[2].markLine.data = [
            {
              xAxis: moment(this.options.markLineX).add(this.interval, 'minute').format(),
              label: {
                formatter: () => 'Deal end',
              },
            },
          ];
        } else {
          this.buyDealEndCheckpoint = moment(this.options.time, 'HH:mm') - this.buyDealEnd;
          this.chartOptions.series[2].markLine.data = [
            {
              xAxis: moment(this.options.time, 'HH:mm').format(),
              label: {
                formatter: () => 'Deal end',
              },
            },
            {
              xAxis: this.buyDealEndCheckpoint,
              label: {
                formatter: () => 'Time to purchase',
              },
            },
          ];
        }
      },
    },

    // Buy new option
    'options.newOption': {
      handler(option) {
        const isBT = this.currentBroker.dealScheme === DEAL_SCHEME.BROKER_TRADER;

        const time = moment(this.chartOptions.series[0].markLine.data[1].xAxis);
        let clonedTime = time.clone();
        const optionEnd = isBT
          ? clonedTime.add(this.interval, 'minute').format()
          : moment(option.time, 'HH:mm').format();
        this.chartOptions.series.push({
          name: option.id,
          type: 'line',
          data: [
            [time.format(), option.currentRate],
            [optionEnd, option.currentRate],
          ],
          lineStyle: {
            color: option.dealType ? COLORS.RED : COLORS.GREEN,
          },
          markLine: {
            label: {
              position: 'start',
              backgroundColor: option.dealType ? COLORS.RED : COLORS.GREEN,
              borderColor: option.dealType ? COLORS.RED_DARK : COLORS.GREEN_DARK,
              borderWidth: 1,
              textStyle: {
                color: '#fff',
              },
              padding: 5,
              formatter: () => option.rate,
            },
            lineStyle: {
              color: option.dealType ? COLORS.RED : COLORS.GREEN,
            },
            symbol: 'none',
            data: [
              // Current value
              {
                yAxis: option.currentRate,
                x: '30%',
              },
            ],
          },
        });
        if (!isBT) {
          clonedTime = moment(option.time, 'HH:mm');
        }
        const dealEnd = clonedTime - moment();
        setTimeout(() => this.removeDeal(option), dealEnd);
      },
    },
  },
  methods: {
    // Deal end mock
    removeDeal(option) {
      const index = _.findIndex(this.chartOptions.series, { name: option.id });
      let isWinner;
      if (option.dealType === DEAL_TYPE.CALL) {
        isWinner = option.currentRate < this.chartOptions.series[0].markLine.data[0].yAxis;
      } else if (option.dealType === DEAL_TYPE.PUT) {
        isWinner = option.currentRate > this.chartOptions.series[0].markLine.data[0].yAxis;
      }
      this.$notify({
        title: isWinner ? 'The forecast came true' : 'The forecast did not come true',
        text: isWinner ? `You win ${option.rate * option.awardMultiplier} GIC` : 'You win 0 GIC',
        type: isWinner ? 'success' : 'error',
      });
      this.chartOptions.series.splice(index, 1);
      this.$refs.chart.mergeOptions(this.chartOptions, true);
    },
    setBTChart() {

    },
    setTTChart() {

    },

    setBTOptions() {
      this.chartOptions.series[0].markLine.data[1].label = {
        formatter: () => 'Deal start',
      };
      this.chartOptions.series[2].markLine.data = [
        {
          xAxis: moment(this.options.markLineX).add(this.interval, 'minute').format(),
          label: {
            formatter: () => 'Deal end',
          },
        },
      ];
    },
    setTTOptions() {
      this.chartOptions.series[0].markLine.data[1].label = {
        position: 'start',
        formatter: (params) => moment(params.value).format('H:mm:ss'),
      };
      this.chartOptions.series[2].markLine.data[0]
        .xAxis = moment(this.options.time, 'HH:mm').format();
    },
  },
};
</script>

<style lang="scss" scoped>
  .chart {
    width: 100%;
  }
</style>
