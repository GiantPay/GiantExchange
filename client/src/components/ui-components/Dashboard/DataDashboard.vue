<template>
  <div class="data-block">
    <div v-if="!isTrading">
      <div class="item-row">
        <div class="item-cell br-right br-bottom">
          <div class="item-title">
            <span class="data-title">Asset</span>
          </div>
          <div class="item-data flex-block">
            <span class="data-value">{{ currentItem.asset }}</span>
            <div class="icon-block">
              <ExternalLinkAlt class="icon"></ExternalLinkAlt>
            </div>
          </div>
        </div>
        <div class="item-cell br-bottom">
          <div class="item-title">
            <span class="data-title">Rating</span>
          </div>
          <div class="item-data">
            <div class="block-rating">
              <span :class="setTextVariant">{{ currentItem.rating }}</span>
              <span class="grey">/10</span>
            </div>
            <b-progress
              :value="setBarValue"
              :variant="setBarVariant"
              :max="10"
            ></b-progress>
          </div>
        </div>
      </div>
      <div class="item-row">
        <div class="item-cell br-right br-bottom">
          <div class="item-title">
            <span class="data-title">Fee</span>
          </div>
          <div class="item-data">
            <span class="data-value">{{ currentItem.fee }}%</span>
          </div>
        </div>
        <div class="item-cell br-bottom">
          <div class="item-title">
            <span class="data-title">{{ currentItem.items.title }}</span>
          </div>
          <div class="item-data">
            <span class="data-value">{{ currentItem.items.value }}</span>
          </div>
        </div>
      </div>
      <div class="item-row">
        <div class="item-cell br-right br-bottom">
          <div class="item-title">
            <span class="data-title">Deals</span>
          </div>
          <div class="item-data">
            <span class="data-value">{{ currentItem.deals }}</span>
          </div>
        </div>
        <div class="item-cell br-bottom">
          <div class="item-title">
            <span class="data-title">Volume</span>
          </div>
          <div class="item-data">
            <span class="data-value">
              {{ currentItem.volume }}
              <span class="tx-14">GIC</span>
            </span>
          </div>
        </div>
      </div>
      <div class="item-row">
        <div class="item-cell br-right">
          <div class="item-title">
            <span class="data-title">AVG fee</span>
          </div>
          <div class="item-data">
            <span class="data-value">
              {{ currentItem.AVGfee }}
              <span class="tx-14">GIC</span>
            </span>
          </div>
        </div>
        <div class="item-cell">
          <div class="item-title">
            <span class="data-title">AVG deal time</span>
          </div>
          <div class="item-data">
            <span class="data-value">
              {{ currentItem.AVGdealTime }}
              <span class="tx-14">sec</span>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div v-if="isTrading">
      <div class="item-row">
        <div class="item-cell br-right br-bottom">
          <div class="item-title">
            <span class="data-title">Deals</span>
          </div>
          <div class="item-data">
            <span class="data-value">{{ currentItem.deals }}</span>
          </div>
        </div>
        <div class="item-cell br-bottom">
          <div class="item-title">
            <span class="data-title">Bet volume</span>
          </div>
          <div class="item-data">
            <span class="data-value">
              {{ currentItem.betVolume }}
              <span class="tx-14">GIC</span>
            </span>
          </div>
        </div>
      </div>
      <div class="item-row">
        <div class="item-cell br-right">
          <div class="item-title">
            <span class="data-title">Win deals</span>
          </div>
          <div class="item-data">
            <span class="data-value">{{ currentItem.winDeals }}</span>
          </div>
        </div>
        <div class="item-cell">
          <div class="item-title">
            <span class="data-title">Lost deals</span>
          </div>
          <div class="item-data">
            <span class="data-value">{{ currentItem.loseDeals }}</span>
          </div>
        </div>
      </div>
      <div class="item-row">
        <div class="item-cell br-right">
          <div class="w-100">
            <p class="green">{{ setBetWin }}%</p>
            <b-progress
              :value="currentItem.betWin"
              :variant="success"
              :max="currentItem.betWin + currentItem.betLose"
            ></b-progress>
          </div>
        </div>
        <div class="item-cell">
          <div class="w-100">
            <p class="red">{{ setBetLose }}%</p>
            <b-progress
              :value="currentItem.betLose"
              :variant="danger"
              :max="currentItem.betWin + currentItem.betLose"
            ></b-progress>
          </div>
        </div>
      </div>
      <div class="item-row">
        <div class="item-cell br-right">
          <div class="w-100 text-center">
            <span class="data-value bg-green"
              >+ {{ currentItem.betWin }} <span class="tx-14">GIC</span></span
            >
          </div>
        </div>
        <div class="item-cell">
          <div class="w-100 text-center">
            <span class="data-value bg-red "
              >- {{ currentItem.betLose }} <span class="tx-14">GIC</span></span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ExternalLinkAlt from "../../../assets/icons/ExternalLinkAlt.vue";

export default {
  name: "DataDashboard",
  components: {
    ExternalLinkAlt
  },
  props: {
    currentItem: {
      type: Object
    }
  },
  computed: {
    isTrading() {
      if (this.currentItem.group === "TRADING") {
        return true;
      } else {
        return false;
      }
    },
    setBarValue() {
      return this.currentItem.rating;
    },
    setBarVariant() {
      if (this.currentItem.rating < 4) {
        return "danger";
      } else if (4 <= this.currentItem.rating && this.currentItem.rating < 6) {
        return "warning";
      } else {
        return "success";
      }
    },
    setTextVariant() {
      if (this.currentItem.rating < 4) {
        return "red";
      } else if (4 <= this.currentItem.rating && this.currentItem.rating < 6) {
        return "yellow";
      } else {
        return "green";
      }
    },
    setBetWin() {
      let around =
        (this.currentItem.betWin /
          (this.currentItem.betWin + this.currentItem.betLose)) *
        100;
      return around.toFixed(2);
    },
    setBetLose() {
      let around =
        (this.currentItem.betLose /
          (this.currentItem.betWin + this.currentItem.betLose)) *
        100;
      return around.toFixed(2);
    }
  },
  data() {
    return {
      success: "success",
      danger: "danger"
    };
  }
};
</script>

<style scoped>
.data-block {
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0 3px 25px rgba(0, 0, 0, 0.1);
  height: 100%;
}

.item-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item-cell {
  width: 50%;
  height: 62px;
  display: flex;
  padding: 5px 15px;
  margin: 3px 0;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}

.item-title {
  align-self: self-start;
}

.item-data {
  align-self: flex-end;
}

.data-title {
  font-size: 12px;
}

.data-value {
  background-color: #f4f5f7;
  border-radius: 5px;
  display: inline-block;
  padding: 5px 10px;
  color: #0e5fda;
  font-size: 16px;
}

.flex-block {
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon-block {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 34px;
  margin-left: 5px;
  background: #f4f5f7;
  border-radius: 5px;
}

.icon {
  color: #c7c7c7;
  width: 20px;
  height: 20px;
}

.block-rating {
  width: 114px;
}

/deep/ .progress {
  height: 6px;
  width: 100%;
}

.green {
  color: #00cc5b;
}

.yellow {
  color: #e8c900;
}

.red {
  color: #fd2b2b;
}

.grey {
  color: #c7c7c7;
}

.blue {
  color: #0e5fda;
}
.bg-green {
  color: #ffffff;
  background-color: #00cc5b;
}
.bg-red {
  color: #ffffff;
  background-color: #fd2b2b;
}

.tx-14 {
  font-size: 14px;
}

.br-right {
  border-right: 1px solid rgba(210, 210, 210, 0.7);
}

.br-bottom {
  border-bottom: 1px solid rgba(210, 210, 210, 0.7);
}
@media only screen and (max-width: 460px) and (min-width: 320px) {
  .data-block {
    display: flex;
    flex-direction: column;
    padding: 20px 5px;
    width: 100%;
    border-radius: 5px;
    box-shadow: 0 3px 25px rgba(0, 0, 0, 0.1);
    height: 100%;
  }
  .data-value {
    font-size: 14px;
  }
  .icon-block {
    display: none;
  }
  .block-rating {
    width: 90px;
  }
}
</style>
