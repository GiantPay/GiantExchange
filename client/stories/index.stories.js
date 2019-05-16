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
import Navigation from '../src/components/ui-components/Header/Navigation.vue';
import CardBet from '../src/components/ui-components/Cards/CardBet.vue';
import Purse from '../src/components/ui-components/Header/Purse.vue';
import BlockOracles from '../src/components/ui-components/Blocks/BlockOracles.vue';

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

storiesOf('Header', module).add('Navigation', () => ({
  components: { Navigation },
  template: `<div style="
                width: 100%;
                height: 70px;
                background-color: #07306D;
                display: flex;
                justify-content: flex-start;
                align-items: flex-end;
                ">
                  <Navigation
                  :activePage="activePage"
                  ></Navigation>
              </div>`,
  data() {
    return {
      activePage: 'Dashboard',
    };
  }
}));

storiesOf('Cards', module).add('CardBet', () => ({
  components: { CardBet },
  template: `<CardBet
              :asset="asset"
              :id="id"
              :profitValue="profitValue"
              :betValue="betValue"
              :betDate="betDate"
              :rateOpen="rateOpen"
              :rateClose="rateClose"
              :active="active"
              v-on:betEnded="changeStatus"
              ></CardBet>`,
  data() {
    return {
      asset: "ETF/USD",
      id: 41242142,
      profitValue: 180,
      betValue: 100,
      betDate: moment().subtract(1, 'days'),
      rateOpen: 3652,
      rateClose: 3645,
      active: false
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
              :asset="asset"
              :id="id"
              :profitValue="profitValue"
              :betValue="betValue"
              :betDate="betDate"
              :rateOpen="rateOpen"
              :rateClose="rateClose"
              :active="active"
              v-on:betEnded="changeStatus"
              ></CardBet></div>`,
  data() {
    return {
      asset: "ETF/USD",
      id: 41242142,
      profitValue: 180,
      betValue: 100,
      betDate: moment().add(15, 's'),
      rateOpen: 3652,
      rateClose: 3645,
      active: true
    };
  },
  methods: {
    changeStatus() {
      this.active = false;
    }
  }
}));

storiesOf('Header', module).add('Purse', () => ({
  components: { Purse },
  template: ` <div style="width: 250px;
                  height: 70px;
                  background-color: #0E5FDA;
                  display: flex;
                  justify-content: center;
                  align-items: center;">
                <Purse
                  :balanceValue="balanceValue"
                  :currency="currency"
                  :walletAddress="walletAddress">
                </Purse>
              </div>`,
  data() {
    return {
      balanceValue: 20223.3464,
      currency: 'GIC',
      walletAddress: 'DFvstVbsTjdbFGVlstdkeGHbaGdtwBkshr'
    };
  }
}));

storiesOf('Blocks', module).add('BlockOracles', () => ({
  components: { BlockOracles },
  template: `<BlockOracles
              :currencyFirst="currencyFirst"
              :currencySecond="currencySecond"
              :ratingValue="ratingValue"
              :pingValue="pingValue"
              :urlOracles="urlOracles"
              :optionsValue="optionsValue"
              :brokersValue="brokersValue"
              :feeValue="feeValue"
              ></BlockOracles>`,
  data() {
    return {
      currencyFirst: 'BTC',
      currencySecond: 'USD',
      ratingValue: 3,
      pingValue: 62,
      urlOracles: 'https://oracleoftheben',
      optionsValue: 250,
      brokersValue: 120,
      feeValue: 0.25,
    };
  },
}));
