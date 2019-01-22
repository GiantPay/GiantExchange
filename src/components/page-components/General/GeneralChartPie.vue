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
      option: {
        title: {
          text: this.chartData.title.text,
          subtext: this.chartData.title.subtext,
          x: 'center',
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          top: 30,
          orient: 'vertical',
          x: 'right',
        },
        series: [
          {
            name: this.chartData.title.text,
            type: 'pie',
            radius: ['40%', '60%'],
            avoidLabelOverlap: false,
            data: this.chartData.seriesData,
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
  methods: {

  },
};
</script>

<style lang="scss" scoped>

</style>
