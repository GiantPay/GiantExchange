<template>
  <div>
    <b-row class="mb-2">
      <b-col cols="4" class="centered">
        <i
          class="fa fa-05x fa-star star-filter mr-2 ml-2"
          :class="{ 'fa-star-o': filterActive }"
          @click="filterList"
        />
        Filter
      </b-col>
      <b-col cols="8">
        <b-form-input v-model="filter" placeholder="Type to Search" />
      </b-col>
    </b-row>
    <b-table
      striped
      responsive
      hover
      :items="listFavorited"
      :fields="fields"
      :sort-by.sync="sortBy"
      :sort-desc="true"
      :filter="filter"
      tbody-tr-class="row-nav"
      class="bg-gray-lighter"
      @row-clicked="chooseRow"
    >
      <template slot="isFavorite" slot-scope="data">
        <i
          v-if="data.value"
          class="fa fa-star star"
          @click.stop="removeFromFavorite(data.item)"
        />
        <i
          v-else
          class="fa fa-star-o star"
          @click.stop="addToFavorite(data.item)"
        />
      </template>

      <template slot="_info" slot-scope="data">
        <a
          href="#"
          @click.prevent.stop="showPopup(data.item, POPUP_TYPE.BROKER)"
        >
          {{ data.value }}
        </a>
      </template>
    </b-table>
  </div>
</template>

<script>
import { storage } from "@/modules/helpers";
import includes from "lodash/includes";
import indexOf from "lodash/indexOf";

import { POPUP_TYPE } from "@/modules/constants";

export default {
  name: "FavoritesTable",
  props: {
    list: {
      type: Array
    },
    fields: {
      type: Array
    },
    storageKey: {
      type: String
    },
    chooseRow: {
      type: Function
    },
    showPopup: {
      type: Function
    }
  },
  data() {
    return {
      filter: "",
      sortBy: "_volume",
      filterActive: true,

      favoriteList: storage.get(this.storageKey),

      POPUP_TYPE
    };
  },
  computed: {
    listFavorited() {
      return this.list
        .map(item => ({
          isFavorite: includes(this.favoriteList, item._id),
          ...item
        }))
        .filter(item => this.filterActive || item.isFavorite);
    }
  },
  methods: {
    addToFavorite(item) {
      if (!this.favoriteList) {
        storage.set(this.storageKey, [item._id]);
      } else {
        this.favoriteList.push(item._id);
        storage.set(this.storageKey, this.favoriteList);
        this.favoriteList = storage.get(this.storageKey);
      }
      item.isFavorite = !item.isFavorite;
    },
    removeFromFavorite(item) {
      const index = indexOf(this.favoriteList, item._id);
      if (index >= 0) {
        this.favoriteList.splice(index, 1);
        storage.set(this.storageKey, this.favoriteList);
      }
      item.isFavorite = !item.isFavorite;
    },
    filterList() {
      this.filterActive = !this.filterActive;
    }
  }
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
.star-filter {
  padding: 5px;
  border: 1px solid #aaa;
  border-radius: 5px;
}
</style>
