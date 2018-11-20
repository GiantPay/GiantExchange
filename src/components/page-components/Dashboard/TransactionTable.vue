<template>
  <div>
    <b-table striped hover :items="items" :fields="fields"></b-table>
  </div>
</template>

<script>
export default {
  name: 'TransactionTable',
  props: {
    dealList: {
      type: Array,
    },
    isLoading: {
      type: Boolean,
      default: true,
    },
  },
  data: () => ({
    fields: {
      date_time: {
        label: 'Date/Time',
        sortable: true,
      },
      assets: {
        label: 'Assets',
        sortable: true,
      },
      price: {
        label: 'Price',
        sortable: true,
      },
      revard: {
        label: 'Revard',
        sortable: true,
      },
      close_time: {
        label: 'Closing date/time',
        sortable: true,
      },
      inform: {
        label: 'Additional information',
      },
    },
    items: [
      {
        isActive: true,
        date_time: '20.11.2018 11:20',
        assets: '500',
        price: '0.00058',
        revard: '15',
        close_time: '20.11.2018 11:27',
        inform: 'loren',
      },
      {
        isActive: true,
        date_time: '20.11.2018 11:21',
        assets: '300',
        price: '0.00062',
        revard: '15',
        close_time: '20.11.2018 11:23',
        inform: 'loren',
      },
      {
        isActive: true,
        date_time: '20.11.2018 11:19',
        assets: '100',
        price: '0.00055',
        revard: '15',
        close_time: '20.11.2018 11:32',
        inform: 'loren',
      },
      {
        isActive: true,
        date_time: '20.11.2018 11:23',
        assets: '600',
        price: '0.00059',
        revard: '15',
        close_time: '20.11.2018 11:21',
        inform: 'loren',
      },
    ],
  }),
  methods: {},
};
</script>

<style lang="scss" scoped>

</style>
