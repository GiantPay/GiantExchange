import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';

Vue.use(BootstrapVue);

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import '../src/styles/general-style.scss';

import Welcome from './Welcome';
import InputWithButton from '../src/components/ui-components/Inputs/InputWithLabel.vue';

storiesOf('Welcome', module).add('to Storybook', () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo('Button') },
}));

storiesOf('Inputs', module)
  .add('InputWithLabel', () => ({
    components: { InputWithButton },
    template: `<InputWithButton
                :placeholder="placeholder"
                :disabled="disabled"
                :labelValue="labelValue"
                :minValue="minValue"
                :maxValue="maxValue"
                :valueInput="valueInput"
                @updateValueInput="enterValue"               
                ></InputWithButton>`,
    data() {
      return {
        placeholder: 'Input text',
        disabled: false,
        labelValue: 'GIC',
        minValue: 100,
        maxValue: 1000,
        valueInput: 150,
      };
    },
    methods: {
      action: action('updateValueInput'),
      enterValue(value) {
        this.valueInput = +value;
        this.action(+value);
      },
    },
  }));
