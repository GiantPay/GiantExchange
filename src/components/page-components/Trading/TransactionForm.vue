<template>
  <div class="transaction-form">
    <b-row class="justify-content-between">
      <b-col>
        <DealTime ref="dealTime" :step="step" @setDealTime="setDealTime" />
      </b-col>
      <b-col>
        <!--<DealValue />-->
        <div class="form-group" :class="{ 'has-error': $v.rate.$error }">
          <b-form-input v-model="$v.rate.$model" type="number" :class="{ error: animationError }" />
          <div class="help-block animated fadeInDown" v-if="!$v.rate.between">
            Min: {{ $v.rate.$params.between.min }}, max: {{ $v.rate.$params.between.max }}
          </div>
        </div>
      </b-col>
    </b-row>
    <div class="rate-block">
      <p class="mb-0">reward {{ multiplierPercent }} %</p>
      <h4>{{ possibleWinRate }} GIC</h4>
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

import { between } from 'vuelidate/lib/validators';

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

    animationError: false,
  }),
  validations: {
    rate: {
      between: between(100, 100),
    },
  },
  methods: {
    getStep() {
    },
    setDealTime(time) {
      this.$emit('setDealTime', time);
      this.time = time;
    },
    buyOption(dealType) {
      if (this.$v.$invalid) {
        this.animationError = true;
      } else {
        this.animationError = false;
        this.$emit('buyOption', {
          id: +new Date(),
          rate: this.rate,
          time: this.time,
          dealType,
        });
      }
    },

    updateTime() {
      this.$refs.dealTime.generateTTTime();
    },
  },
  computed: {
    multiplierPercent() {
      return ((this.awardMultiplier - 1) * 100).toFixed();
    },
    possibleWinRate() {
      return this.rate * this.awardMultiplier;
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
  .error {
    animation-name: shakeError;
    animation-duration: .6s;
    animation-timing-function: ease-in-out;
  }

  // TODO -- css animations
  @keyframes shakeError {
    0% {
      transform: translateX(0);
    }
    15% {
      transform: translateX(0.375rem);
    }
    30% {
      transform: translateX(-0.375rem);
    }
    45% {
      transform: translateX(0.375rem);
    }
    60% {
      transform: translateX(-0.375rem);
    }
    75% {
      transform: translateX(0.375rem);
    }
    90% {
      transform: translateX(-0.375rem);
    }
    100% {
      transform: translateX(0);
    }
  }
</style>
