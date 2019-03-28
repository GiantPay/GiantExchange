<template>
  <FavoritesTable :fields="fields"
                  :list="brokerList"
                  :chooseRow="chooseBroker"
                  :showPopup="showPopup"
                  storageKey="favoriteBrokers" />
</template>

<script>
import FavoritesTable from '@/components/ui-components/Tables/FavoritesTable.vue';
import { mapActions } from 'vuex';

export default {
  name: 'BrokerList',
  components: {
    FavoritesTable,
  },
  props: {
    brokerList: {
      type: Array,
    },
    showPopup: {
      type: Function,
    },
  },
  data: () => ({
    fields: [
      {
        key: 'isFavorite',
        label: '',
      },
      {
        key: 'caption',
        label: 'Name',
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
        key: '_info',
      },
    ],
  }),
  methods: {
    chooseBroker(item) {
      this.$router.push({
        name: 'trading',
        params: {
          broker_id: item._id,
        },
      });

      this.getCurrentBroker(item._dealScheme);
    },

    ...mapActions('trading', [
      'getCurrentBroker',
    ]),
  },
};
</script>
