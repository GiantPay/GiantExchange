<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col md="3">
          <div class="btn-group">
            <b-button @click="getActiveTransaction">Active</b-button>
            <b-button @click="getAllTransaction">All</b-button>
          </div>
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
        <b-col md="6">
          <b-form-group horizontal>
            <b-input-group>
              <b-form-input v-model="filter" placeholder="Type to Search"/>
              <b-input-group-append>
                <b-btn :disabled="!filter" @click="clearFilter">Clear</b-btn>
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="12">
          <b-table show-empty
                   stacked="md"
                   :items="computedTransactionList"
                   :fields="fields"
                   :current-page="currentPage"
                   :per-page="perPage"
                   :filter="filter"
                   :sort-by.sync="sortBy"
                   :sort-desc.sync="sortDesc"
                   @filtered="onFiltered"
          >
            <template slot="time.open" slot-scope="data">
              <div>{{ getFormattedDate(data.value) }}</div>
              <div>{{ getFormattedTime(data.value) }}</div>
            </template>

            <template slot="time.close" slot-scope="data">
              <div>{{ getFormattedDate(data.value) }}</div>
              <div>{{ getFormattedTime(data.value) }}</div>
            </template>

            <template slot="assets" slot-scope="data">
              <a :href="`trading/${data.value.replace(/[^a-z]+/i,'_').toLowerCase()}`">
                {{data.value}}
              </a>
            </template>

            <template slot="reward" slot-scope="data">
              <div :class="{ 'text-danger': !data.value }">
                {{ data.value }}
              </div>
            </template>

            <template slot="isActive" slot-scope="data">
              <div :class="{ 'text-danger': !data.value }">
                {{ data.value ? 'Active' : 'Close' }}
              </div>
            </template>

            <template slot="inform" slot-scope="data">
              <span v-b-popover.hover="'Inform about Oracle'" title="Oracle">
                <a :href="`${data.value.oracle.replace(/[^a-z]+/i,'_').toLowerCase()}`">
                  {{data.value.oracle}}
                </a>
              </span><br>
              <span v-b-popover.hover="'Inform about Broker'" title="Broker">
                <a :href="`${data.value.broker.replace(/[^a-z]+/i,'_').toLowerCase()}`">
                  {{data.value.broker}}
                </a>
              </span><br>
              <span v-b-popover.hover="'Inform about Value'" title="Value">
                <a :href="`${data.value.value.replace(/[^a-z]+/i,'_').toLowerCase()}`">
                  {{data.value.value}}
                </a>
              </span>
            </template>
          </b-table>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="3">
          <b-form-select
              v-model="selected"
              :options="options"
              @input="startInterval"
              class="mb-3" size="sm"
          />
        </b-col>
        <b-col md="6">
          <b-pagination
              :total-rows="totalRows"
              :per-page="perPage"
              v-model="currentPage"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import GiantOracle from '@/modules/giant-oracle/mocks';
import moment from 'moment';
import _ from 'lodash';

const dateFormat = 'MMMM Do YYYY';
const timeFormat = 'h:mm:ss a';


export default {
  name: 'TransactionTable',
  data: () => ({
    transactionList: [],
    allTransactionList: [],
    selected: localStorage.getItem('timeIntervalUpdate') || 60 * 1000,
    options: [
      { value: 5 * 60 * 1000, text: '5 minutes' },
      { value: 3 * 60 * 1000, text: '3 minutes' },
      { value: 60 * 1000, text: '1 minutes' },
      { value: 30 * 1000, text: '30 sec' },
    ],
    fields: [
      { key: 'time.open', label: 'Date/Time', sortable: true },
      { key: 'assets', label: 'Assets', sortable: true },
      { key: 'price', label: 'Price', sortable: true },
      { key: 'reward', label: 'Reward', sortable: true },
      { key: 'time.close', label: 'Closing date/time', sortable: true },
      { key: 'inform', label: 'Additional information', sortable: false },
      { key: 'isActive', label: 'Status', sortable: true },
    ],
    currentPage: 1,
    perPage: 20,
    totalRows: 10,
    sortBy: 'isActive',
    sortDesc: true,
    filter: null,
    buttonsTransactionActive: true,

    intervalId: 0,
  }),
  created() {
    this.getActiveTransaction();
    this.startInterval();
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => ({ text: f.label, value: f.key }));
    },
    computedTransactionList: {
      get() {
        return this.transactionList.map((item) => ({
          ...item,
          _rowVariant: item.isActive ? '' : 'opacity',
        }));
      },
      set(transactionList) {
        this.transactionList = transactionList;
      },
    },
  },
  methods: {
    getFormattedDate(date) {
      if (moment() > date) {
        return moment(date).format(dateFormat);
      }
      return moment(date).fromNow();
    },
    getFormattedTime(date) {
      if (moment() > date) {
        return moment(date).format(timeFormat);
      }
      return null;
    },
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    clearFilter() {
      this.filter = '';
    },
    async getActiveTransaction() {
      this.allTransactionList = await GiantOracle.getAllTransaction();
      this.computedTransactionList = _.filter(this.allTransactionList, 'isActive');
      this.buttonsTransactionActive = true;
      this.addTotalRows();
    },
    async getAllTransaction() {
      this.allTransactionList = await GiantOracle.getAllTransaction();
      this.computedTransactionList = this.allTransactionList;
      this.buttonsTransactionActive = false;
      this.addTotalRows();
    },
    startInterval() {
      localStorage.setItem('timeIntervalUpdate', this.selected);

      clearInterval(this.intervalId);

      this.intervalId = setInterval(() => {
        if (this.buttonsTransactionActive === true) {
          this.getActiveTransaction();
        } else {
          this.getAllTransaction();
        }
        this.addTotalRows();
      }, this.selected);
    },
    addTotalRows() {
      this.totalRows = this.transactionList.length;
    },
  },
};
</script>

<style lang="scss" scoped>
  /deep/ .table-opacity {
    opacity: 0.5;
  }
</style>
