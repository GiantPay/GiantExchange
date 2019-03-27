import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';

Vue.use(BootstrapVue);

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import '../src/styles/general-style.scss';

import Welcome from './Welcome';
import RadioButtons from '../src/components/ui-components/Inputs/RadioButtons.vue';

storiesOf('Welcome', module).add('to Storybook', () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo('Button') },
}));
storiesOf('Inputs', module)
  .add('RadioButtons', () => ({
    components: { RadioButtons },
    template: `<RadioButtons
    :optionsSelect="optionsSelect" 
    :buttonSelected="buttonSelected"
    @buttonSelected="click"
    ></RadioButtons>`,
    methods: {
      action: action('buttonSelected'),
      click(value) {
        this.buttonSelected = value;
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
