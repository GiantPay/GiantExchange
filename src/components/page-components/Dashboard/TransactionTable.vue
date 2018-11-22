<template>
  <div>
    <b-container fluid>
    <b-row>
      <b-col md="3" class="my-1">
        <div class="btn-group">
          <button v-for="button in buttons"
                  :key="button.caption"
                  :class="{ focus: button.isActive }"
                  @click="toggleTransaction(button)"
                  class="btn btn-default"
                  type="button">
            {{ button.caption }}
          </button>
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
              <b-btn :disabled="!filter" @click="filter = ''">Clear</b-btn>
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
             @filtered="onFiltered"
    >
    </b-table>
      </b-col>
    </b-row>
      <b-row>
        <b-col md="3" class="my-1">
          <b-form-select v-model="selected" :options="options" class="mb-3" size="sm" />
        </b-col>
        <b-col md="6" class="my-1">
          <b-pagination :per-page="perPage" v-model="currentPage" class="my-0" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

export default {
  name: 'TransactionTable',
  props: {
    transactionList: {
      type: Array,
    },
  },
  data: () => ({
    selected: 5,
    options: [
      { value: 5, text: '5 minutes' },
      { value: 3, text: '3 minutes' },
      { value: 1, text: '1 minutes' },
      { value: 0.5, text: '30 sec' },
    ],
    fields: [
      { key: 'date_time', label: 'Date/Time', sortable: true },
      { key: 'assets', label: 'Assets', sortable: true },
      { key: 'price', label: 'Price', sortable: true },
      { key: 'revard', label: 'Reward', sortable: true },
      { key: 'close_time', label: 'Closing date/time', sortable: true },
      { key: 'inform', label: 'Additional information', sortable: false },
    ],
    currentPage: 1,
    perPage: 5,
    pageOptions: [5, 10, 15],
    sortBy: null,
    filter: null,

    buttons: [
      {
        caption: 'Active',
        isActive: true,
      },
      {
        caption: 'All',
        isActive: false,
      },
    ],
  }),
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => ({ text: f.label, value: f.key }));
    },
  },
  methods: {
    toggleTransaction(button) {
      this.buttons.forEach(value => {
        value.isActive = false;
      });
      button.isActive = true;
      this.$emit('toggleTransaction', button.caption);
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
