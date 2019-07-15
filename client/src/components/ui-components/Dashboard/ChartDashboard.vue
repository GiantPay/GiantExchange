<template>
  <div class="chart-block">
    <div class="icon-block">
      <Refresh class="icon"></Refresh>
    </div>
    <v-chart :options="option" />
  </div>
</template>

<script>
import ECharts from "vue-echarts/components/ECharts.vue";
import "echarts/lib/chart/bar";
import "echarts/lib/component/legendScroll";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import Refresh from "../../../assets/icons/Refresh.vue";

export default {
  name: "ChartDashboard",
  components: {
    "v-chart": ECharts,
    Refresh
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
      let positiveArr = deals.map(function(item) {
        if (item.profit.value > 0) {
          return item.profit.value;
        } else {
          return 0;
        }
      });
      return positiveArr;
    },
    setNegativeValue() {
      let deals = this.currentItem.dealsTab;
      let positiveArr = deals.map(function(item) {
        if (item.profit.value < 0) {
          return item.profit.value;
        } else {
          return 0;
        }
      });
      return positiveArr;
    }
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
          height: "85%",
          top: "13%",
          left: "3%",
          right: "3%",
          bottom: "5%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: [
              "01.07.19",
              "02.07.19",
              "03.07.19",
              "04.07.19",
              "05.07.19",
              "06.07.19",
              "07.07.19",
              "08.07.19",
              "09.07.19",
              "10.07.19",
              "11.07.19",
              "12.07.19",
            ],
            axisLine: {
              lineStyle: {
                color: "#C7C7C7",
              }
            },
            axisTick: {
              alignWithLabel: true,
              show: false,
            },
            axisLabel: {
              color: "#4F4F4F",
              fontSize: 10,
              fontWeight: "lighter"
            }
          }
        ],
        yAxis: [
          {
            position: "right",
            type: "value",
            splitNumber: 8,
            axisLine: {
              lineStyle: {
                color: "#C7C7C7",
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              lineStyle: {
                color: "#F9F9F9"
              }
            },
            axisLabel: {
              color: "#4F4F4F",
              fontSize: 10,
              fontWeight: "lighter"
            }
          }
        ],
        series: [
          {
            name: "Profit",
            type: "bar",
            stack: "one",
            barWidth: "100%",
            data: [],
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: '#03FE73'
                }, {
                  offset: 1, color: '#00CC5B'
                }],
                global: false
              }
            }
          },
          {
            name: "Lose",
            type: "bar",
            stack: "one",
            barWidth: "100%",
            data: [],
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: '#C31717'
                }, {
                  offset: 1, color: '#FC2A2A'
                }],
                global: false
              }
            }
          }
        ]
      }
    };
  }
};
</script>

<style scoped>
.chart-block {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 350px;
  padding-top: 40px;
}
.icon-block {
  position: absolute;
  top: 15%;
  right: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  margin-left: 5px;
  background: #f4f5f7;
  border-radius: 5px;
  cursor: pointer;
  z-index: 10000;
}

.icon {
  color: #c7c7c7;
  width: 15px;
  height: 15px;
}

@media only screen and (max-width: 1420px) and (min-width: 1141px) {
  .chart-block {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 390px;
    padding: 20px 10px;
  }
}
@media only screen and (max-width: 1140px) and (min-width: 361px) {
  .chart-block {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 390px;
    padding: 20px 10px;
  }
}
</style>
