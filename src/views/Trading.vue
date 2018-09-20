<template>
  <div>
    <OracleInfo :oracle="oracle"/>
    <OracleSlider :oracleList="oracleList" @chooseOracle="chooseOracle"/>
  </div>
</template>

<script>
import GiantOracle from '@/modules/giant-oracle/mocks';
import OracleInfo from '@/components/page-components/Trading/OracleInfo.vue';
import OracleSlider from '@/components/page-components/Trading/OracleSlider.vue';

export default {
  name: 'Trading',
  components: {
    OracleInfo,
    OracleSlider,
  },
  data: () => ({
    oracle: {
      reviews: [],
      volume: {},
    },

    oracleList: [],
  }),
  methods: {
    async getOracleData() {
      this.$store.commit('showPreload');

      const data = await GiantOracle.getOracleList();
      [this.oracle] = data;
      this.oracleList = data;

      this.oracleList = this.oracleList.map(oracle => ({
        ...oracle,
        isActive: false,
      }));
      this.oracleList[0].isActive = true;

      this.$store.commit('hidePreload');
    },
    preparePage() {
      this.getOracleData();
    },
    toggleFavoriteOracle() {
      this.isFavorite = !this.isFavorite;
    },
    chooseOracle(index) {
      this.oracleList = this.oracleList.map(oracle => ({
        ...oracle,
        isActive: false,
      }));
      this.oracleList[index].isActive = true;
      this.oracle = this.oracleList[index];
    },
  },
  created() {
    this.preparePage();
  },
};
</script>

<style scoped>

</style>
