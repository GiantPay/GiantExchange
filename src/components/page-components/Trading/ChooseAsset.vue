<template>
  <div></div>
</template>

<script>
import GiantOracle from '@/modules/giant-oracle/mocks';

export default {
  name: 'ChooseAsset',
  methods: {
    async getAsset() {
      this.$store.commit('showPreload');
      const asset = await GiantOracle.getBiggestVolumeAsset();
      this.$store.commit('hidePreload');
      this.$router.push({
        name: 'trading-oracle',
        params: {
          asset_id: asset,
        },
      });
    },
  },
  created() {
    this.getAsset();
  },
};
</script>
