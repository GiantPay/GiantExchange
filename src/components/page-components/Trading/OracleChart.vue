<template>
  <e-charts :options="chartOptions" class="chart"/>
</template>

<script>
import ECharts from 'vue-echarts/components/ECharts.vue';
import 'echarts/index';

import moment from 'moment';

export default {
  name: 'OracleChart',
  components: {
    ECharts,
  },
  props: ['options'],
  data() {
    return {
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
          top: 20,
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
                {
                  yAxis: 0,
                },
                {
                  xAxis: 0,
                  label: {
                    position: 'start',
                    formatter(params) {
                      return moment(params.value).format('H:mm:ss');
                    },
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
        ],
      },
    };
  },
  watch: {
    options: {
      handler(val) {
        this.chartOptions.series[0].data = val.lineData;
        this.chartOptions.xAxis.max = val.xAxisMax;
        this.chartOptions.series[0].markLine.data[0].yAxis = val.markLineY;
        this.chartOptions.series[0].markLine.data[1].xAxis = val.markLineX;
        this.chartOptions.series[1].data = val.scatterData;
      },
      immediate: true,
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  .chart {
    width: 100%;
  }
</style>
