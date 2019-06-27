<template>
  <div class="block">
    <div class="header">
      <div class="header-left">
        <div class="icon">
          <ChevronDown class="icon-chevron"></ChevronDown>
        </div>
        <div class="header-title">
          <span>My oracles</span>
        </div>
      </div>
      <InputWithButton
        :placeholder="placeholder"
        :disabled="disabled"
        v-model="assetsSearch"
      ></InputWithButton>
    </div>
    <div class="content-block">
      <div class="item">
        <div class="item-title">
          <span>BitMEX</span>
        </div>
        <div class="item-value green">
          <span class="value">+300</span>
          <span class="value-currency">GIC</span>
        </div>
      </div>
      <div class="item" :class="{ active: isActive }">
        <div class="item-title">
          <span>Binance</span>
        </div>
        <div class="item-value" :class="{ green: !isActive }">
          <span class="value">+300</span>
          <span class="value-currency">GIC</span>
        </div>
      </div>
      <div class="item">
        <div class="item-title">
          <span>Huobi</span>
        </div>
        <div class="item-value green">
          <span class="value">+300</span>
          <span class="value-currency">GIC</span>
        </div>
      </div>
      <div class="item">
        <div class="item-title">
          <span>Huobi</span>
        </div>
        <div class="item-value green">
          <span class="value">+300</span>
          <span class="value-currency">GIC</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChevronDown from "../../../assets/icons/ChevronDown.vue";
import InputWithButton from "../Inputs/InputWithButton.vue";

export default {
  name: "MyOracles",
  components: {
    ChevronDown,
    InputWithButton
  },
  data() {
    return {
      isActive: true,
      placeholder: "Name",
      disabled: false,
      assetsSearch: ""
    };
  }
};
</script>

<style scoped>
.block {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 300px;
  box-shadow: 0 3px 25px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 20px;
}
.header {
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 10px;
}
.header-left {
  display: flex;
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
.content-block {
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: hidden;
  padding: 15px 5px 0 5px;
}
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-shadow: 0 3px 25px rgba(0, 0, 0, 0.1);
  min-height: 47px;
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
::-webkit-scrollbar-button {
  height: 0;
  background-color: #e1e1e1;
  border-radius: 3px;
}
::-webkit-scrollbar-track {
  background-color: #f4f5f7;
}
::-webkit-scrollbar-track-piece {
  background-color: #f4f5f7;
}
::-webkit-scrollbar-thumb {
  height: 10px;
  background-color: #e1e1e1;
  border-radius: 3px;
}
::-webkit-scrollbar-corner {
  background-color: #f4f5f7;
}
::-webkit-resizer {
  background-color: #e1e1e1;
}
</style>
