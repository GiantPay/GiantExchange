<template>
  <div class="transaction-form">
    <b-row class="justify-content-between">
      <b-col>
        <DealTime ref="dealTime" :step="step" @setDealTime="setDealTime" />
      </b-col>
      <b-col>
        <!--<DealValue />-->
        <b-form-input v-model="rate"
                      type="number" />
      </b-col>
    </b-row>
    <div class="rate-block">
      <p class="mb-0">reward {{ ((awardMultiplier - 1) * 100).toFixed() }} %</p>
      <h4>{{ rate * awardMultiplier }} GIC</h4>
    </div>
    <div class="deal-buttons">
      <b-button @click="buyOption(dealType.CALL)">Call</b-button>
      <b-button @click="buyOption(dealType.PUT)">Put</b-button>
    </div>
  </div>
</template>

<script>
import DealTime from '@/components/page-components/Trading/DealTime.vue';
import DealValue from '@/components/page-components/Trading/DealValue.vue';

import { DEAL_TYPE } from '@/modules/constants';


export default {
  name: 'TransactionForm',
  components: {
    DealTime,
    DealValue,
  },
  data: () => ({
    // TODO -- get step from Giant Oracle
    step: 5,
    rate: 100,
    dealType: DEAL_TYPE,
    time: 0,

    awardMultiplier: 1.3,
  }),
  methods: {
    getStep() {
    },
    setDealTime(time) {
      this.$emit('setDealTime', time);
      this.time = time;
    },
    buyOption(dealType) {
      this.$emit('buyOption', {
        id: +new Date(),
        rate: this.rate,
        time: this.time,
        dealType,
      });
    },

    updateTime() {
      this.$refs.dealTime.generateTTTime();
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
  .rate-block {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex: 1;
  }
  .deal-buttons {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex: 1;
    button:first-of-type {
      margin-right: 10px;
    }
  }
</style>
