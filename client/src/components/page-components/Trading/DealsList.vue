<template>
  <div class="deals-list">
    <p class="title mb-2">DEALS</p>
    <InputsFilters :optionsSelect="optionsSelect" v-model="buttonSelected" />
    <div v-if="dealsList.length" class="deals-wrap">
      <CardBet
        v-for="deal in deals"
        :key="deal.id"
        :asset="deal.asset"
        :id="deal.id"
        :profitValue="deal.reward"
        :betValue="deal.amount"
        :betDate="deal.time.close"
        :rateOpen="deal.openValue"
        :rateClose="deal.closeValue"
        :active="deal.active"
        :type="deal.type"
        class="card"
      />
    </div>
    <div v-else>
      Deals list is empty
    </div>
  </div>
</template>

<script>
import CardBet from "@/components/ui-components/Cards/CardBet.vue";
import InputsFilters from "@/components/ui-components/Inputs/InputsFilters.vue";

import moment from "moment";

import { DEAL_OWNER } from "@/modules/constants";

export default {
  name: "DealsList",
  components: {
    CardBet,
    InputsFilters
  },
  props: {
    dealsList: {
      type: Array
    }
  },
  data: () => ({
    optionsSelect: [
      { value: DEAL_OWNER.USER, text: "My" },
      { value: DEAL_OWNER.ALL, text: "All" }
    ],
    buttonSelected: DEAL_OWNER.USER
  }),
  computed: {
    deals() {
      return this.dealsList.map(deal => ({
        ...deal,
        time: {
          open: deal.time.open,
          close: moment.utc(deal.time.close)
        }
      }));
    }
  },
  watch: {
    buttonSelected(val) {
      this.$emit("toggleDeals", val);
    }
  }
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 18px;
  font-family: "Gotham Pro", sans-serif;
  font-weight: bold;
  color: #000;
}
.deals-list {
  background: #fff;
  padding: 10px;
  border-radius: 10px;
}
.card {
  margin: 10px;
}
</style>
