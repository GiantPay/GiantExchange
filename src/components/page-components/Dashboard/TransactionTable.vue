<template>
  <div>
    <b-container fluid>
    <b-row>
      <b-col md="3" class="my-1">
        <div class="btn-group">
            <b-button @click="getActiveTransaction">Active</b-button>
            <b-button @click="getAllTransaction">All</b-button>
        </div>
      </b-col>
      <b-col md="3" class="my-1">
        <b-form-group horizontal label="Sort" class="mb-0">
          <b-input-group>
            <b-form-select v-model="sortBy" :options="sortOptions">
              <option slot="first" :value="null">-- none --</option>
            </b-form-select>
          </b-input-group>
        </b-form-group>
      </b-col>
      <b-col md="6" class="my-1">
        <b-form-group horizontal label="Filter" class="mb-0">
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
      <b-col md="12" class="my-1">
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
          <div :class="{ 'text-danger': !data.value }">
            {{ data.value }}
          </div>
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
        <b-col md="3" class="my-1">
          <b-form-select
            v-model="selected"
            :options="options"
            @change="startInterval"
            class="mb-3" size="sm"
          />
        </b-col>
        <b-col md="6" class="my-1">
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

const dateFormat = 'MMMM Do YYYY, h:mm:ss a';

export default {
  name: 'TransactionTable',
  data: () => ({
    transactionList: [],
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
    totalRows: 20,
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
      this.transactionList = await GiantOracle.getActiveTransaction();
      this.buttonsActive = true;
    },
    async getAllTransaction() {
      this.transactionList = await GiantOracle.getAllTransaction();
      this.buttonsActive = false;
      this.addClassOpacity();
    },
    startInterval(buttonsActive) {
      if (buttonsActive === true) {
        setInterval(() => {
          this.getActiveTransaction();
        }, this.selected);
      } else {
        setInterval(() => {
          this.getAllTransaction();
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
  },
};
</script>

<style lang="scss" scoped>
  /deep/ .table-opacity {
    opacity: 0.5;
  }

</style>
