<template>
  <div>
    <b-container fluid>
      <GeneralTable
        :items="computedTransactionList"
        :fields="fields"
        :buttons-transaction-active="buttonsTransactionActive"
        @filterTransactionAll="filterTransactionAll"
        @filterTransactionActive="filterTransactionActive"
        @getActiveTransaction="getActiveTransaction"
        @getAllTransaction="getAllTransaction"
      />
    </b-container>
  </div>
</template>

<script>
import GiantOracle from "@/modules/giant-oracle/mocks";
import GeneralTable from "@/components/page-components/General/GeneralTable.vue";
import filter from "lodash/filter";

export default {
  name: "TransactionTable",
  components: {
    GeneralTable
  },
  data: () => ({
    transactionList: [],
    allTransactionList: [],
    buttonsTransactionActive: true,
    fields: [
      { key: "time.open", label: "Date/Time", sortable: true },
      { key: "assets", label: "Assets", sortable: true },
      { key: "price", label: "Price", sortable: true },
      { key: "reward", label: "Reward", sortable: true },
      { key: "time.close", label: "Closing date/time", sortable: true },
      { key: "inform", label: "Additional information", sortable: false },
      { key: "isActive", label: "Status", sortable: true }
    ]
  }),
  computed: {
    computedTransactionList: {
      get() {
        return this.transactionList.map(item => ({
          ...item,
          _rowVariant: item.isActive ? "" : "opacity"
        }));
      },
      set(transactionList) {
        this.transactionList = transactionList;
      }
    }
  },
  created() {
    this.getActiveTransaction();
  },
  methods: {
    async getActiveTransaction() {
      this.allTransactionList = await GiantOracle.getAllTransaction();
      this.filterTransactionActive();
    },
    async getAllTransaction() {
      this.allTransactionList = await GiantOracle.getAllTransaction();
      this.filterTransactionAll();
    },
    filterTransactionActive() {
      this.computedTransactionList = filter(this.allTransactionList, [
        "isActive",
        true
      ]);
      this.buttonsTransactionActive = true;
    },
    filterTransactionAll() {
      this.computedTransactionList = this.allTransactionList;
      this.buttonsTransactionActive = false;
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/ .table-opacity {
  opacity: 0.5;
}
</style>
