<template>
  <div class="card" :class="{ cardActive: isActive }">
    <span class="header">{{currencyFirst}} / {{currencySecond}}</span>
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
        <BarAlignLeft></BarAlignLeft>
    </span>
    </div>
    <b-progress :value="barValue" :variant="barVariant" class="bar"/>
  </div>
</template>

<script>
  import BarAlignLeft from '../../../assets/icons/BarAlignLeft'
  export default {
    name: 'CardAssets',
    components: { BarAlignLeft },
    props: {
      currencyFirst: {
        type: String,
        default: '',
      },
      currencySecond: {
        type: String,
        default: '',
      },
      oracleValue: {
        type: Number,
        default: 0,
      },
      brokerValue: {
        type: Number,
        default: 0,
      },
      isActive: {
        type: Boolean,
        default: false,
      },
      barValue: {
        type: Number,
        default: 0,
      },
      barVariant: {
        type: String,
        default: '',
      },
    },
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
    box-shadow: 0 0 0px rgba(0, 0, 0, 0);
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
  /deep/.icon-svg svg {
    display: block;
    width: 10px;
    height: 10px;
    fill: #C7C7C7;
  }
</style>
