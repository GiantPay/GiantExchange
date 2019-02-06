<template>
  <div>
    <v-chart
      :options="option"
    />
  </div>
</template>

<script>
import ECharts from 'vue-echarts/components/ECharts.vue';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/legendScroll';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

export default {
  name: 'GeneralChartPie',
  components: {
    'v-chart': ECharts,
  },
  props: {
    chartData: {
      type: Object,
    },
  },
  data() {
    return {
      grid: {
        width: 300,
      },
      option: {
        title: {
          text: '',
          subtext: '',
          x: 'center',
          padding: [5, 0, 20, 10],
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          bottom: 10,
          left: 'center',
        },
        series: [
          {
            name: '',
            type: 'pie',
            radius: ['40%', '60%'],
            avoidLabelOverlap: false,
            data: [],
            labelLine: {
              normal: {
                show: false,
              },
            },
            label: {
              normal: {
                show: false,
                position: 'center',
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '20',
                  fontWeight: 'bold',
                },
              },
            },
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
      },
    };
  },
  watch: {
    chartData: {
      handler() {
        this.updateChartData();
      },
      deep: true,
    },
  },
  methods: {
    updateChartData() {
      this.option.title.text = this.chartData.title.text;
      this.option.title.subtext = this.chartData.title.subtext;
      this.option.series[0].name = this.chartData.title.text;
      this.option.series[0].data = this.chartData.seriesData;
    },
  },
};
</script>

<style lang="scss" scoped>
  .echarts {
    display: block;
    margin: 0 auto;
    width: 400px;
    height: 300px;
  }
</style>
