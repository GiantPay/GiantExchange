<template>
  <div class="deal-time">
    <div class="input-number">
      <b-form-select v-model="time" :options="options" @input="timeSelected" />
    </div>
    <div class="buttons-wrap btn-group">
      <button class="btn btn-default" @click="changeTime(-1)">
        -
      </button>
      <button class="btn btn-default" @click="changeTime(1)">
        +
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import moment from "moment";
import _ from "lodash";

import { DEAL_SCHEME } from "@/modules/constants";

export default {
  name: "DealTime",
  props: {
    step: {
      type: Number
    }
  },
  data: () => ({
    time: moment(),
    options: []
  }),
  methods: {
    generateTTTime() {
      const format = "HH:mm";
      const formattedTime = moment().format(format);
      const time = moment(this.roundMinutes(formattedTime), format);
      const roundedTime = time.format(format);

      const timeValues = [
        {
          value: roundedTime,
          text: roundedTime
        }
      ];
      for (let i = 0; i < 10; i++) {
        const roundUp = time.add(this.step, "minute");
        const formattedRoundUp = roundUp.format(format);
        timeValues.push({
          value: formattedRoundUp,
          text: formattedRoundUp
        });
      }

      this.options = timeValues;
      this.time = roundedTime;
      this.$emit("setDealTime", this.time);
    },
    /**
     * Rounds minutes depending on step
     * @param {string} time
     * @param {boolean} flag
     * @returns {string} - time in 'HH:mm'
     */
    roundMinutes(time, flag = true) {
      function format(v) {
        return v < 10 ? `0${v}` : v;
      }

      let minute = time.split(":").reduce((hour, min) => hour * 60 + +min);

      const step = minute / this.step;
      minute = Math.ceil(_.isInteger(step) ? step + 1 : step) * this.step;
      const roundedTime = [Math.floor(minute / 60), minute % 60]
        .map(format)
        .join(":");
      if (
        moment(roundedTime, "HH:mm") - moment() <
          this.currentBroker.buyDealEnd &&
        flag
      ) {
        const newTime = moment(time, "HH:mm").add(1, "minute");
        return this.roundMinutes(newTime.format("HH:mm"), false);
      }
      return roundedTime;
    },
    changeTime(step) {
      const currentIndex = _.findIndex(this.options, { value: this.time });
      if (this.options[currentIndex + step]) {
        this.time = this.options[currentIndex + step].value;
      }
    },
    timeSelected() {
      this.$emit("setDealTime", this.time);
    },

    generateBTTime() {
      const intervalList = [];
      for (let i = 1; i <= this.currentBroker.intervalCount; i++) {
        const formattedDuration = moment.duration(
          this.currentBroker.dealIntervalInMinutes * i,
          "minutes"
        );
        intervalList.push({
          value: formattedDuration.minutes(),
          text: formattedDuration.humanize()
        });
      }

      this.options = intervalList;
      this.time = this.options[0].value;
      this.$emit("setDealTime", this.time);
    },

    chooseBroker(brokerDealScheme) {
      if (brokerDealScheme === DEAL_SCHEME.TRADER_TRADER) {
        this.generateTTTime();
      } else {
        this.generateBTTime();
      }
    }
  },
  computed: mapState("trading", ["currentBroker"]),
  watch: {
    currentBroker: {
      handler(val) {
        this.chooseBroker(val && val.dealScheme);
      },
      immediate: true,
      deep: true
    }
  }
};
</script>

<style lang="scss" scoped>
.deal-time {
  width: 120px;
}
.buttons-wrap {
  display: flex;
  justify-content: stretch;
  margin-top: 5px;
  .btn {
    flex: 1 0;
    box-shadow: none;
  }
}
</style>
