<template>
  <div class="block">
    <div class="header-block">
      <div class="header">
        <span class="header-title">ORACLE</span>
        <span class="header-name">BINANCE</span>
      </div>
      <b-button variant="primary">Edit</b-button>
    </div>
    <div class="content-block">
      <div class="selected-block">
        <div class="selected-wallet">
          <span>Wallet</span>
          <div class="selected-data">
            <div class="show-block">
              GagC6C3PAqdPw9TjGas6C3PAqdPw9TjGas6C3PAqdPw9TjGas1
            </div>
            <div class="label-block"><Copy class="copy"></Copy></div>
          </div>
        </div>
        <div class="selected-balance">
          <span>Balance</span>
          <div class="selected-data">
            <div class="show-block">
              20566.45877
            </div>
            <div class="label-block">GIC</div>
          </div>
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
import DateDashboard from "../Dashboard/DateDashboard.vue";
import ChartDashboard from "../Dashboard/ChartDashboard.vue";
import Copy from "../../../assets/icons/Copy.vue";

export default {
  name: "OracleBinance",
  components: {
    DateDashboard,
    ChartDashboard,
    Copy
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.block {
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 914px;
  border-radius: 5px;
  box-shadow: 0 3px 25px rgba(0, 0, 0, 0.1);
  padding: 20px;
}
.header-block {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  font-size: 18px;
}
.content-block {
  display: flex;
  flex-direction: column;
}
.header-title {
  text-transform: uppercase;
}
.header-name {
  text-transform: uppercase;
  font-weight: 600;
}
.selected-wallet {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.selected-balance {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.selected-data {
  display: flex;
  justify-content: flex-end;
}
.show-block {
  width: 450px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border: 1px solid #f4f5f7;
  color: #0e5fda;
  padding: 5px;
}
.label-block {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 1px solid #f4f5f7;
  background-color: #f4f5f7;
  padding: 5px;
  color: rgb(199, 199, 199);
}
.copy {
  width: 12px;
  height: 12px;
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
