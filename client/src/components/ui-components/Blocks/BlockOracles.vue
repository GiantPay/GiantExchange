<template>
  <div class="block-oracles">
    <div class="header">
      <span>Oracles</span>
      <div class="icon-block">
        <ListUl class="icon"></ListUl>
      </div>
    </div>
    <div class="content-oracle">
      <div class="block-title">
        <div class="main-title">
          <span class="main-title-text">Main Title</span>
          <span class="main-title-id"
            >ID {{oracleId}}</span
          >
        </div>
        <div class="rating">
          <div class="header-rating">
            <span class="text-rating">Rating</span>
            <div class="block-rating">
              <span :class="setTextVariant">{{ ratingValue }}</span>
              <span class="grey">/10</span>
            </div>
          </div>
          <b-progress
            :value="setBarValue"
            :variant="setBarVariant"
          ></b-progress>
        </div>
      </div>
      <div class="block-ping">
        <div class="ping">
          <div class="ping-core"></div>
          <div class="ping-text">
            <span>Ping: {{ pingValue }}</span>
            <span class="grey tx-8">ms</span>
          </div>
        </div>
        <div class="url-block">
          <a class="blue" :href="urlOracles">{{ urlOracles }}</a>
        </div>
      </div>
      <div class="block-value">
        <div class="brokers">
          <span class="header-value">Brokers</span>
          <span class="value">{{ brokersValue }}</span>
        </div>
        <div class="options">
          <span class="header-value">Volume</span>
          <span class="value">{{ optionsValue }} <span class="tx-8">GIC</span></span>
        </div>
        <div class="fee">
          <span class="header-value">Fee</span>
          <span class="value">{{ feeValue }} %</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListUl from "../../../assets/icons/ListUl.vue";

export default {
  name: "BlockOracles",
  components: {
    ListUl
  },
  props: {
    oracleId: {
      type: String,
      default: "634636448"
    },
    ratingValue: {
      type: Number,
      default: 0
    },
    pingValue: {
      type: Number,
      default: 0
    },
    urlOracles: {
      type: String,
      default: ""
    },
    optionsValue: {
      type: Number,
      default: 0
    },
    brokersValue: {
      type: Number,
      default: 0
    },
    feeValue: {
      type: Number,
      default: 0
    }
  },
  computed: {
    setBarValue() {
      return this.ratingValue * 10;
    },
    setBarVariant() {
      if (this.ratingValue < 3) {
        return "danger";
      } else if (3 >= this.ratingValue && this.ratingValue < 5) {
        return "warning";
      } else {
        return "success";
      }
    },
    setTextVariant() {
      if (this.ratingValue < 3) {
        return "red";
      } else if (3 >= this.ratingValue && this.ratingValue < 5) {
        return "yellow";
      } else {
        return "green";
      }
    }
  }
};
</script>

<style scoped>
.block-oracles {
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  box-shadow: 0 3px 25px rgba(0, 0, 0, 0.1);
}
.header {
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 10px;
}
.icon-block {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 23px;
  height: 23px;
  border-radius: 5px;
  background-color: #f4f5f7;
  opacity: 0.6;
}
.icon {
  color: #c7c7c7;
}
.content-oracle {
  display: flex;
  flex-direction: column;
  padding-top: 5px;
}
.block-title {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(199, 199, 199, 0.5);
  padding-bottom: 10px;
  margin-bottom: 10px;
}
.main-title {
  display: flex;
  flex-direction: column;
  width: 50%;
}
.main-title-text {
  font-size: 12px;
}
.main-title-id {
  font-size: 10px;
  color: #c7c7c7;
}
.rating {
  display: flex;
  flex-direction: column;
  width: 50%;
}
.header-rating {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
}
/deep/.progress {
  height: 6px;
}
.block-ping {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(199, 199, 199, 0.5);
  padding-top: 10px;
  padding-bottom: 20px;
  margin-bottom: 10px;
}
.ping {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
}
.ping-core {
  width: 14px;
  height: 14px;
  border-radius: 14px;
  background-color: #00cc5b;
  box-shadow: 0 0 0 1px rgba(0, 204, 91, 0.2);
  animation: pulse 1.5s infinite;
}
@-webkit-keyframes pulse {
  0% {
    -webkit-box-shadow: 0 0 0 1px rgba(0, 204, 91, 0.2);
  }
  70% {
    -webkit-box-shadow: 0 0 0 5px rgba(0, 204, 91, 0.2);
  }
  100% {
    -webkit-box-shadow: 0 0 0 1px rgba(0, 204, 91, 0.2);
  }
}
@keyframes pulse {
  0% {
    -moz-box-shadow: 0 0 0 1px rgba(0, 204, 91, 0.2);
    box-shadow: 0 0 0 1px rgba(0, 204, 91, 0.1);
  }
  70% {
    -moz-box-shadow: 0 0 0 5px rgba(0, 204, 91, 0.2);
    box-shadow: 0 0 0 5px rgba(0, 204, 91, 0.1);
  }
  100% {
    -moz-box-shadow: 0 0 0 1px rgba(0, 204, 91, 0.2);
    box-shadow: 0 0 0 1px rgba(0, 204, 91, 0.2);
  }
}
.ping-text {
  width: 80%;
  font-size: 12px;
}
.url-block {
  width: 50%;
  font-size: 12px;
}
.block-value {
  display: flex;
  justify-content: space-between;
}
.brokers {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.options {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.fee {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.header-value {
  padding-top: 3px;
  padding-bottom: 7px;
  font-size: 12px;
}
.value {
  background-color: #f4f5f7;
  padding: 2px 10px;
  border-radius: 5px;
  font-size: 12px;
  color: #0e5fda;
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
.tx-8 {
  font-size: 8px;
}
</style>
