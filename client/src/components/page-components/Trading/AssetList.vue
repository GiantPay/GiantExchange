<template>
  <FavoritesTable :fields="fields"
                  :list="mappedAssetList"
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
        key: '_volume',
        sortable: true,
        formatter(value) {
          return `${value} BTC`;
        },
      },
      {
        key: '_members',
        label: 'Members',
        sortable: true,
        formatter(value) {
          return `${value.oraclesCount}/${value.openedOptions}/${value.openedOptionsPurchases}`;
        },
      },
      {
        key: '_maxTraderProfit',
        label: 'Profit',
        sortable: true,
        formatter(value, key, item) {
          return `${item._minTraderProfit}%...${item._maxTraderProfit}%`;
        },
      },
    ],
  }),
  computed: {
    mappedAssetList() {
      return this.assetList.map(asset => ({
        asset: asset.asset,
        _id: asset.id,
        _maxTraderProfit: asset.maxTraderProfit,
        _members: asset.members,
        _minTraderProfit: asset.minTraderProfit,
        _volume: asset.volume,
      }));
    },
  },
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

