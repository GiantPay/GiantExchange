<template>
  <div>
    <b-row>
      <b-col md="3">
        <div class="btn-group">
          <b-button @click="$emit('filterTransactionActive')">Active</b-button>
          <b-button @click="$emit('filterTransactionAll')">All</b-button>
        </div>
      </b-col>
      <b-col md="3">
        <b-form-group horizontal class="mobile-show mt-3">
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
        <a href="#" @click.prevent="getDetailInfo({id: 'main_title'}, POPUP_TYPE.ORACLE)">
          {{data.value.oracle}}
        </a><br>
        <a href="#" @click.prevent="getDetailInfo({id: '89385'}, POPUP_TYPE.BROKER)">
          {{data.value.broker}}
        </a><br>
        <span v-b-popover.hover="'Inform about Value'" title="Value">
          <a :href="`${data.value.value.replace(/[^a-z]+/i,'_').toLowerCase()}`">
            {{data.value.value}}
          </a>
        </span>
      </template>
    </b-table>
    <b-row>
      <b-col md="3">
        <b-form-select
          v-model="selected"
          :options="options"
          @input="setSelected"
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
    <PopupInfo ref="popupInfo" :popupInfo="popupInfo"/>
  </div>
</template>

<script>
import PopupInfo from '@/components/page-components/Trading/popups/PopupInfo.vue';

import moment from 'moment';

import { BROKER_DETAIL, ORACLE_DETAIL } from '@/graphql';

import { POPUP_TYPE } from '@/modules/constants';

const dateFormat = 'MMMM Do YYYY';
const timeFormat = 'h:mm:ss a';

export default {
  name: 'GeneralTable',
  components: {
    PopupInfo,
  },
  props: {
    items: Array,
    fields: Array,
    buttonsTransactionActive: Boolean,
  },
  data: () => ({
    options: [
      { value: 5 * 60 * 1000, text: '5 minutes' },
      { value: 3 * 60 * 1000, text: '3 minutes' },
      { value: 60 * 1000, text: '1 minutes' },
      { value: 30 * 1000, text: '30 sec' },
    ],
    currentPage: 1,
    perPage: 20,
    totalRows: 10,
    sortBy: 'isActive',
    sortDesc: true,
    filter: null,
    intervalId: 0,

    selected: +localStorage.getItem('timeIntervalUpdate') || 60 * 1000,

    popupInfo: {
      volume: {},
      statistics: [],
      reviews: [],
    },

    POPUP_TYPE,
  }),
  created() {
    this.startInterval();
  },
  computed: {
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
    addTotalRows() {
      this.totalRows = this.items.length;
    },
    startInterval() {
      clearInterval(this.intervalId);

      this.intervalId = setInterval(() => {
        if (this.buttonsTransactionActive) {
          this.$emit('getActiveTransaction');
        } else {
          this.$emit('getAllTransaction');
        }
      }, this.selected);
    },
    setSelected(selected) {
      this.selected = selected;
      localStorage.setItem('timeIntervalUpdate', this.selected);
      this.startInterval();
    },

    async getDetailInfo({ id }, type) {
      this.$store.commit('showPreload');

      const { data } = await this.$apollo.query({
        query: type === POPUP_TYPE.BROKER
          ? BROKER_DETAIL
          : ORACLE_DETAIL,
        variables: {
          id,
        },
      });
      this.popupInfo = data.broker || data.oracle;

      this.$store.commit('hidePreload');
      this.$refs.popupInfo.showModal();
    },
  },
};
</script>

<style scoped>
  .mobile-show {
    display: none;
  }
  @media (min-width: 312px) and (max-width: 768px) {
    .mobile-show {
      display: block;
    }
  }
</style>
