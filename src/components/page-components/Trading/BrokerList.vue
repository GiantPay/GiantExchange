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
             :items="brokerListFavorited"
             :fields="fields"
             :sort-by.sync="sortBy"
             :sort-desc="true"
             :filter="filter"
             @row-clicked="chooseBroker"
             tbody-tr-class="broker-nav"
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
import { mapActions } from 'vuex';

import { storage } from '@/modules/helpers';
import _ from 'lodash';

export default {
  name: 'BrokerList',
  props: {
    brokerList: {
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
        key: 'caption',
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
        key: 'info',
      },
    ],
    sortBy: 'volume',

    favoriteList: storage.get('favoriteBrokers'),
  }),
  computed: {
    brokerListFavorited() {
      return this.brokerList.map(asset => ({
        isFavorite: _.includes(this.favoriteList, asset.id),
        ...asset,
      }));
    },
  },
  methods: {
    chooseBroker(item) {
      this.$router.push({
        name: 'trading',
        params: {
          broker_id: item.id,
        },
      });

      this.getCurrentBroker(item.dealScheme);
    },
    addToFavorite(item) {
      if (!this.favoriteList) {
        storage.set('favoriteBrokers', [item.id]);
      } else {
        this.favoriteList.push(item.id);
        storage.set('favoriteBrokers', this.favoriteList);
        this.favoriteList = storage.get('favoriteBrokers');
      }
      item.isFavorite = !item.isFavorite;
    },
    removeFromFavorite(item) {
      const index = _.indexOf(this.favoriteList, item.id);
      if (index >= 0) {
        this.favoriteList.splice(index, 1);
        storage.set('favoriteBrokers', this.favoriteList);
      }
      item.isFavorite = !item.isFavorite;
    },

    ...mapActions('trading', [
      'getCurrentBroker',
    ]),
  },
};
</script>

<style lang="scss">
  .broker-nav {
    cursor: pointer;
  }
</style>
