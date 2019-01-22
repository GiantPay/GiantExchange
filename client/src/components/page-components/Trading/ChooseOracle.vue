<template>
  <div></div>
</template>

<script>
import GiantOracle from '@/modules/giant-oracle/mocks';

import _ from 'lodash';

export default {
  name: 'ChooseOracle',
  data: () => ({
    oracle: '',
    broker: '',
  }),
  methods: {
    async getOracleData() {
      this.$store.commit('showPreload');

      const data = await GiantOracle.getOracleList();

      const volumes = [];
      data.forEach(value => {
        volumes.push(value.volume.GIC);
      });

      const maxVolume = Math.max(...volumes);
      this.oracle = _.find(data, { volume: { GIC: maxVolume } });

      this.$store.commit('hidePreload');
    },
    async getBrokerData() {
      this.$store.commit('showPreload');

      const data = await GiantOracle.getBrokerList();

      const volumes = [];
      data.forEach(value => {
        volumes.push(value.volume);
      });

      const maxVolume = Math.max(...volumes);
      this.broker = _.find(data, { volume: maxVolume });

      this.$store.commit('hidePreload');
    },
  },
  async created() {
    await this.getOracleData();
    await this.getBrokerData();
    this.$router.push({
      name: 'trading',
      params: {
        oracle_id: this.oracle.id,
        broker_id: this.broker.id,
        broker_deal_scheme: this.broker.dealScheme,
      },
    });
  },
};
</script>
