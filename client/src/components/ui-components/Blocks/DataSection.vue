<template>
  <div class="block">
    <div class="header-block">
      <div class="header">
        <span class="header-title">{{ currentItem.group }}: </span>
        <span class="header-name">{{ currentItem.title }}</span>
      </div>
      <div class="btn-edit">Edit</div>
    </div>
    <div class="content-block">
      <div class="selected-block">
        <div class="selected-wallet">
          <span>Wallet</span>
          <div class="selected-data">
            <div class="show-block">
              {{ user.wallet }}
            </div>
            <div class="label-block"><Copy class="copy"></Copy></div>
          </div>
        </div>
        <div class="selected-balance">
          <span>Balance</span>
          <div class="selected-data">
            <div class="show-block">
              {{ user.balance }}
            </div>
            <div class="label-block">GIC</div>
          </div>
        </div>
      </div>
      <div class="profit-block" :class="{ 'bg-red': currentItem.value < 0 }">
        <div class="profit-title">
          <span>PROFIT</span>
        </div>
        <div class="profit-value" :class="{ plus: currentItem.value > 0 }">
          <span class="value">{{ currentItem.value }}</span>
          <span class="value-currency"> GIC</span>
        </div>
      </div>
      <div class="date-block">
        <DataDashboard :currentItem="currentItem"></DataDashboard>
      </div>
      <div class="chart-block">
        <ChartDashboard :currentItem="currentItem"></ChartDashboard>
      </div>
    </div>
  </div>
</template>

<script>
import DataDashboard from "../Dashboard/DataDashboard.vue";
import ChartDashboard from "../Dashboard/ChartDashboard.vue";
import Copy from "../../../assets/icons/Copy.vue";

export default {
  name: "DataSection",
  components: {
    DataDashboard,
    ChartDashboard,
    Copy
  },
  props: {
    user: {
      type: Object
    },
    currentItem: {
      type: Object
    }
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
  max-width: 100%;
  height: 100%;
  border-radius: 5px;
  box-shadow: 0 3px 25px rgba(0, 0, 0, 0.1);
  padding: 20px;
}
.header-block {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
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
.btn-edit {
  border-radius: 5px;
  color: #ffffff;
  font-size: 12px;
  background-color: #0e5fda;
  padding: 5px 12px;
}
.selected-wallet {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  font-size: 12px;
}
.selected-balance {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  font-size: 12px;
}
.selected-data {
  display: flex;
  justify-content: flex-end;
}
.show-block {
  width: 300px;
  min-width: 250px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border: 1px solid #f4f5f7;
  color: #0e5fda;
  padding: 5px;
  overflow-x: hidden;
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
.plus::before {
  content: "+";
  font-weight: bold;
  font-size: 20px;
}
.bg-red {
  background-color: #fd2b2b;
}
@media only screen and (max-width: 560px) and (min-width: 361px) {
  .show-block {
    width: 200px;
    min-width: 200px;
  }
}
</style>
