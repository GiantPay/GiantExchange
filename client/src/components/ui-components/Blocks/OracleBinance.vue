<template>
  <div class="block">
    <div class="header-block">
      <div class="header">
        <span class="header-title">Oracle</span>
        <span class="header-name">Binance</span>
      </div>
      <b-button variant="primary">Edit</b-button>
    </div>
    <div class="content-block">
      <div class="selected-block">
        <div class="selected-wallet">
          <span>Wallet</span>
          <InputWithLabel
            :placeholder="placeholder"
            :disabled="disabled"
            :labelValue="labelValue"
            :minValue="minValue"
            :maxValue="maxValue"
            v-model="rate"
          ></InputWithLabel>
        </div>
        <div class="selected-balance">
          <span>Balance</span>
          <InputWithLabel
            :placeholder="placeholder"
            :disabled="disabled"
            :labelValue="labelValue"
            :minValue="minValue"
            :maxValue="maxValue"
            v-model="rate"
          ></InputWithLabel>
        </div>
      </div>
      <div class="profit-block">
        <div class="profit-title">
          <span>Huobi</span>
        </div>
        <div class="profit-value">
          <span class="value">+300</span>
          <span class="value-currency">GIC</span>
        </div>
      </div>
      <div class="date-block">
        <DateDashboard></DateDashboard>
      </div>
      <div class="chart-block">
        <ChartDashboard></ChartDashboard>
      </div>
    </div>
  </div>
</template>

<script>
  import InputWithLabel from "../Inputs/InputWithLabel.vue";
  import DateDashboard from "../Dashboard/DateDashboard.vue";
  import ChartDashboard from "../Dashboard/ChartDashboard.vue";
  export default {
    name: "OracleBinance",
    components: {
      InputWithLabel,
      DateDashboard,
      ChartDashboard
    },
    data() {
      return {
        placeholder: "Input text",
        disabled: false,
        labelValue: "GIC",
        minValue: 100,
        maxValue: 1000,
        rate: 150,
        valueInput: 0,
      }
    }
  }
</script>

<style scoped>
  .block {
    display: flex;
    flex-direction: column;
    width: 600px;
    height: 914px;
    border-radius: 5px;
    box-shadow: 0 3px 25px rgba(0, 0, 0, 0.1);
  }
  .header-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .content-block {
    display: flex;
    flex-direction: column;
  }
  .selected-block {
    display: flex;
    flex-direction: column;
  }
  .selected-wallet {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .selected-balance {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .profit-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    min-height: 47px;
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 10px;
    border-radius: 5px;
    background: #00cc5b;
    color: #ffffff;
  }
  .profit-title {
    font-size: 12px;
    text-transform: uppercase;
  }
  .value {
    font-size: 20px;
    font-weight: bold;
  }
  .value-currency {
    font-size: 16px;
  }

</style>