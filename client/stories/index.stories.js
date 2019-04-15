import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';

Vue.use(BootstrapVue);

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import '../src/styles/general-style.scss';

import Welcome from './Welcome';
import InputsFilters from '../src/components/ui-components/Inputs/InputsFilters.vue';
import CardAssets from '../src/components/ui-components/Cards/CardAssets.vue';

storiesOf('Welcome', module).add('to Storybook', () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo('Button') },
}));

storiesOf('Inputs', module)
  .add('InputsFilters', () => ({
    components: { InputsFilters },
    template: `<InputsFilters
    :optionsSelect="optionsSelect" 
    v-model="buttonSelected"
    @input="click"
    ></InputsFilters>`,
    methods: {
      action: action('buttonSelected'),
      click(value) {
        this.action(value);
      },
    },
    data() {
      return {
        optionsSelect: [
          { value: 'All', text: 'All' },
          { value: 'My all', text: 'My all' },
          { value: 'My open', text: 'My open' },
          { value: 'My close', text: 'My close' },
        ],
        buttonSelected: 'All',
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
