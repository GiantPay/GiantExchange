<template>
  <div>
    <b-row>
      <b-col md="6">
      </b-col>
      <b-col md="3">
        <b-form-group horizontal>
          <b-input-group>
            <b-form-select v-model="sortBy" :options="sortOptions">
              <option slot="first" :value="null">-- none --</option>
            </b-form-select>
          </b-input-group>
        </b-form-group>
      </b-col>
      <b-col md="3">
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
             stacked="md"
             :items="archiveVoteList"
             :fields="fields"
             :current-page="currentPage"
             :per-page="perPage"
             :filter="filter"
             :sort-by.sync="sortBy"
             :sort-desc.sync="sortDesc"
             :totalRows="addTotalRows"
    >
      <template slot="time" slot-scope="data">
        <div>{{ getFormattedDate(data.value.open) }}</div>
        <div>{{ getFormattedTime(data.value.open) }}</div>
        <div>{{ getFormattedDate(data.value.close) }}</div>
        <div>{{ getFormattedTime(data.value.close) }}</div>
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
import GiantExchangeMock from '@/modules/giant-exchange/mocks';
import moment from 'moment';

const dateFormat = 'MMMM Do YYYY';
const timeFormat = 'h:mm:ss a';


export default {
  name: 'ArchiveVotingTable',
  data: () => ({
    archiveVoteList: [],
    fields: [
      { key: 'time', label: 'Open/close date', sortable: true },
      { key: 'id', label: 'ID', sortable: true },
      { key: 'type', label: 'Type', sortable: true },
      { key: 'status', label: 'Status', sortable: true },
    ],
    currentPage: 1,
    perPage: 20,
    totalRows: 20,
    sortBy: 'id',
    sortDesc: true,
    filter: null,
  }),
  created() {
    this.getArchiveVoteList();
  },
  computed: {
    sortOptions() {
      return this.fields
        .filter(f => f.sortable)
        .map(f => ({ text: f.label, value: f.key }));
    },
  },
  methods: {
    async getArchiveVoteList() {
      this.archiveVoteList = await GiantExchangeMock.getArchiveVoteList();
    },
    getFormattedDate(date) {
      return moment(date).format(dateFormat);
    },
    getFormattedTime(date) {
      return moment(date).format(timeFormat);
    },
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    clearFilter() {
      this.filter = '';
    },
    addTotalRows() {
      this.totalRows = this.archiveVoteList.length;
    },
  },
};

</script>

<style lang="scss" scoped>

</style>
