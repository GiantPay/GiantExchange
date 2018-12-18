<template>
  <FavoritesTable :fields="fields"
                  :list="brokerList"
                  :chooseRow="chooseBroker"
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
  },
  data: () => ({
    fields: [
      {
        key: 'isFavorite',
        label: '<i class="fa fa-star"></i>',
      },
      {
        key: 'caption',
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
        key: 'info',
      },
    ],
  }),
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

    ...mapActions('trading', [
      'getCurrentBroker',
    ]),
  },
};
</script>
