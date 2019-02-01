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
import moment from 'moment';
import _ from 'lodash';

const dateFormat = 'MMMM Do YYYY';
const timeFormat = 'h:mm:ss a';

const items = [
  {
    user: 'all',
    isActive: true,
    time: {
      open: +new Date() - (680 * 1000),
      close: +new Date() - (240 * 1000),
    },
    activity: 'Your vote has been created',
    inform: {
      inform: 'unfunded initiative created',
      details: '',
      parameter: '',
    },
  },
  {
    user: 'all',
    isActive: true,
    time: {
      open: +new Date() - (680 * 1000),
      close: +new Date() - (240 * 1000),
    },
    activity: 'Your vote has been created',
    inform: {
      inform: 'funded initiative created',
      details: '',
      parameter: '',
    },
  },
  {
    user: 'all',
    isActive: true,
    time: {
      open: +new Date() - (680 * 1000),
      close: +new Date() - (240 * 1000),
    },
    activity: 'Your vote has been created',
    inform: {
      inform: 'new underlying asset added',
      details: 'NewBaseAsset',
      parameter: '',
    },
  },
  {
    user: 'all',
    isActive: true,
    time: {
      open: +new Date() - (680 * 1000),
      close: +new Date() - (240 * 1000),
    },
    activity: 'Your vote has been created',
    inform: {
      inform: 'new Brokers Factory added',
      details: 'NewBrokerFactory',
      parameter: '',
    },
  },
  {
    user: 'all',
    isActive: true,
    time: {
      open: +new Date() - (680 * 1000),
      close: +new Date() - (240 * 1000),
    },
    activity: 'Your vote has been created',
    inform: {
      inform: 'new Oracle added',
      details: 'NewOracle',
      parameter: '',
    },
  },
  {
    user: 'all',
    isActive: false,
    time: {
      open: +new Date() - (280 * 1000),
      close: +new Date() - (140 * 1000),
    },
    activity: 'Initiative didn’t pass',
    inform: {
      inform: 'initiative didn’t pass',
      details: '',
      parameter: '',
    },
  },
  {
    user: 'all',
    isActive: true,
    time: {
      open: +new Date() - (280 * 1000),
      close: +new Date() - (140 * 1000),
    },
    activity: 'Initiative passed',
    inform: {
      inform: 'funding received',
      details: '',
      parameter: '150 GIC',
    },
  },
  {
    user: 'all',
    isActive: true,
    time: {
      open: +new Date() - (280 * 1000),
      close: +new Date() - (140 * 1000),
    },
    activity: 'Initiative passed',
    inform: {
      inform: 'new asset added',
      details: 'NewAsset',
      parameter: '',
    },
  },
  {
    user: 'all',
    isActive: true,
    time: {
      open: +new Date() - (280 * 1000),
      close: +new Date() - (140 * 1000),
    },
    activity: 'Initiative passed',
    inform: {
      inform: 'new oracle added',
      details: 'NewOracle',
      parameter: '',
    },
  },
  {
    user: 'all',
    isActive: true,
    time: {
      open: +new Date() - (280 * 1000),
      close: +new Date() - (140 * 1000),
    },
    activity: 'Initiative passed',
    inform: {
      inform: 'new broker added',
      details: 'NewBroker',
      parameter: '',
    },
  },
  {
    user: 'all',
    isActive: true,
    time: {
      open: +new Date() - (280 * 1000),
      close: +new Date() - (140 * 1000),
    },
    activity: 'Initiative passed',
    inform: {
      inform: 'platform working parameter changed',
      details: 'NewChanged',
      parameter: '',
    },
  },
  {
    user: 'my',
    isActive: true,
    time: {
      open: +new Date() - (80 * 1000),
      close: +new Date() - (40 * 1000),
    },
    activity: 'Your deal is opened',
    inform: {
      inform: 'active deal',
      details: 'dfsfe12342rfe',
      parameter: '',
    },
  },
  {
    user: 'my',
    isActive: false,
    time: {
      open: +new Date(),
      close: +new Date() + (160 * 1000),
    },
    activity: 'Your deal is closed',
    inform: {
      inform: 'you receive a reward',
      details: 'dfsfe12342rfe',
      parameter: '15GIC',
    },
  },
  {
    user: 'my',
    isActive: true,
    time: {
      open: +new Date(),
      close: +new Date() + (160 * 1000),
    },
    activity: 'Your deal is closed',
    inform: {
      inform: 'you receive nothing',
      details: 'dfsfe12342rfe',
      parameter: '',
    },
  },
  {
    user: 'broker',
    isActive: true,
    time: {
      open: +new Date(),
      close: +new Date() + (160 * 1000),
    },
    activity: 'Your binary option has been created',
    inform: {
      inform: 'your binary option has been created',
      details: 'NewBroker',
      parameter: '',
    },
  },
  {
    user: 'broker',
    isActive: true,
    time: {
      open: +new Date(),
      close: +new Date() + (160 * 1000),
    },
    activity: 'Your binary option deal has been created',
    inform: {
      inform: 'your binary option deal has been created',
      details: 'YourDeal',
      parameter: '15GIC',
    },
  },
  {
    user: 'broker',
    isActive: false,
    time: {
      open: +new Date(),
      close: +new Date() + (160 * 1000),
    },
    activity: 'Your binary option deal has been closed',
    inform: {
      inform: 'your binary option deal has been closed. Distributed sum:',
      details: 'YourDeal',
      parameter: '120GIC',
    },
  },

  {
    user: 'oracle',
    isActive: true,
    time: {
      open: +new Date(),
      close: +new Date() + (160 * 1000),
    },
    activity: 'Your Oracle has been accepted',
    inform: {
      inform: 'your Oracle has been accepted',
      details: 'YourOracle',
      parameter: '',
    },
  },
  {
    user: 'oracle',
    isActive: false,
    time: {
      open: +new Date(),
      close: +new Date() + (160 * 1000),
    },
    activity: 'Your Oracle has not been accepted',
    inform: {
      inform: 'your Oracle has not been accepted',
      details: 'Governance',
      parameter: '',
    },
  },
];

export default {
  name: 'ActivitiesTable',
  components: {
  },
  data: () => ({
    items,
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
  computed: {
    computedActivitiesList: {
      get() {
        return this.items.map((item) => ({
          ...item,
          _rowVariant: item.isActive ? '' : 'opacity',
        }));
      },
      set(activitiesList) {
        this.items = activitiesList;
      },
    },
    sortOptions() {
      return this.fields
        .filter(f => f.sortable)
        .map(f => ({ text: f.label, value: f.key }));
    },
  },
  methods: {
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
    getAllActivities() {
      this.computedActivitiesList = items;
    },
    filterAllActivities() {
      this.getAllActivities();
    },
    filterMyActivities() {
      this.getAllActivities();
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
