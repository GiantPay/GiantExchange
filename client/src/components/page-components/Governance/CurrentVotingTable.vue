<template>
  <div>
    <h1 class="mb-3">Current Voting</h1>
    <b-row>
      <b-col md="4">
      </b-col>
      <b-col md="4">
        <b-form-group horizontal class="mobile-show">
          <b-input-group>
            <b-form-select v-model="sortBy" :options="sortOptions">
              <option slot="first" :value="null">-- none --</option>
            </b-form-select>
          </b-input-group>
        </b-form-group>
      </b-col>
      <b-col md="4">
        <b-form-group horizontal>
          <b-input-group>
            <b-form-input v-model="filter" placeholder="Type to Search" />
            <b-input-group-append>
              <b-btn :disabled="!filter" @click="clearFilter">Clear</b-btn>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>
    </b-row>
    <b-table show-empty
             fixed
             hover
             stacked="md"
             :items="currentVoteList"
             :fields="fields"
             :current-page="currentPage"
             :per-page="perPage"
             :filter="filter"
             :sort-by.sync="sortBy"
             :sort-desc.sync="sortDesc"
             :totalRows="addTotalRows"
             @row-clicked="showVotingInfo"
    >

      <template slot="votingTypeId" slot-scope="data">
        {{ VOTING_TYPE_DESC[data.value] }}
      </template>

    </b-table>
    <b-row>
      <b-col md="6" >
        <b-pagination
          :total-rows="totalRows"
          :per-page="perPage"
          v-model="currentPage"
        />
      </b-col>
    </b-row>

    <b-modal ref="votingInfo"
             :title="`${ VOTING_TYPE_DESC[votingInfo.votingTypeId] }, ${ votingInfo.id }`"
             ok-title="Yes"
             cancel-title="No"
             ok-variant="success"
             cancel-variant="danger"
             centered>
      <table class="table table-bordered">
        <tbody>
          <tr v-for="(value, key) in votingParameters" :key="key">
            <td>{{ key }}</td>
            <td>{{ value }}</td>
          </tr>
        </tbody>
      </table>
    </b-modal>
  </div>
</template>

<script>
import _ from 'lodash';
import moment from 'moment';

import { VOTING_LIST } from '@/graphql';

import { VOTING_TYPE_DESC } from '@/modules/constants';

export default {
  name: 'CurrentVotingTable',
  data: () => ({
    currentVoteList: [],
    fields: [
      { key: 'id' },
      { key: 'votingTypeId', label: 'Type', sortable: true },
      {
        key: 'info',
        label: 'Information',
        formatter(value) {
          let string = '';
          _.each(value, (val, key) => {
            string += val && key !== '__typename' ? `${key}: ${val}; ` : '';
          });
          return string;
        },
      },
      { key: 'status' },
    ],
    votingInfo: {},

    currentPage: 1,
    perPage: 20,
    totalRows: 20,
    sortBy: 'createdAt',
    sortDesc: true,
    filter: null,
    intervalId: 0,

    VOTING_TYPE_DESC,
  }),
  created() {
    this.getCurrentVoteList();
  },
  computed: {
    sortOptions() {
      return this.fields
        .filter(f => f.sortable)
        .map(f => ({ text: f.label, value: f.key }));
    },
    votingParameters() {
      return _.pickBy(this.votingInfo.info, (value, key) => value !== null && key !== '__typename');
    },
  },
  methods: {
    async getCurrentVoteList() {
      const { data } = await this.$apollo.query({
        query: VOTING_LIST,
        fetchPolicy: 'no-cache',
      });

      this.currentVoteList = data.votingList.map(voting => ({
        ...voting,
        createdAt: moment(voting.createdAt).utc().format(),
      }));
    },
    showVotingInfo(voting) {
      this.votingInfo = voting;
      this.$refs.votingInfo.show();
    },
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    clearFilter() {
      this.filter = '';
    },
    addTotalRows() {
      this.totalRows = this.currentVoteList.length;
    },
  },
};

</script>

<style lang="scss" scoped>
  .mobile-show {
    display: none;
  }
  @media (min-width: 312px) and (max-width: 768px) {
    .mobile-show {
      display: block;
    }
  }
  /deep/ tbody tr {
    cursor: pointer;
  }
  .table td:last-of-type {
    word-break: break-all;
  }
</style>
