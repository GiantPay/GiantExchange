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
             :items="assetListFavorited"
             :fields="fields"
             :sort-by.sync="sortBy"
             :sort-desc="true"
             :filter="filter"
             @row-clicked="chooseAsset"
             class="bg-gray-lighter">
      <template slot="isFavorite" slot-scope="data">
        <i v-if="data.value"
           class="fa fa-star star"
           @click.stop="removeFromFavorite(data.item)"></i>
        <i v-else
           class="fa fa-star-o star"
           @click.stop="addToFavorite(data.item)"></i>
      </template>
    </b-table>
  </div>
</template>

<script>
import { storage } from '@/modules/helpers';
import _ from 'lodash';

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
        key: 'isFavorite',
        sortable: true,
        label: '<i class="fa fa-star"></i>',
      },
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

    favoriteList: storage.get('favoriteAssets'),
  }),
  computed: {
    assetListFavorited() {
      return this.assetList.map(asset => ({
        isFavorite: _.includes(this.favoriteList, asset.id),
        ...asset,
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
    addToFavorite(item) {
      if (!this.favoriteList) {
        storage.set('favoriteAssets', [item.id]);
      } else {
        this.favoriteList.push(item.id);
        storage.set('favoriteAssets', this.favoriteList);
        this.favoriteList = storage.get('favoriteAssets');
      }
      item.isFavorite = !item.isFavorite;
    },
    removeFromFavorite(item) {
      const index = _.indexOf(this.favoriteList, item.id);
      if (index >= 0) {
        this.favoriteList.splice(index, 1);
        storage.set('favoriteAssets', this.favoriteList);
      }
      item.isFavorite = !item.isFavorite;
    },
  },
};
</script>

<style scoped>
  .star {
    cursor: pointer;
  }
</style>
