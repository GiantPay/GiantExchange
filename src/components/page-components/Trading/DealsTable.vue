<template>
  <div>
    <b-table striped
             responsive
             caption-top
             :items="dealList"
             :fields="fields"
             :sort-by.sync="sortBy"
             :class="{ 'block-opt-refresh': isLoading }"
             class="block">

      <template slot="table-caption">
        <div class="caption-block px-3">
          <h2>Deals</h2>
          <div class="btn-group">
            <button v-for="button in buttons"
                    :key="button.caption"
                    :class="{ focus: button.isActive }"
                    @click="toggleDeals(button)"
                    class="btn btn-default"
                    type="button">
              {{ button.caption }}
            </button>
          </div>
        </div>
      </template>

      <template slot="time" slot-scope="data">
        <div>{{ getFormattedDate(data.value.open) }}</div>
        <div>{{ getFormattedDate(data.value.close) }}</div>
      </template>

      <template slot="reward" slot-scope="data">
        <div :class="{ 'text-danger': !parseInt(data.value) }">
          {{ data.value }}
        </div>
      </template>

      <template slot="status" slot-scope="data">
        <div :class="{ 'text-danger': data.value === 'Fail' }">
          {{ data.value }}
        </div>
      </template>

    </b-table>
  </div>
</template>

<script>
import moment from 'moment';

const dateFormat = 'MMMM Do YYYY, h:mm:ss a';

export default {
  name: 'DealsTable',
  props: {
    dealList: {
      type: Array,
    },
    isLoading: {
      type: Boolean,
      default: true,
    },
  },
  data: () => ({
    fields: [
      {
        key: 'time',
        sortable: true,
      },
      {
        key: 'id',
        sortable: true,
      },
      {
        key: 'openValue',
        label: 'Open',
        sortable: true,
      },
      {
        key: 'closeValue',
        label: 'Close',
        sortable: true,
      },
      {
        key: 'amount',
        sortable: true,
        tdClass: 'text-danger',
      },
      {
        key: 'reward',
        sortable: true,
        tdClass: 'text-success',
      },
      {
        key: 'status',
        sortable: true,
        tdClass: 'text-success',
      },
    ],
    sortBy: 'time',

    buttons: [
      {
        caption: 'My',
        isActive: true,
      },
      {
        caption: 'All',
        isActive: false,
      },
    ],
  }),
  methods: {
    getFormattedDate(date) {
      return moment(date).format(dateFormat);
    },
    toggleDeals(button) {
      this.buttons.forEach(value => {
        value.isActive = false;
      });
      button.isActive = true;
      this.$emit('toggleDeals', button.caption);
    },
  },
};
</script>

<style lang="scss" scoped>
  .caption-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      box-shadow: none;
    }
  }
  .block {
    background: #f9f9f9;
    &.block-opt-refresh:before {
      background: rgba(255, 255, 255, .7);
    }
  }
</style>
