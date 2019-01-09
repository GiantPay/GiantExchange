<template>
  <div>
    <b-row>
      <b-col md="3">
        <div class="btn-group">
          <b-button @click="filterAllActivities">All activities</b-button>
          <b-button @click="filterMyActivities">My activities</b-button>
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
             fixed
             stacked="md"
             :items="computedActivitiesList"
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

      <template slot="activity" slot-scope="data">
        {{data.value}}
      </template>

      <template slot="inform" slot-scope="data">
        <div>
          {{data.value.inform}}
        </div>
        <div v-b-popover.hover="'Inform about details'" title="Details">
          <a :href="`trading/`">
            {{data.value.details}}
          </a>
        </div>
        <div>
          <a :href="`trading/`" v-b-popover.hover="'Inform about assets'" title="Assets">
            {{data.value.parameter}}
          </a>
        </div>
      </template>
    </b-table>
    <b-row>
      <b-col md="3">
        <b-form-select
          v-model="selected"
          :options="options"
          size="sm"
        />
      </b-col>
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
import GiantOracle from '@/modules/giant-oracle/mocks';
import moment from 'moment';
import _ from 'lodash';

const dateFormat = 'MMMM Do YYYY';
const timeFormat = 'h:mm:ss a';


export default {
  name: 'ActivitiesTable',
  components: {
  },
  data: () => ({
    allActivitiesList: [],
    fields: [
      { key: 'time.open', label: 'Date/Time', sortable: true },
      { key: 'activity', label: 'Type of activity', sortable: true },
      { key: 'inform', label: 'Additional information', sortable: false },
    ],
    selected: 60 * 1000,
    options: [
      { value: 5 * 60 * 1000, text: '5 minutes' },
      { value: 3 * 60 * 1000, text: '3 minutes' },
      { value: 60 * 1000, text: '1 minutes' },
      { value: 30 * 1000, text: '30 sec' },
    ],
    currentPage: 1,
    perPage: 10,
    totalRows: 20,
    sortBy: 'isActive',
    sortDesc: true,
    filter: null,
    intervalId: 0,
  }),
  created() {
    this.getAllActivitiesList();
  },
  computed: {
    computedActivitiesList: {
      get() {
        return this.allActivitiesList.map((item) => ({
          ...item,
          _rowVariant: item.isActive ? '' : 'opacity',
        }));
      },
      set(allActivitiesList) {
        this.allActivitiesList = allActivitiesList;
      },
    },
    sortOptions() {
      return this.fields
        .filter(f => f.sortable)
        .map(f => ({ text: f.label, value: f.key }));
    },
  },
  methods: {
    async getAllActivitiesList() {
      this.allActivitiesList = await GiantOracle.getAllActivitiesList();
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
    filterAllActivities() {
      this.getAllActivitiesList();
    },
    filterMyActivities() {
      this.computedActivitiesList = _.filter(this.computedActivitiesList, ['user', 'my']);
    },
    addTotalRows() {
      this.totalRows = this.computedActivitiesList.length;
    },
  },
};

</script>

<style lang="scss" scoped>
  /deep/ .table-opacity {
    opacity: 0.5;
  }
</style>
