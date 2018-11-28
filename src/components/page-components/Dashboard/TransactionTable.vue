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
            <b-form-input v-model="filter" placeholder="Type to Search" />
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
             :items="transactionList"
             :fields="fields"
             :current-page="currentPage"
             :per-page="perPage"
             :filter="filter"
             :sort-by.sync="sortBy"
             :sort-desc.sync="sortDesc"
             @filtered="onFiltered"

    >
      <template slot="date_time" slot-scope="data">
        <div>{{ getFormattedDate(data.value) }}</div>
      </template>

      <template slot="close_time" slot-scope="data">
        <div>{{ getFormattedDate(data.value) }}</div>
      </template>

      <template slot="assets" slot-scope="data">
        <a :href="`${data.value.replace(/[^a-z]+/i,'-').toLowerCase()}`">
          {{data.value}}
        </a>
      </template>

      <template slot="reward" slot-scope="data">
        <div :class="{ 'text-danger': !data.value }">
          {{ data.value }}
        </div>
      </template>

      <template slot="isActive" slot-scope="data">
          <div v-if="!data.value" :class="{ 'text-danger': !data.value }">
            Close
          </div>
          <div v-else>Active</div>
       </template>

      <template slot="inform" slot-scope="data">
        <div v-b-popover.hover="'Inform'" title="Oracle">
          {{data.value.oracle}}
        </div>
        <div v-b-popover.hover="'Inform'" title="Broker">
          {{data.value.broker}}
        </div>
        <div v-b-popover.hover="'Inform'" title="Value">
          {{data.value.value}}
        </div>
      </template>

    </b-table>
      </b-col>
    </b-row>
      <b-row>
        <b-col md="3">
          <b-form-select
            v-model="selected"
            :options="options"
            @change="startInterval"
            class="mb-3" size="sm"
          />
        </b-col>
        <b-col md="6">
          <b-pagination
            :total-rows="totalRows"
            :per-page="perPage"
            v-model="currentPage"
            class="my-0"
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

const dateFormat = 'MMMM Do YYYY, h:mm:ss a';

export default {
  name: 'TransactionTable',
  data: () => ({
    transactionList: [],
    allTransactionList: [],
    selected: 60000,
    options: [
      { value: 300000, text: '5 minutes' },
      { value: 180000, text: '3 minutes' },
      { value: 60000, text: '1 minutes' },
      { value: 30000, text: '30 sec' },
    ],
    fields: [
      { key: 'date_time', label: 'Date/Time', sortable: true },
      { key: 'assets', label: 'Assets', sortable: true },
      { key: 'price', label: 'Price', sortable: true },
      { key: 'reward', label: 'Reward', sortable: true },
      { key: 'close_time', label: 'Closing date/time', sortable: true },
      { key: 'inform', label: 'Additional information', sortable: false },
      { key: 'isActive', label: 'Status', sortable: true },
    ],
    currentPage: 1,
    perPage: 20,
    pageOptions: [5, 10, 15],
    totalRows: 10,
    sortBy: 'isActive',
    sortDesc: true,
    filter: null,
    buttonsActive: true,
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
  },
  methods: {
    getFormattedDate(date) {
      return moment(date).format(dateFormat);
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    clearFilter() {
      this.filter = '';
    },
    async getActiveTransaction() {
      this.allTransactionList = await GiantOracle.getAllTransaction();
      this.transactionList = _.filter(this.allTransactionList, ['isActive', true]);
      this.buttonsActive = true;
      this.addTotalRows();
    },
    async getAllTransaction() {
      this.allTransactionList = await GiantOracle.getAllTransaction();
      this.transactionList = this.allTransactionList;
      this.buttonsActive = false;
      this.addTotalRows();
      this.addClassOpacity();
    },
    startInterval(buttonsActive) {
      if (buttonsActive === true) {
        setInterval(() => {
          this.getActiveTransaction();
          this.addTotalRows();
        }, this.selected);
      } else {
        setInterval(() => {
          this.getAllTransaction();
          this.addTotalRows();
          this.addClassOpacity();
        }, this.selected);
      }
    },
    addClassOpacity() {
      this.transactionList = this.transactionList.map((item) => ({
        ...item,
        _rowVariant: item.isActive ? '' : 'opacity',
      }));
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
