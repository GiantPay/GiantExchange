<template>
  <div class="deals-list">
    <div class="header">
      <span class="title">DEALS</span>
      <div class="select">
        <InputsFilters
          :optionsSelect="optionsSelect"
          v-model="buttonSelected"
        />
      </div>
    </div>
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
    <div class="empty-dials" v-else>
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
.deals-list {
  background: #fff;
  border-radius: 10px;
  height: 100%;
  box-shadow: 0 3px 25px rgba(0, 0, 0, 0.1);
}
.header {
  display: flex;
  flex-direction: column;
  padding: 20px 30px 0 30px;
}
.title {
  font-size: 18px;
  font-family: "Gotham Pro", sans-serif;
  font-weight: bold;
}
.card {
  margin: 10px 10px;
}
.deals-wrap {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-height: 85%;
  overflow-y: scroll;
  margin: auto;
  padding: 0 20px;
}
.empty-dials {
  padding: 0 30px;
}
@media only screen and (max-width: 1140px) and (min-width: 541px) {
  .deals-list {
    height: 221px;
    width: 100%;
    padding-left: 10px;
    padding-right: 30px;
  }
  .header {
    display: flex;
    flex-direction: row;
    padding: 20px 30px 0 30px;
  }
  .select {
    padding-left: 30px;
  }
  .deals-wrap {
    display: flex;
    flex-wrap: nowrap;
    max-height: 160px;
    justify-content: start;
  }
  .card {
    min-width: 196px;
  }
}
@media only screen and (max-width: 540px) and (min-width: 320px) {
  .deals-list {
    height: 420px;
    width: 100%;
    padding-left: 30px;
    padding-right: 30px;
  }
  .header {
    display: flex;
    flex-direction: column;
    padding: 20px 30px 0 30px;
  }
  .deals-wrap {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    height: 290px;
  }

  .card {
    min-width: 196px;
  }
}
</style>
