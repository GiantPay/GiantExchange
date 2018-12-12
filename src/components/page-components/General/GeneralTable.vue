<template>
  <div>
    <b-row>
      <b-col md="3">
        <div class="btn-group">
          <b-button @click="$emit('getActiveTransaction')">Active</b-button>
          <b-button @click="$emit('getAllTransaction')">All</b-button>
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
    <b-table show-empty
             stacked="md"
             :items="items"
             :fields="fields"
             :current-page="currentPage"
             :per-page="perPage"
             :filter="filter"
             :sort-by.sync="sortBy"
             :sort-desc.sync="sortDesc"
             @filtered="onFiltered"
             :totalRows="addTotalRows"
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
import moment from 'moment';

const dateFormat = 'MMMM Do YYYY';
const timeFormat = 'h:mm:ss a';

export default {
  name: 'GeneralTable',
  props: {
    items: Array,
    fields: Array,
    buttonsTransactionActive: Boolean,
  },
  data: () => ({
    currentPage: 1,
    perPage: 20,
    totalRows: 10,
    sortBy: 'isActive',
    sortDesc: true,
    filter: null,
    intervalId: 0,
  }),
  computed: {
    sortOptions() {
      return this.fields
        .filter(f => f.sortable)
        .map(f => ({ text: f.label, value: f.key }));
    },
  },
  methods: {
    getActiveTransaction() {
      this.$emit('getActiveTransaction');
    },
    getAllTransaction() {
      this.$emit('getAllTransaction');
    },
    getFormattedDate(date) {
      if (+new Date() > date) {
        return moment(date).format(dateFormat);
      }
      return moment(date).fromNow();
    },
    getFormattedTime(date) {
      if (+new Date() > date) {
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
    addTotalRows() {
      this.totalRows = this.items.length;
    },
  },
};
</script>

<style scoped>

</style>
