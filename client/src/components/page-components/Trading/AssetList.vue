<template>
  <FavoritesTable :fields="fields"
                  :list="assetList"
                  :chooseRow="chooseAsset"
                  storageKey="favoriteAssets" />
</template>

<script>
import FavoritesTable from '@/components/ui-components/Tables/FavoritesTable.vue';

export default {
  name: 'AssetList',
  components: {
    FavoritesTable,
  },
  props: {
    assetList: {
      type: Array,
    },
  },
  data: () => ({
    fields: [
      {
        key: 'isFavorite',
        label: '',
      },
      {
        key: 'asset',
        sortable: true,
      },
      {
        key: 'volume',
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

