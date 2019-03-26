<template>
  <div class="card" :class="{ cardActive: isActive }">
    <span class="header">{{currency1}} / {{currency2}}</span>
    <div class="asset">
      <div class="asset-item">
        <span class="asset-name" :class="{ assetNameActive: isActive }">Oracle</span>
        <span class="asset-value">{{oracleValue}}</span>
      </div>
      <div class="asset-item">
        <span class="asset-name" :class="{ assetNameActive: isActive }">Broker</span>
        <span class="asset-value">{{brokerValue}}</span>
      </div>
    </div>
    <div class="icon-block" :class="{iconBlockActive: isActive}">
      <span class="icon" :class="{iconActive: isActive}">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M288 44v40c0 8.837-7.163 16-16 16H16c-8.837 0-16-7.163-16-16V44c0-8.837
          7.163-16 16-16h256c8.837 0 16 7.163 16 16zM0 172v40c0 8.837 7.163 16 16
          16h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16zm16
          312h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16
          16v40c0 8.837 7.163 16 16 16zm256-200H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16
          16h256c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16z"/>
      </svg>
    </span>
    </div>
    <b-progress :value="barValue" :variant="barVariant" class="bar"/>
  </div>
</template>

<script>

export default {
  name: 'CardAssets',
  props: {
    currencyFirst: {
      type: String,
      default: 'BTC',
    },
    currencySe: {
      type: String,
      default: 'USD',
    },
    oracleValue: {
      type: Number,
      default: 175,
    },
    brokerValue: {
      type: Number,
      default: 235,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    barValue: {
      type: Number,
      default: 75,
    },
  },
  data: () => ({
  }),
};
</script>

<style lang="scss" scoped>
  .card {
    width: 140px;
    height: 74px;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0 3px 25px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    color: #4F4F4F;
    border: 0;
  }
  .card:hover {
    box-shadow: 0 0 0px rgba(0, 0, 0, 0);
    transition: all 0.3s ease 0s;
  }
  .header {
    position: absolute;
    left: 10px;
    top: 10px;
    font-size: 12px;
  }
  .asset {
    position: absolute;
    left: 10px;
    top: 30px;
  }
  .asset-item {
    margin-bottom: -4px;
  }
  .asset-name {
    font-size: 10px;
    font-family: "Gotham Pro Light";
  }
  .asset-value {
    font-size: 12px;
    font-family: "Gotham Pro";
    padding-left: 5px;
  }
  .icon-block {
    position: absolute;
    top: 41px;
    left: 88px;
    display: flex;
    width: 23px;
    height: 23px;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.05);
    transform: rotate(-90deg);
    align-items: center;
    justify-content: center;
  }
  .icon {
    position: absolute;
    display: block;
    width: 10px;
    height: 10px;
    margin-top: -7px;
  }
  .icon svg {
    fill: #C7C7C7;
  }
  .bar {
    position: absolute;
    left: 98px;
    top: 34px;
    transform: rotate(-90deg);
    width: 54px;
    height: 6px;
    border-radius: 10px;
  }
  .progress-bar {
    border-radius: 10px;
  }
  .cardActive {
    background-color: #0E5FDA;
    color: #ffffff;
  }
  .assetNameActive {
    opacity: 0.8;
  }
  .iconBlockActive {
    background-color: rgba(255, 255, 255, 0.2);
  }
  .iconActive svg {
    fill: #ffffff;
  }
</style>
