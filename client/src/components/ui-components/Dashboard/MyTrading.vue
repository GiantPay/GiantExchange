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
    <div class="content-block">
      <div class="item" :class="{ active: !isActive }" @click="changeItem">
        <div class="item-title">
          <span>Trader / Broker</span>
        </div>
        <div class="item-value" :class="{ white: !isActive }">
          <span class="value">+300</span>
          <span class="value-currency">GIC</span>
        </div>
      </div>
      <div class="item" :class="{ active: isActive }" @click="changeItem">
        <div class="item-title">
          <span>Trader / Trader</span>
        </div>
        <div class="item-value" :class="{ white: isActive }">
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
      active: false,
    };
  },
  computed: {
    isActive: {
      get() {
        return this.active
      },
      set(value) {
        this.active = value;
      }
    }
  },
  methods: {
    changeItem() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style scoped>
.block {
  display: flex;
  flex-direction: column;
  width: 100%;
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
.content-block {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 5px 0 5px;
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
.item-value {
  color: #00cc5b;
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
.white {
  color: #ffffff;
}
</style>
