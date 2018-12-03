<template>
  <GeneralTable :items="items"></GeneralTable>
</template>

<script>
import GeneralTable from '@/components/page-components/General/GeneralTable.vue';

const items = [
  {
    time: {
      open: +new Date(),
      close: +new Date() + (60 * 1000),
    },
    status: 'Success',
    isActive: false,
    assets: 'BTC/GIC',
    price: '112 GIC',
    reward: 0,
    inform: { oracle: 'Oracle', broker: 'Broker', value: 'Value' },
  },
  {
    time: {
      open: +new Date(),
      close: +new Date() + (60 * 1000),
    },
    status: 'Success',
    isActive: false,
    assets: 'BTC/GIC',
    price: '123 GIC',
    reward: '15 GIC 13%',
    inform: { oracle: 'Oracle', broker: 'Broker', value: 'Value' },
  },
  {
    time: {
      open: +new Date(),
      close: +new Date() + (60 * 1000),
    },
    status: 'Success',
    isActive: false,
    assets: 'ETH/USD',
    price: '23 GIC',
    reward: 0,
    inform: { oracle: 'Oracle', broker: 'Broker', value: 'Value' },
  },
  {
    time: {
      open: +new Date(),
      close: +new Date() + (60 * 1000),
    },
    status: 'Success',
    isActive: true,
    assets: 'BTC/USD',
    price: '16 GIC',
    reward: '15 GIC 15%',
    inform: { oracle: 'Oracle', broker: 'Broker', value: 'Value' },
  },
];


export default {
  name: 'TestGeneralTable',
  components: {
    GeneralTable,
  },
  data: () => ({
    items,
  }),

  methods: {

  },
};
</script>

<style scoped>

</style>
