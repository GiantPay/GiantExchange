<template>
  <div>
    <b-container fluid>
      <GeneralTable
        :items="computedTransactionList"
        :fields="fields"
        :buttonsTransactionActive="buttonsTransactionActive"
        @filterTransactionAll="filterTransactionAll"
        @filterTransactionActive="filterTransactionActive"
      >
      </GeneralTable>
      <b-row>
        <b-col md="3">
          <b-form-select
            v-model="selected"
            :options="options"
            @input="startInterval"
            size="sm"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import GiantOracle from '@/modules/giant-oracle/mocks';
import GeneralTable from '@/components/page-components/General/GeneralTable.vue';
import _ from 'lodash';

export default {
  name: 'TransactionTable',
  components: {
    GeneralTable,
  },
  data: () => ({
    transactionList: [],
    allTransactionList: [],
    buttonsTransactionActive: true,
    selected: localStorage.getItem('timeIntervalUpdate') || 60 * 1000,
    options: [
      { value: 5 * 60 * 1000, text: '5 minutes' },
      { value: 3 * 60 * 1000, text: '3 minutes' },
      { value: 60 * 1000, text: '1 minutes' },
      { value: 30 * 1000, text: '30 sec' },
    ],
    fields: [
      {
        key: 'time.open',
        label: 'Date/Time',
        sortable: true,
      },
      {
        key: 'assets',
        label: 'Assets',
        sortable: true,
      },
      { key: 'price', label: 'Price', sortable: true },
      {
        key: 'reward',
        label: 'Reward',
        sortable: true,
      },
      {
        key: 'time.close',
        label: 'Closing date/time',
        sortable: true,
      },
      {
        key: 'inform',
        label: 'Additional information',
        sortable: false,
      },
      { key: 'isActive', label: 'Status', sortable: true },
    ],
  }),
  created() {
    this.getActiveTransaction();
    this.startInterval();
  },
  computed: {
    computedTransactionList: {
      get() {
        return this.transactionList.map((item) => ({
          ...item,
          _rowVariant: item.isActive ? '' : 'opacity',
        }));
      },
      set(transactionList) {
        this.transactionList = transactionList;
      },
    },
  },
  methods: {
    filterTransactionActive() {
      this.computedTransactionList = _.filter(this.allTransactionList, ['isActive', true]);
      this.buttonsTransactionActive = true;
      console.log(1);
    },
    filterTransactionAll() {
      this.computedTransactionList = this.allTransactionList;
      this.buttonsTransactionActive = false;
      console.log(2);
    },
    async getActiveTransaction() {
      this.allTransactionList = await GiantOracle.getAllTransaction();
      this.computedTransactionList = _.filter(this.allTransactionList, ['isActive', true]);
      this.buttonsTransactionActive = true;
      console.log(3);
    },
    async getAllTransaction() {
      this.allTransactionList = await GiantOracle.getAllTransaction();
      this.computedTransactionList = this.allTransactionList;
      this.buttonsTransactionActive = false;
      console.log(4);
    },
    startInterval() {
      localStorage.setItem('timeIntervalUpdate', this.selected);

      clearInterval(this.intervalId);

      this.intervalId = setInterval(() => {
        console.log('interval');
        if (this.buttonsTransactionActive === true) {
          this.getActiveTransaction();
        } else {
          this.getAllTransaction();
        }
      }, this.selected);
    },
  },
};
</script>

<style lang="scss" scoped>
  /deep/ .table-opacity {
    opacity: 0.5;
  }
</style>
