<template>
  <div>
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
             stacked="md"
             :items="currentVoteList"
             :fields="fields"
             :current-page="currentPage"
             :per-page="perPage"
             :filter="filter"
             :sort-by.sync="sortBy"
             :sort-desc.sync="sortDesc"
             :totalRows="addTotalRows"
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
  </div>
</template>

<script>
import _ from 'lodash';
import { VOTING_LIST } from '@/graphql';

import { VOTING_TYPE_DESC } from '@/modules/constants';

export default {
  name: 'CurrentVotingTable',
  components: {
  },
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
    currentPage: 1,
    perPage: 20,
    totalRows: 20,
    sortBy: 'id',
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
  },
  methods: {
    async getCurrentVoteList() {
      const { data } = await this.$apollo.query({
        query: VOTING_LIST,
        fetchPolicy: 'no-cache',
      });
      this.currentVoteList = await data.votingList;
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
</style>
