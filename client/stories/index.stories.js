import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import moment from 'moment';

Vue.use(BootstrapVue);

import { storiesOf } from '@storybook/vue';
import { linkTo } from '@storybook/addon-links';

import '../src/styles/general-style.scss';

import Welcome from './Welcome';
import CardAssets from '../src/components/ui-components/Cards/CardAssets.vue';
import CardBet from '../src/components/ui-components/Cards/CardBet.vue';

storiesOf('Welcome', module).add('to Storybook', () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo('Button') },
}));

storiesOf('Cards', module).add('CardAssets', () => ({
  components: { CardAssets },
  template: `<CardAssets
              :currencyFirst="currencyFirst"
              :currencySecond="currencySecond"
              :oracleValue="oracleValue"
              :brokerValue="brokerValue"
              :isActive="isActive"
              :barValue="barValue"
              :barVariant="barVariant"                
              ></CardAssets>`,
  data() {
    return {
      currencyFirst: 'BTC',
      currencySecond: 'USD',
      oracleValue: 175,
      brokerValue: 235,
      isActive: false,
      barValue: 75,
      barVariant: 'success',
    };
  },
}));

storiesOf('Cards', module).add('CardAssetsActive', () => ({
  components: { CardAssets },
  template: `<CardAssets
              :currencyFirst="currencyFirst"
              :currencySecond="currencySecond"
              :oracleValue="oracleValue"
              :brokerValue="brokerValue"
              :isActive="isActive"
              :barValue="barValue"
              :barVariant="barVariant"                
              ></CardAssets>`,
  data() {
    return {
      currencyFirst: 'BTC',
      currencySecond: 'USD',
      oracleValue: 175,
      brokerValue: 235,
      isActive: true,
      barValue: 75,
      barVariant: 'success',
    };
  },
}));

storiesOf('Cards', module).add('CardBet', () => ({
  components: { CardBet },
  template: `<CardBet
              :currencyFirst="currencyFirst"
              :currencySecond="currencySecond"
              :betId="betId"
              :profitValue="profitValue"
              :currencyBet="currencyBet"
              :betValue="betValue"
              :betDate="betDate"
              :rateFirst="rateFirst"
              :rateSecond="rateSecond"
              :active="active"
              :barValue="barValue"
              v-on:changeStatus="changeStatus"             
              ></CardBet>`,
  data() {
    return {
      currencyFirst: 'ETF',
      currencySecond: 'USD',
      betId: 41242142,
      profitValue: 80,
      currencyBet: 'GIC',
      betValue: 100,
      betDate: moment().subtract(3, 'days'),
      rateFirst: 3652,
      rateSecond: 3645,
      active: false,
      barValue: 0,
    };
  },
  methods: {
    changeStatus() {
      this.active = false;
    },
  },
}));

storiesOf('Cards', module).add('CardBetActive', () => ({
  components: { CardBet },
  template: `<div><CardBet
              :currencyFirst="currencyFirst"
              :currencySecond="currencySecond"
              :betId="betId"
              :profitValue="profitValue"
              :currencyBet="currencyBet"
              :betValue="betValue"
              :betDate="betDate"
              :rateFirst="rateFirst"
              :rateSecond="rateSecond"
              :active="active"
              :barValue="barValue"
              v-on:changeStatus="changeStatus"           
              ></CardBet></div>`,
  data() {
    return {
      currencyFirst: 'ETF',
      currencySecond: 'USD',
      betId: 41242142,
      profitValue: 80,
      currencyBet: 'GIC',
      betValue: 100,
      betDate: moment().add(5, 'm'),
      rateFirst: 3652,
      rateSecond: 3645,
      active: true,
      barValue: 30,
    };
  },
  methods: {
    changeStatus() {
      this.active = false;
    },
  },
}));
