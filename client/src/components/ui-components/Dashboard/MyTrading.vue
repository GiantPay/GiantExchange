<template>
  <div class="block">
    <div class="header">
      <div class="icon">
        <ChevronDown class="icon-chevron"></ChevronDown>
      </div>
      <div class="header-title">
        <span>My trading</span>
      </div>
    </div>
    <div class="content">
      <div class="item">
        <div class="item-title">
          <span>Trader / Broker</span>
        </div>
        <div class="item-value green">
          <span class="value">+300</span>
          <span class="value-currency">GIC</span>
        </div>
      </div>
      <div class="item" :class="{ active: isActive }">
        <div class="item-title">
          <span>Trader / Trader</span>
        </div>
        <div class="item-value" :class="{ green: !isActive }">
          <span class="value">+300</span>
          <span class="value-currency">GIC</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChevronDown from "../../../assets/icons/ChevronDown.vue";

export default {
  name: "MyTrading",
  components: {
    ChevronDown
  },
  data() {
    return {
      isActive: true
    };
  }
};
</script>

<style scoped>
.block {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  height: 207px;
  box-shadow: 0 3px 25px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 20px;
}
.header {
  display: flex;
  justify-content: flex-start;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 20px;
}
.header-title {
  padding-left: 15px;
}
.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 23px;
  height: 23px;
  background: #f4f5f7;
}
.icon-chevron {
  color: #0e5fda;
}
.content {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-shadow: 0 3px 25px rgba(0, 0, 0, 0.1);
  height: 47px;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 10px;
  border-radius: 5px;
}
.item-title {
  font-size: 12px;
}
.value {
  font-size: 20px;
  font-weight: bold;
}
.value-currency {
  font-size: 16px;
}
.active {
  color: #ffffff;
  background: #0e5fda;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
}
.green {
  color: #00cc5b;
}
.red {
  color: #fd2b2b;
}
</style>
