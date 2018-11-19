<template>
  <div class="transaction-form">
    <b-row class="justify-content-between">
      <b-col>
        <DealTime :step="step" @setDealTime="setDealTime" :broker="broker" />
      </b-col>
      <b-col>
        <!--<DealValue />-->
        <b-form-input v-model="rate"
                      type="number" />
      </b-col>
    </b-row>
    <div class="deal-buttons">
      <b-button @click="buyOption(dealType.CALL)">Call</b-button>
      <b-button @click="buyOption(dealType.PUT)">Put</b-button>
    </div>
  </div>
</template>

<script>
import DealTime from '@/components/page-components/Trading/DealTime.vue';
import DealValue from '@/components/page-components/Trading/DealValue.vue';

const DEAL_TYPE = {
  CALL: 0,
  PUT: 1,
};

export default {
  name: 'TransactionForm',
  components: {
    DealTime,
    DealValue,
  },
  props: {
    broker: {
      type: Object,
    },
  },
  data: () => ({
    // TODO -- get step from Giant Oracle
    step: 5,
    rate: 100,
    dealType: DEAL_TYPE,
  }),
  methods: {
    getStep() {
    },
    setDealTime(time) {
      this.$emit('setDealTime', time);
    },
    buyOption(dealType) {
      this.$emit('buyOption', {
        id: +new Date(),
        rate: this.rate,
        dealType,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
  .transaction-form {
    padding-top: 20px;
    padding-bottom: 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .deal-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    button:first-of-type {
      margin-right: 10px;
    }
  }
</style>
