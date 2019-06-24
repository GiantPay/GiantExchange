import Vue from 'vue';
import Vuelidate from 'vuelidate';
import BootstrapVue from 'bootstrap-vue';
import moment from 'moment';

Vue.use(Vuelidate);
Vue.use(BootstrapVue);

import VCalendar from "v-calendar";
import "v-calendar/lib/v-calendar.min.css";

Vue.use(VCalendar, {
  datePickerShowDayPopover: false
});


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
import BlockBrokers from '../src/components/ui-components/Blocks/BlockBrokers.vue';
import BlockBet from '../src/components/ui-components/Blocks/BlockBet.vue';
import BlockHeader from '../src/components/ui-components/Blocks/BlockHeader.vue';
import BlockOracles from '../src/components/ui-components/Blocks/BlockOracles.vue';
import BlockAssets from '../src/components/ui-components/Blocks/BlockAssets.vue';
import BlockFooter from '../src/components/ui-components/Blocks/BlockFooter.vue';
import MyTrading from '../src/components/ui-components/Dashboard/MyTrading.vue';
import MyOracles from '../src/components/ui-components/Dashboard/MyOracles.vue';
import MyBrokers from '../src/components/ui-components/Dashboard/MyBrokers.vue';
import ChartDashboard from '../src/components/ui-components/Dashboard/ChartDashboard.vue';
import OracleBinance from '../src/components/ui-components/Blocks/OracleBinance.vue';
import DateDashboard from "../src/components/ui-components/Dashboard/DateDashboard.vue";
import ControlDashboard from "../src/components/ui-components/Dashboard/ControlDashboard.vue";
import DealsDashboard from "../src/components/ui-components/Dashboard/DealsDashboard.vue";


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

storiesOf('Blocks', module).add('BlockBrokers', () => ({
  components: { BlockBrokers },
  template: `<BlockBrokers
              :brokerId="brokerId"
              :ratingValue="ratingValue"
              :reserved="reserved"
              :avaliable="avaliable"
              :rewardValue="rewardValue"
              :volumeValue="volumeValue"
              :feeValue="feeValue"
              ></BlockBrokers>`,
  data() {
    return {
      brokerId: '21631224',
      ratingValue: 6,
      reserved: 9200,
      avaliable: 9300,
      rewardValue: 85,
      volumeValue: 120,
    };
  },
}));

storiesOf('Blocks', module).add('BlockFooter', () => ({
  components: { BlockFooter },
  template: `<BlockFooter      
              ></BlockFooter>`,
  data() {
    return {
    };
  },
}));

storiesOf('Blocks', module).add('BlockOracles', () => ({
  components: { BlockOracles },
  template: `<BlockOracles
              :oracleId="oracleId"
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
      oracleId: '634636448',
      ratingValue: 3,
      pingValue: 62,
      urlOracles: 'https://oracleoftheben',
      optionsValue: 250,
      brokersValue: 120,
      feeValue: 0.25,
    };
  },
}));

storiesOf('Blocks', module).add('BlockBet', () => ({
  components: { BlockBet },
  template: `<BlockBet
              ></BlockBet>`,
  data() {
    return {
    };
  },
}));

storiesOf('Blocks', module).add('BlockHeader', () => ({
  components: { BlockHeader },
  template: ` <BlockHeader
              >
              </BlockHeader>`,
  data() {
    return {
    };
  }
}));

storiesOf('Blocks', module).add('BlockAssets', () => ({
  components: { BlockAssets },
  template: `<BlockAssets
              :data="data"
              ></BlockAssets>`,
  data() {
    return {
      data: [
        {
          currencyFirst: 'BTC',
          currencySecond: 'USD',
          oracleValue: 175,
          brokerValue: 246,
          isActive: true,
          barValue: 75,
          barVariant: 'success',
        },
        {
          currencyFirst: 'ETH',
          currencySecond: 'USD',
          oracleValue: 119,
          brokerValue: 135,
          isActive: false,
          barValue: 55,
          barVariant: 'success',
        },
        {
          currencyFirst: 'LTC',
          currencySecond: 'USD',
          oracleValue: 95,
          brokerValue: 85,
          isActive: false,
          barValue: 15,
          barVariant: 'success',
        },
        {
          currencyFirst: 'EOS',
          currencySecond: 'USD',
          oracleValue: 25,
          brokerValue: 35,
          isActive: false,
          barValue: 27,
          barVariant: 'success',
        },
        {
          currencyFirst: 'BCH',
          currencySecond: 'USD',
          oracleValue: 39,
          brokerValue: 35,
          isActive: false,
          barValue: 15,
          barVariant: 'success',
        },
        {
          currencyFirst: 'XRP',
          currencySecond: 'USD',
          oracleValue: 75,
          brokerValue: 85,
          isActive: false,
          barValue: 31,
          barVariant: 'success',
        },
        {
          currencyFirst: 'TRX',
          currencySecond: 'USD',
          oracleValue: 42,
          brokerValue: 65,
          isActive: false,
          barValue: 15,
          barVariant: 'success',
        },
        {
          currencyFirst: 'DASH',
          currencySecond: 'USD',
          oracleValue: 29,
          brokerValue: 45,
          isActive: false,
          barValue: 13,
          barVariant: 'success',
        },
        {
          currencyFirst: 'NEO',
          currencySecond: 'USD',
          oracleValue: 12,
          brokerValue: 25,
          isActive: false,
          barValue: 9,
          barVariant: 'success',
        },
        {
          currencyFirst: 'ATOM',
          currencySecond: 'USD',
          oracleValue: 75,
          brokerValue: 65,
          isActive: false,
          barValue: 16,
          barVariant: 'success',
        },
        {
          currencyFirst: 'XEM',
          currencySecond: 'USD',
          oracleValue: 19,
          brokerValue: 35,
          isActive: false,
          barValue: 10,
          barVariant: 'success',
        },
      ],
    };
  },
}));

storiesOf('Blocks', module).add('MyTrading', () => ({
  components: { MyTrading },
  template: ` <MyTrading
              >
              </MyTrading>`,
  data() {
    return {
    };
  }
}));

storiesOf('Blocks', module).add('MyOracles', () => ({
  components: { MyOracles },
  template: ` <MyOracles
              >
              </MyOracles>`,
  data() {
    return {
    };
  }
}));

storiesOf('Blocks', module).add('MyBrokers', () => ({
  components: { MyBrokers },
  template: ` <MyBrokers
              >
              </MyBrokers>`,
  data() {
    return {
    };
  }
}));

storiesOf('Blocks', module).add('ChartDashboard', () => ({
  components: { ChartDashboard },
  template: ` <ChartDashboard
              >
              </ChartDashboard>`,
  data() {
    return {
    };
  }
}));

storiesOf('Blocks', module).add('OracleBinance', () => ({
  components: { OracleBinance },
  template: ` <OracleBinance
              >
              </OracleBinance>`,
  data() {
    return {
    };
  }
}));

storiesOf('Blocks', module).add('DateDashboard', () => ({
  components: { DateDashboard },
  template: ` <DateDashboard style="
                width: 540px;
                height: 326px;
                "
              >
              </DateDashboard>`,
  data() {
    return {
    };
  }
}));

storiesOf('Blocks', module).add('ControlDashboard', () => ({
  components: { ControlDashboard },
  template: ` <ControlDashboard style="
                width: 600px;
                "
              >
              </ControlDashboard>`,
  data() {
    return {
    };
  }
}));

storiesOf('Blocks', module).add('DealsDashboard', () => ({
  components: { DealsDashboard },
  template: ` <DealsDashboard style="
                width: 600px;
                height: 914px;
                "
              >
              </DealsDashboard>`,
  data() {
    return {
    };
  }
}));



