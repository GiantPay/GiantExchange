<template>
  <div>
    <b-form-group horizontal label="Filter" class="mb-2">
      <b-input-group>
        <b-form-input v-model="filter" placeholder="Type to Search" />
      </b-input-group>
    </b-form-group>
    <b-table striped
             responsive
             hover
             :items="assetList"
             :fields="fields"
             :sort-by.sync="sortBy"
             :filter="filter"
             @row-clicked="chooseAsset"
             class="bg-gray-lighter">
    </b-table>
  </div>
</template>

<script>
export default {
  name: 'AssetList',
  props: {
    assetList: {
      type: Array,
    },
  },
  data: () => ({
    filter: '',
    fields: [
      {
        key: 'asset',
        sortable: true,
      },
      {
        key: 'volume',
        label: 'Volume',
        sortable: true,
        formatter(value) {
          return `${value} BTC`;
        },
      },
      {
        key: 'members',
        label: 'Members',
        sortable: true,
        formatter(value) {
          return `${value.oraclesCount}/${value.openedOptions}/${value.openedOptionsPurchases}`;
        },
      },
      {
        key: 'maxTraderProfit',
        label: 'Profit',
        sortable: true,
        formatter(value, key, item) {
          return `${item.minTraderProfit}%...${item.maxTraderProfit}%`;
        },
      },
    ],
    sortBy: 'volume',
  }),
  methods: {
    chooseAsset(item) {
      this.$router.push({
        name: 'trading-oracle',
        params: {
          asset_id: item.id,
        },
      });
    },
  },
};
</script>

<style scoped>

</style>
