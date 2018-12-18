<template>
  <div>
    <b-row class="mb-2">
      <b-col cols="4" class="centered">
        <i class="fa fa-05x fa-star mr-2 ml-2"
           :class="{ 'fa-star-o': filterActive }"
           @click="filterList"></i>
        Filter
      </b-col>
      <b-col cols="8">
        <b-form-input v-model="filter" placeholder="Type to Search" />
      </b-col>
    </b-row>
    <b-table striped
             responsive
             hover
             :items="listFavorited"
             :fields="fields"
             :sort-by.sync="sortBy"
             :sort-desc="true"
             :filter="filter"
             @row-clicked="chooseRow"
             tbody-tr-class="row-nav"
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
  name: 'FavoritesTable',
  props: {
    list: {
      type: Array,
    },
    fields: {
      type: Array,
    },
    storageKey: {
      type: String,
    },
    chooseRow: {
      type: Function,
    },
  },
  data() {
    return {
      filter: '',
      sortBy: 'volume',
      filterActive: true,

      favoriteList: storage.get(this.storageKey),
    };
  },
  computed: {
    listFavorited() {
      return this.list.map(item => ({
        isFavorite: _.includes(this.favoriteList, item.id),
        ...item,
      })).filter(item => this.filterActive || item.isFavorite);
    },
  },
  methods: {
    addToFavorite(item) {
      if (!this.favoriteList) {
        storage.set(this.storageKey, [item.id]);
      } else {
        this.favoriteList.push(item.id);
        storage.set(this.storageKey, this.favoriteList);
        this.favoriteList = storage.get(this.storageKey);
      }
      item.isFavorite = !item.isFavorite;
    },
    removeFromFavorite(item) {
      const index = _.indexOf(this.favoriteList, item.id);
      if (index >= 0) {
        this.favoriteList.splice(index, 1);
        storage.set(this.storageKey, this.favoriteList);
      }
      item.isFavorite = !item.isFavorite;
    },
    filterList() {
      this.filterActive = !this.filterActive;
    },
  },
};
</script>

<style lang="scss" scoped>
  .centered {
    display: flex;
    align-items: center;
  }
  /deep/ .row-nav {
    cursor: pointer;
  }
  .star,
  .fa-star {
    cursor: pointer;
  }
  .fa-05x {
    font-size: 1.5em;
  }
</style>
