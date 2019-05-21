<template>
  <e-charts
    ref="chart"
    :options="chartOptions"
    class="chart"
    :auto-resize="true"
  />
</template>

<script>
import ECharts from "vue-echarts/components/ECharts.vue";
import "echarts/lib/chart/line";
import "echarts/lib/chart/effectScatter";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/axisPointer";
import "echarts/lib/component/markPoint";
import "echarts/lib/component/markLine";

import findIndex from "lodash/findIndex";
import find from "lodash/find";
import moment from "moment";

import { mapState } from "vuex";

import { DEAL_SCHEME, COLORS, CHART } from "@/modules/constants";

const markLine = {
  label: {
    backgroundColor: "#ccc",
    borderColor: "#aaa",
    borderWidth: 1,
    shadowBlur: 0,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    textStyle: {
      color: "#222"
    },
    padding: 5
  },
  symbol: "none"
};

const formatTime = buyDealEndCheckpoint => {
  const time = (buyDealEndCheckpoint - moment()) / 1000;
  if (time > 60) {
    return `${Math.floor(time / 60)}m`;
  }
  return `${Math.ceil(time)}s`;
};

export default {
  name: "OracleChart",
  components: {
    ECharts
  },
  props: {
    options: {
      type: Object
    }
  },
  data() {
    return {
      interval: 1,

      buyDealEndCheckpoint: 0,

      counterId: 0,
      counterValue: "",
      optionEndTime: "",
      dealEndCounter: "",
      dealEndCounterId: 0,

      dealsCache: {},

      /**
       * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#title
       */
      chartOptions: {
        color: "#5c90d2",
        tooltip: {
          trigger: "axis",
          showContent: false,
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#ccc",
              borderColor: "#aaa",
              borderWidth: 1,
              shadowBlur: 0,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              textStyle: {
                color: "#222"
              }
            }
          }
        },
        xAxis: {
          type: "time",
          max: 0,
          axisPointer: {
            lineStyle: {
              type: "dashed"
            },
            animation: false
          },
          splitLine: {
            show: false
          },
          maxInterval: 60 * 1000
        },
        yAxis: {
          type: "value",
          scale: true,
          position: "right",
          axisPointer: {
            label: {
              formatter(params) {
                return params.value;
              }
            }
          },
          splitLine: {
            show: false
          }
        },
        grid: {
          left: 50,
          top: 50,
          right: "7%"
        },
        series: [
          // Main line
          {
            type: "line",
            showSymbol: false,
            data: [],
            markLine: {
              ...markLine,
              data: [
                // Current value
                { yAxis: 0 },
                // Current time
                {
                  xAxis: 0,
                  label: {
                    formatter: () => "Deal start"
                  }
                }
              ]
            },
            markPoint: {
              label: {
                formatter: () => this.counterValue
              },
              data: []
            }
          },
          // Scatter
          {
            type: "effectScatter",
            data: [],
            rippleEffect: {
              brushType: "stroke"
            }
          },
          {
            type: "line",
            data: [],
            markLine: {
              ...markLine,
              data: [
                // DealEnd
                {
                  xAxis: new Date(),
                  label: {
                    formatter: () => "Deal end"
                  }
                }
              ]
            },
            markPoint: {
              label: {
                formatter: () => this.dealEndCounter
              },
              itemStyle: {
                color: "#5c90d2"
              },
              data: []
            }
          }
        ]
      }
    };
  },
  computed: {
    ...mapState("trading", ["currentBroker"])
  },
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
      deep: true
    },
    // Chart data
    "options.lineData": {
      handler(val) {
        this.chartOptions.series[0].data = val;
      },
      immediate: true
    },
    "options.xAxisMax": {
      handler(val) {
        this.chartOptions.xAxis.max = val;
      },
      immediate: true
    },
    "options.markLineY": {
      handler(val) {
        this.chartOptions.series[0].markLine.data[0].yAxis = val;
      },
      immediate: true
    },
    "options.markLineX": {
      handler(val) {
        this.chartOptions.series[0].markLine.data[1].xAxis = val;
        // B-T deal end
        if (this.currentBroker.dealScheme === DEAL_SCHEME.BROKER_TRADER) {
          this.chartOptions.series[2].markLine.data[0].xAxis = moment(val)
            .add(this.interval, "minute")
            .format();
        } else if (
          this.currentBroker.dealScheme === DEAL_SCHEME.TRADER_TRADER
        ) {
          if (+moment(val) >= this.buyDealEndCheckpoint) {
            // Add deal end counter(markline/markpoint)
            if (this.chartOptions.series.length > CHART.OPTIONS_ARRAY_LENGTH) {
              const time = moment(this.optionEndTime);
              this.chartOptions.series[CHART.AUXILIARY_LINES].markPoint.data = [
                {
                  xAxis: +time,
                  y: "15%"
                }
              ];
              this.chartOptions.series[
                CHART.AUXILIARY_LINES
              ].markLine.data.push({
                xAxis: +time,
                label: {
                  formatter: () => ""
                }
              });
              clearInterval(this.dealEndCounterId);
              this.dealEndCounterId = setInterval(() => {
                this.dealEndCounter = formatTime(time);
              }, 1000);
            }
            this.$emit("buyDealEnd");
          }
        }
      },
      immediate: true
    },
    "options.scatterData": {
      handler(val) {
        this.chartOptions.series[1].data = val;
      },
      immediate: true
    },

    // Buy time
    "options.time": {
      handler(val) {
        this.interval = val;
        if (this.currentBroker.dealScheme === DEAL_SCHEME.BROKER_TRADER) {
          this.chartOptions.series[2].markLine.data[0].xAxis = moment(
            this.options.markLineX
          )
            .add(this.interval, "minute")
            .format();
        } else {
          this.buyDealEndCheckpoint =
            moment(this.options.time, "HH:mm") - this.currentBroker.buyDealEnd;
          this.chartOptions.series[2].markLine.data[0].xAxis = moment(
            this.options.time,
            "HH:mm"
          ).format();
          this.chartOptions.series[2].markLine.data[1].xAxis = this.buyDealEndCheckpoint;
          this.chartOptions.series[0].markPoint.data = [
            {
              xAxis: this.buyDealEndCheckpoint,
              y: "15%"
            }
          ];
          clearInterval(this.counterId);
          this.counterId = this.runCounter();
        }
      }
    },

    // Buy new option
    "options.newOption": {
      handler(option) {
        const isBT =
          this.currentBroker.dealScheme === DEAL_SCHEME.BROKER_TRADER;

        const time = moment(option.time.open);
        const optionEnd = isBT
          ? moment(option.time.open)
              .add(+option.dealInterval, "minute")
              .format()
          : moment(option.dealInterval, "HH:mm").format();
        this.optionEndTime = optionEnd;

        this.chartOptions.series.push({
          name: option.id,
          type: "line",
          data: [
            [time.format(), option.openValue],
            [optionEnd, option.openValue]
          ],
          lineStyle: {
            color: option.type ? COLORS.RED : COLORS.GREEN
          },
          markLine: {
            label: {
              position: "start",
              backgroundColor: option.type ? COLORS.RED : COLORS.GREEN,
              borderColor: option.type ? COLORS.RED_DARK : COLORS.GREEN_DARK,
              borderWidth: 1,
              textStyle: {
                color: "#fff"
              },
              padding: 5,
              formatter: () => option.amount
            },
            lineStyle: {
              color: option.type ? COLORS.RED : COLORS.GREEN
            },
            symbol: "none",
            data: [
              // Current value
              {
                yAxis: option.openValue,
                x: "30%"
              }
            ]
          }
        });
      }
    }
  },
  methods: {
    // Deal end mock
    removeDeal(option) {
      const index = findIndex(this.chartOptions.series, { name: option.id });
      if (index !== -1) {
        this.chartOptions.series.splice(index, 1);
        this.chartOptions.series[2].markLine.data.splice(2, Infinity);
        this.chartOptions.series[2].markPoint.data = [];
        this.$refs.chart.mergeOptions(this.chartOptions, true);
      }
    },

    dealVisibilitySwitching(id) {
      const deal = find(this.chartOptions.series, { name: id });
      if (deal && deal.data.length) {
        this.dealsCache[id] = {
          data: deal.data,
          markLineData: deal.markLine
        };
        deal.data = [];
        deal.markLine = [];
      } else if (deal) {
        deal.data = this.dealsCache[id].data;
        deal.markLine = this.dealsCache[id].markLineData;
      }
    },

    removeBrokerDeals() {
      this.chartOptions.series.splice(3, Infinity);
      this.$refs.chart.mergeOptions(this.chartOptions, true);
    },

    setBTOptions() {
      this.chartOptions.series[0].markLine.data[1].label = {
        formatter: () => "Deal start"
      };
      this.chartOptions.series[2].markLine.data = [
        {
          xAxis: moment(this.options.markLineX)
            .add(this.interval, "minute")
            .format(),
          label: {
            formatter: () => "Deal end"
          }
        }
      ];
      this.chartOptions.series[0].markPoint.data = [];
    },
    setTTOptions() {
      this.chartOptions.series[0].markLine.data[1].label = {
        position: "start",
        formatter: params => moment(params.value).format("H:mm:ss")
      };
      this.chartOptions.series[2].markLine.data = [
        {
          xAxis: moment(this.options.time, "HH:mm").format(),
          label: {
            formatter: () => "Deal end"
          }
        },
        {
          xAxis: this.buyDealEndCheckpoint,
          label: {
            show: false,
            formatter: () => ""
          }
        }
      ];
    },

    runCounter() {
      return setInterval(() => {
        this.counterValue = formatTime(this.buyDealEndCheckpoint);
      }, 1000);
    }
  }
};
</script>

<style lang="scss" scoped>
.chart {
  width: 100%;
  height: 100%;
}
</style>
