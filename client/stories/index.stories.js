import Vue from 'vue';
import Vuelidate from 'vuelidate'
import BootstrapVue from 'bootstrap-vue';

Vue.use(Vuelidate);
Vue.use(BootstrapVue);

import { storiesOf } from '@storybook/vue';
import { linkTo } from '@storybook/addon-links';

import '../src/styles/general-style.scss';

import Welcome from './Welcome';
import InputWithLabel from '../src/components/ui-components/Inputs/InputWithLabel.vue';

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
    methods: {
    },
  }));
