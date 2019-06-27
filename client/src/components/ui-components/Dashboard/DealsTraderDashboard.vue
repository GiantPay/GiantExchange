<template>
  <div class="block-deals">
    <div class="header">
      <span>DEALS</span>
      <div class="input-group">
        <b-form-input
          v-model="filter"
          placeholder="Search"
          v-if="active"
          class="form-control"
          :disabled="disabled"
        />
        <div class="input-group-append">
          <span
            class="input-group-text"
            :disabled="!filter"
            :class="{ active: active }"
            @click="switchActive"
          >
            <Search />
          </span>
        </div>
      </div>
    </div>
    <div class="content">
      <b-table
        show-empty
        stacked="md"
        :items="items"
        :fields="fields"
        :filter="filter"
        :sort-direction="sortDirection"
        @filtered="onFiltered"
      >
        <template slot="status" slot-scope="row">
          <div class="circle-green" v-if="row.value"></div>
          <div class="circle-blue" v-if="!row.value"></div>
        </template>
        <template slot="dateDeals" slot-scope="row">
          <div>{{ row.value.date }}</div>
          <div class="gray tx-10">{{ row.value.time }}</div>
        </template>
        <template slot="asset" slot-scope="row">
          <span>{{ row.value }}</span>
        </template>
        <template slot="time" slot-scope="row">
          <span>{{ row.value }}</span>
        </template>
        <template slot="bet" slot-scope="row">
          <span>{{ row.value }}</span>
        </template>
        <template slot="profit" slot-scope="row">
          <Clock v-if="!row.value.status" class="clock"></Clock>
          <div class="green" v-if="row.value.status">
            +{{ row.value.value }}
          </div>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import Search from "../../../assets/icons/Search.vue";
import Clock from "../../../assets/icons/Clock.vue";

export default {
  name: "DealsTraderDashboard",
  components: {
    Search,
    Clock
  },
  data() {
    return {
      active: false,
      placeholder: "Input text",
      disabled: false,
      value: "",
      items: [
        {
          status: true,
          dateDeals: { date: "13.02.2019", time: "13:45" },
          asset: "BTC/USD",
          time: "1 min",
          bet: "220",
          profit: { status: false, value: "350" }
        },
        {
          status: true,
          dateDeals: { date: "13.02.2019", time: "13:45" },
          asset: "BTC/USD",
          time: "5 min",
          bet: "320",
          profit: { status: false, value: "350" }
        },
        {
          status: false,
          dateDeals: { date: "13.02.2019", time: "13:45" },
          asset: "BTC/USD",
          time: "2 min",
          bet: "500",
          profit: { status: true, value: "350" }
        },
        {
          status: false,
          dateDeals: { date: "13.02.2019", time: "13:45" },
          asset: "BTC/USD",
          time: "2 min",
          bet: "350",
          profit: { status: true, value: "350" }
        }
      ],
      fields: [
        { key: "status", label: "Status", sortable: true },
        { key: "dateDeals", label: "Date", sortable: true },
        { key: "asset", label: "Asset", sortable: true },
        { key: "time", label: "Time", sortable: true },
        { key: "bet", label: "Bet", sortable: true },
        { key: "profit", label: "Profit", sortable: true }
      ],
      totalRows: 1,
      sortBy: null,
      sortDesc: false,
      sortDirection: "asc",
      filter: null
    };
  },
  computed: {
    sortOptions() {
      return this.fields
        .filter(f => f.sortable)
        .map(f => {
          return { text: f.label, value: f.key };
        });
    }
  },
  methods: {
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
    },
    switchActive() {
      this.active = true;
    }
  }
};
</script>

<style scoped>
.block-deals {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 960px;
  box-shadow: 0 3px 25px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 20px;
}
.header {
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: bold;
}
.content {
  width: 100%;
}
.input-group {
  display: flex;
  justify-content: flex-end;
  max-width: 100px;
}
.input-group > .form-control:not(:last-child),
.input-group > .custom-select:not(:last-child) {
  height: 23px;
  background-color: #f4f5f7;
  border: 0;
}
.input-group-text {
  height: 23px;
  opacity: 0.6;
  border: 0;
  cursor: pointer;
  color: #c7c7c7;
}
.input-group-text:hover {
  color: #8b8b8b;
}
.active {
  color: #0c6cfd;
  opacity: 1;
  background-color: #f4f5f7;
}
.active:hover {
  color: #0c6cfd;
}
input {
  font-size: 10px;
}
input::-webkit-input-placeholder {
  font-size: 10px;
}
input::-moz-placeholder {
  font-size: 10px;
}
input:-ms-input-placeholder {
  font-size: 10px;
}
input:-moz-placeholder {
  font-size: 10px;
}
/deep/.input-group > .input-group-append > .input-group-text {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
/deep/ thead {
  background-color: #f4f5f7;
  border: 0;
}
/deep/ th {
  border: 0;
}
/deep/.table thead th {
  border-bottom: 0;
}
/deep/ td {
  border-bottom: 1px solid rgba(199, 199, 199, 0.7);
}
.circle-green {
  margin-top: 5px;
  width: 14px;
  height: 14px;
  border-radius: 23px;
  background-color: #00cc5b;
}
.circle-blue {
  margin-top: 5px;
  width: 14px;
  height: 14px;
  border-radius: 23px;
  background-color: #0e5fda;
}
.clock {
  width: 12px;
  height: 12px;
  color: #00cc5b;
  margin-left: 10px;
  margin-right: 5px;
}
.tx-10 {
  font-size: 10px;
}
.gray {
  color: #c7c7c7;
}
.green {
  color: #00cc5b;
}
</style>
