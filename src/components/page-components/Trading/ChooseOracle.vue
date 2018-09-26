<template>
  <div></div>
</template>

<script>
import GiantOracle from '@/modules/giant-oracle/mocks';

import _ from 'lodash';

export default {
  name: 'ChooseOracle',
  methods: {
    async getOracleData() {
      this.$store.commit('showPreload');

      const data = await GiantOracle.getOracleList();

      const volumes = [];
      data.forEach(value => {
        volumes.push(value.volume.GIC);
      });

      const maxVolume = Math.max(...volumes);
      const oracle = _.find(data, { volume: { GIC: maxVolume } });

      this.$store.commit('hidePreload');

      this.$router.push({
        name: 'trading',
        params: {
          oracle_id: oracle.id,
        },
      });
    },
  },
  created() {
    this.getOracleData();
  },
};
</script>
