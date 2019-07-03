<template>
  <div class="chart-block">
    <v-chart :options="option" />
  </div>
</template>

<script>
import ECharts from "vue-echarts/components/ECharts.vue";
import "echarts/lib/chart/bar";
import "echarts/lib/component/legendScroll";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";


export default {
  name: "ChartDashboard",
  components: {
    "v-chart": ECharts
  },
  props: {
    currentItem: {
      type: Object
    }
  },
  mounted() {
    this.updateChartData();
  },
  watch: {
    currentItem: {
      handler() {
        this.updateChartData();
      },
      deep: true
    }
  },
  methods: {
    updateChartData() {
      this.option.series[0].data = this.setPositiveValue();
      this.option.series[1].data = this.setNegativeValue();
    },
    setPositiveValue() {
      let deals = this.currentItem.dealsTab;
      let positiveArr = deals.map(
        function(item) {
          if (item.profit.value > 0) {
            return item.profit.value;
          }else {
            return 0
          }
        }
      );
      return positiveArr;
    },
    setNegativeValue() {
      let deals = this.currentItem.dealsTab;
      let positiveArr = deals.map(
        function(item) {
          if (item.profit.value < 0) {
            return item.profit.value;
          }else {
            return 0
          }
        }
      );
      return positiveArr;
    },
  },
  data() {
    return {
      option: {
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        grid: {
          width: "95%",
          height: "95%",
          top: '5%',
          left: "3%",
          right: "3%",
          bottom: "5%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: ["01.07.19", "02.07.19", "03.07.19", "04.07.19", "05.07.19", "06.07.19", "07.07.19", "08.07.19", "09.07.19", "10.07.19", "11.07.19", "12.07.19", "13.07.19"],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            position: 'right',
            type: "value"
          }
        ],
        series: [
          {
            name: "Profit",
            type: "bar",
            stack: 'one',
            barWidth: "100%",
            data: [],
            itemStyle: {
              color: "#04FF74"
            },
          },
          {
            name: "Lose",
            type: "bar",
            stack: 'one',
            barWidth: "100%",
            data: [],
            itemStyle: {
              color: "#FD2B2B"
            },
          }
        ]
      }
    };
  }
};
</script>

<style scoped>
.chart-block {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 350px;
  padding-top: 40px;
}
@media only screen and (max-width: 1420px) and (min-width: 1141px) {
  .chart-block {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 350px;
    padding: 20px 10px;
  }
}
@media only screen and (max-width: 1140px) and (min-width: 461px) {
  .chart-block {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 350px;
    padding: 20px 10px;
  }
}
</style>
