<template>
  <div class="wallet">
    <div class="wallet-left">
      <div class="wallet-balance">
        <span class="wallet-balance-value">{{ roundBalanceValue }}</span>
        <span class="wallet-balance-currency">{{ currency }}</span>
      </div>
      <div class="wallet-address">
        <span class="wallet-address-value">{{ walletAddress }}</span>
      </div>
    </div>
    <div class="wallet-right">
      <div class="wallet-icon">
        <Wallet :width="16" :height="14"></Wallet>
      </div>
    </div>
  </div>
</template>

<script>
import Wallet from "../../../assets/icons/Wallet.vue";

export default {
  name: "Purse",
  components: {
    Wallet
  },
  props: {
    balanceValue: {
      type: Number,
      default: 0
    },
    currency: {
      type: String,
      default: "GIC"
    },
    walletAddress: {
      type: String,
      default: ""
    }
  },
  computed: {
    roundBalanceValue() {
      return +this.balanceValue.toFixed(2);
    }
  }
};
</script>

<style lang="scss" scoped>
.wallet {
  width: 153px;
  height: 45px;
  border-radius: 5px;
  background-color: rgba(77, 148, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.wallet-left {
  width: 70%;
  padding: 10px;
  display: flex;
  justify-content: center;
  color: #ffffff;
  flex-wrap: nowrap;
  flex-direction: column;
}
.wallet-balance {
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
}
.wallet-address {
  width: 100%;
  display: flex;
  justify-content: flex-start;
}
.wallet-balance-value {
  display: inline-block;
  font-size: 12px;
}
.wallet-balance-currency {
  font-family: "Gotham Pro Light";
  display: inline-block;
  font-size: 10px;
  padding-bottom: 1px;
  padding-left: 5px;
}
.wallet-address-value {
  font-family: "Gotham Pro Light";
  display: inline-block;
  font-size: 8px;
  max-width: 100px;
  overflow-x: hidden;
}
.wallet-address:after {
  display: inline-block;
  font-size: 8px;
  content: "...";
}
.wallet-right {
  width: 30%;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid rgba(255, 255, 255, 0.4);
}
svg {
  color: #ffffff;
  opacity: 0.7;
}
</style>
