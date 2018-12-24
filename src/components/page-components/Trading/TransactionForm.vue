<template>
  <div class="transaction-form">
    <b-row class="justify-content-between">
      <b-col>
        <DealTime ref="dealTime" :step="currentBroker.timeSteps" @setDealTime="setDealTime" />
      </b-col>
      <b-col class="deal-value-container">
        <div class="form-group deal-value" :class="{ 'has-error': $v.rate.$error }">
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
    <div class="deal-info">
      <div class="view">
        <div class="view__call" :style="{ width: `${percent.call}%` }"></div>
        <div class="view__put" :style="{ width: `${percent.put}%` }"></div>
      </div>
      <div class="percent">
        <div class="percent__call">{{ percent.call }}%</div>
        <div class="percent__put">{{ percent.put }}%</div>
      </div>
    </div>
    <div class="deal-buttons">
      <b-button @click="buyOption(dealType.CALL)" class="btn-success mb-2">
        Call
        <i class="fa fa-arrow-up" aria-hidden="true"></i>
      </b-button>
      <b-form-input v-model="currentCost" disabled class="mb-2" />
      <b-button @click="buyOption(dealType.PUT)" class="btn-danger">
        Put
        <i class="fa fa-arrow-down" aria-hidden="true"></i>
      </b-button>
    </div>
  </div>
</template>

<script>
import DealTime from '@/components/page-components/Trading/DealTime.vue';
import GiantOracle from '@/modules/giant-oracle/mocks';

import { mapState } from 'vuex';

import { between } from 'vuelidate/lib/validators';

import { DEAL_TYPE } from '@/modules/constants';


export default {
  name: 'TransactionForm',
  components: {
    DealTime,
  },
  props: {
    currentCost: {
      type: Number,
    },
  },
  data() {
    return {
      rate: 100,
      dealType: DEAL_TYPE,
      time: 0,

      animationError: false,
      percent: {
        call: 0,
        put: 0,
      },
    };
  },
  validations() {
    return {
      rate: {
        between: between(
          this.currentBroker.rateInterval.minRate,
          this.currentBroker.rateInterval.maxRate,
        ),
      },
    };
  },
  methods: {
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
    async getDealsPercent() {
      this.percent = await GiantOracle.getDealsPercent();
    },

    updateTime() {
      this.$refs.dealTime.generateTTTime();
    },
  },
  computed: {
    multiplierPercent() {
      return ((this.currentBroker.awardMultiplier - 1) * 100).toFixed();
    },
    possibleWinRate() {
      return this.rate * this.currentBroker.awardMultiplier;
    },

    ...mapState('trading', [
      'currentBroker',
    ]),
  },
  created() {
    this.getDealsPercent();
  },
};
</script>

<style lang="scss" scoped>
  .transaction-form {
    padding-top: 30px;
    padding-bottom: 30px;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .deal-value {
    width: 120px;
    &-container {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
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
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    flex: 1.5;
    width: 150px;
    margin: 0 auto;
  }
  .error {
    animation-name: shakeError;
    animation-duration: .6s;
    animation-timing-function: ease-in-out;
  }

  .view {
    display: flex;
    flex: 1;
    height: 5px;
    &__call {
      background: #46c37b;
    }
    &__put {
      background: #d26a5c;
    }
  }
  .percent {
    display: flex;
    justify-content: space-between;
    &__call {
      color: #46c37b;
    }
    &__put {
      color: #d26a5c;
    }
  }
</style>
