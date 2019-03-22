<template>
  <div>
    <e-charts ref="chart" :options="chartOptions" class="chart" :auto-resize="true"/>
    <table class="table table-striped deal-info">
      <tr>
        <td>
          <div>{{ dealInfo.time.open }}</div>
          <div>{{ dealInfo.time.close }}</div>
        </td>
        <td>
          <div>{{ dealInfo.openValue }}</div>
          <div>{{ dealInfo.closeValue }}</div>
        </td>
      </tr>
      <tr>
        <td>{{ dealInfo.dealInterval }}</td>
        <td>{{ dealInfo.amount }}</td>
      </tr>
      <tr>
        <td>{{ dealInfo.reward }}</td>
        <td :class="{ 'text-danger': dealInfo.status === DEAL_STATUS_CAPTION.FAIL,
            'text-warning': dealInfo.status === DEAL_STATUS_CAPTION.WAITING,
            'text-success': dealInfo.status === DEAL_STATUS_CAPTION.SUCCESS }">
          {{ dealInfo.status }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import ECharts from 'vue-echarts/components/ECharts.vue';
import 'echarts/lib/chart/line';

import { DEAL_STATUS_CAPTION } from '@/modules/constants';

const CHART_DATA = {
  MAIN: 0,
};

export default {
  name: 'DealInfo',
  components: {
    ECharts,
  },
  props: {
    dealInfo: {
      type: Object,
    },
  },
  data: () => ({
    chartOptions: {
      color: '#5c90d2',
      xAxis: {
        type: 'time',
        splitLine: {
          show: false,
        },
      },
      yAxis: {
        type: 'value',
        scale: true,
        position: 'right',
        splitLine: {
          show: false,
        },
      },
      grid: {
        left: 2,
        top: 10,
        right: 50,
      },
      series: [
        {
          type: 'line',
          showSymbol: false,
          data: [],
        },
      ],
    },

    DEAL_STATUS_CAPTION,
  }),
  methods: {
  },
  watch: {
    dealInfo(deal) {
      this.chartOptions.series[CHART_DATA.MAIN].data = [
        [deal.time.open, deal.openValue],
        [deal.time.close, deal.closeValue],
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
  .chart {
    width: 100%;
  }
  .deal-info {
    width: 100%;
    td {
      padding: 10px;
      width: 50%;
    }
  }
</style>
