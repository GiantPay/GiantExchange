import Vue from 'vue';
import Vuelidate from 'vuelidate';
import BootstrapVue from 'bootstrap-vue';
import moment from 'moment';

Vue.use(Vuelidate);
Vue.use(BootstrapVue);

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import '../src/styles/general-style.scss';

import Welcome from './Welcome';
import RadioButtons from '../src/components/ui-components/Inputs/RadioButtons.vue';
import InputWithLabel from '../src/components/ui-components/Inputs/InputWithLabel.vue';
import InputWithButton from '../src/components/ui-components/Inputs/InputWithButton.vue';
import CardAssets from '../src/components/ui-components/Cards/CardAssets.vue';
import CardBet from '../src/components/ui-components/Cards/CardBet.vue';

storiesOf('Welcome', module).add('to Storybook', () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo('Button') },
}));

storiesOf('Inputs', module).add('RadioButtons', () => ({
  components: { RadioButtons },
  template: `<RadioButtons
  :optionsSelect="optionsSelect" 
  v-model="buttonSelected"
  @input="click"
  ></RadioButtons>`,
  methods: {
    action: action('buttonSelected'),
    click(value) {
      this.action(value);
    },
  },
  data() {
    return {
      optionsSelect: [
        { value: 5 * 60 * 1000, text: '5 min' },
        { value: 3 * 60 * 1000, text: '3 min' },
        { value: 60 * 1000, text: '1 min' },
        { value: 30 * 1000, text: '30 sec' },
      ],
      buttonSelected: 3 * 60 * 1000,
    };
  },
}));

storiesOf('Inputs', module).add('InputWithLabel', () => ({
  components: { InputWithLabel },
  template: `<InputWithLabel
              :placeholder="placeholder"
              :disabled="disabled"
              :labelValue="labelValue"
              :minValue="minValue"
              :maxValue="maxValue"
              v-model="value"        
              ></InputWithLabel>`,
  data() {
    return {
      placeholder: 'Input text',
      disabled: false,
      labelValue: 'GIC',
      minValue: 100,
      maxValue: 1000,
      value: 150,
      valueInput: 0,
    };
  },
}));

storiesOf('Inputs', module).add('InputWithButton', () => ({
  components: { InputWithButton },
  template: `<InputWithButton
              :placeholder="placeholder"
              :disabled="disabled"
              v-model="value"        
              ></InputWithButton>`,
  data() {
    return {
      placeholder: 'Input text',
      disabled: false,
      value: '',
    };
  },
}));

storiesOf('Inputs', module).add('InputWithLabel', () => ({
  components: { InputWithLabel },
  template: `<InputWithLabel
              :placeholder="placeholder"
              :disabled="disabled"
              :labelValue="labelValue"
              :minValue="minValue"
              :maxValue="maxValue"
              v-model="value"        
              ></InputWithLabel>`,
  data() {
    return {
      placeholder: 'Input text',
      disabled: false,
      labelValue: 'GIC',
      minValue: 100,
      maxValue: 1000,
      value: 150,
      valueInput: 0,
    };
  },
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
