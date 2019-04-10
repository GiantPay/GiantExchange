import Vue from 'vue';
import Vuelidate from 'vuelidate'
import BootstrapVue from 'bootstrap-vue';

Vue.use(Vuelidate);
Vue.use(BootstrapVue);

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import '../src/styles/general-style.scss';

import Welcome from './Welcome';
import InputWithLabel from '../src/components/ui-components/Inputs/InputWithLabel.vue';
import CardAssets from '../src/components/ui-components/Cards/CardAssets.vue';

storiesOf('Welcome', module).add('to Storybook', () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo('Button') },
}));

storiesOf('Inputs', module)
  .add('InputWithLabel', () => ({
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

storiesOf('Cards', module)
  .add('CardAssets', () => ({
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

storiesOf('Cards', module)
  .add('CardAssetsActive', () => ({
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
