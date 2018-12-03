<template>
  <b-container fluid>
    <b-row>
      <b-col md="6" class="my-1">
        <b-form-group horizontal label="Filter" class="mb-0">
          <b-input-group>
            <b-form-input v-model="filter" placeholder="Type to Search" />
            <b-input-group-append>
              <b-btn :disabled="!filter" @click="filter = ''">Clear</b-btn>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>
      <b-col md="6" class="my-1">
        <b-form-group horizontal label="Sort" class="mb-0">
          <b-input-group>
            <b-form-select v-model="sortBy" :options="sortOptions">
              <option slot="first" :value="null">-- none --</option>
            </b-form-select>
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
             :sort-direction="sortDirection"
    >
      <template slot="isActive" slot-scope="row">{{row.value?'Active':'Close'}}</template>
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
    <b-row>
      <b-col md="6" class="my-1">
        <b-pagination
          :total-rows="totalRows"
          :per-page="perPage"
          v-model="currentPage"
          class="my-0" />
      </b-col>
    </b-row>
    </b-container>
</template>

<script>

export default {
  name: 'GeneralTable',
  props: {
    items: Array,
  },
  data: () => ({
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
    perPage: 5,
    totalRows: 10,
    pageOptions: [5, 10, 15],
    sortBy: null,
    sortDesc: false,
    sortDirection: 'asc',
    filter: null,
  }),
  created() {
    this.addTotalRows();
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
    addTotalRows() {
      this.totalRows = this.items.length;
    },
  },
};
</script>

<style scoped>

</style>
