<template>
  <div>
    <b-form @submit.prevent="submit">
      <b-select v-model="votingType" :options="votingOptions" class="mb-2" required>
        <option slot="first" :value="null" disabled>-- Please select an option --</option>
      </b-select>
      <b-select v-if="votingType" v-model="assetType" :options="assetOptions" class="mb-2" required>
        <option slot="first" :value="null" disabled>-- Please select an option --</option>
      </b-select>
      <b-select v-if="options"
                v-model="optionSelected"
                :options="optionOptions"
                class="mb-2"
                required>
        <option slot="first" :value="null" disabled>-- Please select an option --</option>
      </b-select>

      <VotingCreateForms v-if="lodash.isNumber(votingTypeId)" :votingTypeId="votingTypeId"/>

      <b-button type="submit">Create</b-button>
    </b-form>
  </div>
</template>

<script>
import VotingCreateForms from './VotingCreateForms/VotingCreateForms.vue';

import _ from 'lodash';

import { ADD_VOTING } from '@/graphql';

import { VOTING_TYPE } from '@/modules/constants';

const assetOptionsUpload = [
  { value: 'ASSET', text: 'Asset' },
  { value: 'ORACLE', text: 'Oracle' },
  { value: 'FACTORY_BROKERS', text: 'Factory brokers' },
];

const assetOptionsOther = [
  { value: 'DIVIDENDS', text: 'Dividends' },
  { value: 'FUNDING_INITIATIVE', text: 'Funding initiate' },
  { value: 'INITIATIVE', text: 'Initiative' },
  { value: 'TRADING_OPTIONS', text: 'Trading options' },
  { value: 'GOVERNANCE_OPTIONS', text: 'Governance options' },
  { value: 'SMART_CONTRACT_CODE_CHANGE', text: 'Smart contract code change' },
];

const tradingOptions = [
  { value: 'MAX_ORACLES_IN_ASSET', text: 'Maximum oracles in asset' },
  { value: 'MAX_BROKERS_IN_ORACLE', text: 'Maximum brokers in oracle' },
  { value: 'BROKER_DEACTIVATION_TIME', text: 'Broker deactivation time' },
  { value: 'ORACLE_DEACTIVATION_TIME', text: 'Oracle deactivation time' },
  { value: 'SITE_COMMISSION', text: 'Site commission' },
  { value: 'NUMBER_OF_SIMULTANEOUS_TRANSACTIONS', text: 'Number of simultaneous transactions' },
];

const governanceOptions = [
  { value: 'DEPOSIT_AMOUNT_TO_CREATE_VOTE', text: 'Deposit amount to create vote' },
  { value: 'MIN_VOTING_TIME', text: 'Minimum voting time' },
  { value: 'MAX_VOTING_TIME', text: 'Maximum voting time' },
  { value: 'MIN_VOTE_AMOUNT', text: 'Minimum vote time' },
  { value: 'MAX_VOTE_AMOUNT', text: 'Maximum vote time' },
  { value: 'MIN_TURNOUT_NUMBER_OF_VOTERS', text: 'Minimum turnout number of voters' },
  { value: 'MIN_SUPERIORITY_FOR_DECISION', text: 'Minimum superiority for decision' },
  { value: 'MIN_FUNDING_AMOUNT', text: 'Minimum funding amount' },
  { value: 'MAX_FUNDING_AMOUNT', text: 'Maximum funding amount' },
  { value: 'DIVIDEND_DISTRIBUTION_SCHEME', text: 'Dividend distribution scheme' },
  { value: 'MAX_AMOUNT_OF_DIVIDENDS', text: 'Maximum amount of dividends' },
  { value: 'ORACLE_MULTIPLIER', text: 'Oracle multiplier' },
  { value: 'BROKER_MULTIPLIER', text: 'Broker multiplier' },
  { value: 'MASTERNODE_MULTIPLIER', text: 'Masternode multiplier' },
];

export default {
  name: 'NewVoting',
  components: {
    VotingCreateForms,
  },
  data: () => ({
    votingType: null,
    votingOptions: [
      { value: 'UPLOAD', text: 'Upload' },
      { value: 'DELETE', text: 'Delete' },
      { value: 'OTHER', text: 'Other' },
    ],

    assetType: null,
    assetOptions: [
      { value: 'ASSET', text: 'Asset' },
      { value: 'ORACLE', text: 'Oracle' },
      { value: 'FACTORY_BROKERS', text: 'Factory brokers' },
    ],

    optionSelected: null,
    optionOptions: [],

    lodash: _,
  }),
  methods: {
    async submit(event) {
      this.$store.commit('showPreload');

      const data = {
        votingTypeId: this.votingTypeId,
        info: {},
      };
      _.each(event.target.elements, element => {
        if (element.name) data.info[element.name] = element.value;
      });
      await this.$apollo.mutate({
        mutation: ADD_VOTING,
        variables: data,
      });
      this.$notify({
        title: 'Voting created',
        type: 'success',
      });

      this.$router.push({
        name: 'voting-list',
      });

      this.$store.commit('hidePreload');
    },
  },
  watch: {
    votingType(val) {
      this.assetOptions = val === 'OTHER' ? assetOptionsOther : assetOptionsUpload;
      this.assetType = null;
    },
    assetType(val) {
      this.optionOptions = val === 'TRADING_OPTIONS' ? tradingOptions : governanceOptions;
      this.optionSelected = null;
    },
  },
  computed: {
    options() {
      return ['TRADING_OPTIONS', 'GOVERNANCE_OPTIONS'].includes(this.assetType);
    },
    votingTypeId() {
      return VOTING_TYPE[this.votingType]?.[this.assetType]?.[this.optionSelected]
        || VOTING_TYPE[this.votingType]?.[this.assetType];
    },
  },
};
</script>
