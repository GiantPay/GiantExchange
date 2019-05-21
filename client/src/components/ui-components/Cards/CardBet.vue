<template>
  <div class="card-bet" :class="{ 'card-bet-active': active }">
    <div class="header">
      <div
        class="header-currency"
        :class="{ 'header-currency-active': active }"
      >
        <span>{{ asset }}</span>
      </div>
      <div class="header-id-bet">
        <span>ID {{ id }}</span>
      </div>
    </div>
    <div class="body">
      <div v-if="!active">
        <div class="body-profit">
          <span
            class="profit-value"
            :class="[{ 'green-plus': isProfit }, { red: !isProfit }]"
          >
            {{ profitValue }}
          </span>
          <span
            class="profit-gic"
            :class="[{ green: isProfit }, { red: !isProfit }]"
          >
            {{ currencyBet }}
          </span>
        </div>
        <div class="body-bet">
          <span class="bet-value">{{ betValue }}</span>
          <span class="bet-gic">{{ currencyBet }}</span>
        </div>
      </div>

      <div v-else class="body-bet-active">
        <div class="body-bet-block-left">
          <span class="active-rate-value-second">{{ rateClose }}</span>
          <span class="active-rate-value-first">
            {{ rateOpen }}
            <span v-if="isCompareRate" class="rate-icon-green">
              <CaretUp />
            </span>
            <span v-if="!isCompareRate" class="rate-icon-red">
              <CaretDown />
            </span>
          </span>
        </div>
        <div class="body-bet-block-right">
          <span class="active-bet-profit">
            {{ profitValue }}
            <span class="active-profit-gic">{{ currencyBet }}</span>
          </span>
          <span class="active-bet-value">
            {{ betValue }}
            <span class="active-bet-gic">{{ currencyBet }}</span>
          </span>
        </div>
      </div>
    </div>
    <div class="footer" v-if="!active">
      <div class="footer-data">
        <span class="data-icon">
          <Clock />
        </span>
        <span class="data-value">{{ getFormattedDate(betDate) }}</span>
      </div>
      <div class="footer-rate">
        <span class="rate-value">{{ rateOpen }} &#8739; {{ rateClose }}</span>
        <span v-if="isCompareRate" class="rate-icon-green">
          <CaretUp />
        </span>
        <span v-if="!isCompareRate" class="rate-icon-red">
          <CaretDown />
        </span>
      </div>
    </div>
    <div class="footer" v-else>
      <div class="time-bar">
        {{ timerValue }}
      </div>
      <b-progress
        :value="barValue"
        :max="setBarMax"
        :variant="barVariant"
        class="bar"
      />
    </div>
  </div>
</template>

<script>
import moment from "moment";
import Clock from "@/assets/icons/Clock.vue";
import CaretDown from "@/assets/icons/CaretDown.vue";
import CaretUp from "@/assets/icons/CaretUp.vue";

const dateFormat = "MMMM Do YYYY";

import { DEAL_TYPE } from "@/modules/constants";

export default {
  name: "CardBet",
  components: {
    Clock,
    CaretDown,
    CaretUp
  },
  props: {
    asset: {
      type: String
    },
    id: {
      type: String
    },
    profitValue: {
      type: Number,
      default: 0
    },
    currencyBet: {
      type: String,
      default: "GIC"
    },
    betValue: {
      type: Number,
      default: 0
    },
    betDate: {
      type: Object
    },
    rateOpen: {
      type: Number,
      default: 0
    },
    rateClose: {
      type: Number,
      default: 0
    },
    active: {
      type: Boolean,
      default: true
    },
    barVariant: {
      type: String,
      default: "Primary"
    },
    type: {
      type: Number
    }
  },
  data() {
    return {
      barValue: 1,
      intervalId: 0,
      timerValue: {},

      DEAL_TYPE
    };
  },
  computed: {
    isProfit() {
      return this.profitValue > 0;
    },
    isCompareRate() {
      return this.type === DEAL_TYPE.CALL;
    },
    setBarMax() {
      return moment(this.betDate).diff(moment.utc());
    }
  },
  created() {
    this.startInterval();
  },
  methods: {
    getFormattedDate(date) {
      return moment(date)
        .utc()
        .format(dateFormat);
    },
    calculateTimeBar() {
      const currentDate = moment.utc();
      this.barValue = moment(this.betDate).diff(currentDate);
      this.timerValue = moment(
        Math.ceil(this.betDate.diff(currentDate) / 1000) * 1000
      )
        .utc()
        .format("HH:mm:ss");
    },
    setStatusBet() {
      clearInterval(this.intervalId);
    },
    startInterval() {
      this.calculateTimeBar();
      this.intervalId = setInterval(this.calculateTimeBar, 1000);
    }
  },
  watch: {
    barValue: {
      handler(val) {
        if (val <= 0) {
          this.setStatusBet();
        }
      },
      immediate: true
    }
  }
};
</script>

<style lang="scss" scoped>
.card-bet {
  width: 188px;
  height: 112px;
  background-color: #f4f5f7;
  border-radius: 5px;
  border: 0;
  padding: 4px 10px;
  font-family: "Gotham Pro";
}

.header {
  display: flex;
  position: relative;
  width: 100%;
  height: 20%;
  justify-content: space-between;
  align-items: center;
}

.body {
  display: flex;
  position: relative;
  width: 100%;
  height: 60%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.footer {
  display: flex;
  position: relative;
  width: 100%;
  height: 20%;
  justify-content: space-between;
}

.header-currency > span {
  font-family: "Gotham Pro";
  font-size: 10px;
  opacity: 0.6;
  color: #555555;
}

.header-id-bet {
}

.header-id-bet > span {
  font-family: "Gotham Pro Light";
  font-size: 8px;
  color: #c7c7c7;
}

.body-profit {
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.profit-value {
  display: block;
  font-family: "Gotham Pro";
  font-size: 20px;
  color: #c7c7c7;
}

.profit-gic {
  display: block;
  font-family: "Gotham Pro Light";
  font-size: 10px;
  color: #c7c7c7;
  opacity: 0.6;
  padding-left: 4px;
  padding-bottom: 4px;
}

.body-bet {
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.bet-value {
  font-family: "Gotham Pro Light";
  font-size: 10px;
  color: #c7c7c7;
}

.bet-gic {
  font-family: "Gotham Pro Light";
  font-size: 6px;
  color: #c7c7c7;
  padding-left: 2px;
  padding-bottom: 2px;
}

.footer-data {
  display: flex;
  width: 50%;
  justify-content: flex-start;
  align-items: center;
}

.data-icon {
  font-size: 10px;
  padding-right: 2px;
  color: #c7c7c7;
}

.data-value {
  font-family: "Gotham Pro Light";
  font-size: 8px;
  color: #c7c7c7;
}

.footer-rate {
  display: flex;
  width: 50%;
  justify-content: flex-end;
  align-items: center;
}

.rate-value {
  font-family: "Gotham Pro Light";
  font-size: 8px;
  color: #c7c7c7;
}

.rate-icon-red {
  font-size: 10px;
  padding-left: 2px;
  color: #fd2b2b;
}

.rate-icon-green {
  font-size: 10px;
  padding-left: 2px;
  color: #00cc5b;
}

.green {
  color: #00cc5b;
}

.green-plus {
  color: #00cc5b;
}

.green-plus::before {
  content: "+";
}

.red {
  color: #fd2b2b;
}

/*Active*/
.card-bet-active {
  background-color: #ffffff;
  box-shadow: 0 6px 5px 0px rgba(0, 0, 0, 0.2);
}

.header-currency-active > span {
  opacity: 1;
  font-weight: bold;
}

.body-bet-active {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.body-bet-block-left {
  display: flex;
  width: 50%;
  flex-direction: column;
}

.body-bet-block-right {
  display: flex;
  width: 50%;
  flex-direction: column;
}

.active-rate-value-second {
  font-size: 14px;
  justify-content: flex-start;
  align-items: center;
}

.active-rate-value-first {
  font-size: 10px;
  align-items: center;
}

.active-bet-profit {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  font-size: 14px;
}

.active-profit-gic {
  font-family: "Gotham Pro Light";
  font-size: 10px;
  opacity: 0.6;
  padding-bottom: 1px;
  padding-left: 3px;
}

.active-bet-value {
  font-family: "Gotham Pro Light";
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  font-size: 10px;
}

.active-bet-gic {
  font-family: "Gotham Pro Light";
  font-size: 6px;
  opacity: 0.6;
  padding-left: 2px;
  padding-bottom: 2px;
}

.bar {
  position: absolute;
  top: 1px;
  left: -10px;
  width: 188px;
  height: 24px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.progress {
  background-color: #f4f5f7;
}

.time-bar {
  position: absolute;
  top: 7px;
  left: 0;
  font-size: 8px;
  color: #c7c7c7;
  z-index: 1000;
}
</style>
