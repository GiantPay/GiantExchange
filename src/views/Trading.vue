<template>
  <table class="block-table bg-gray-lighter mt-2">
    <tbody>
    <tr>
      <td class="border-r" style="width: 10%;">
        <div class="push-30 push-30-t font-w700 h5">
          <i class="fa fa-fw fa-star text-gray toggle-favorite"
             @click="toggleFavoriteOracle"
             :class="{ 'text-warning': isFavorite }"></i>
          {{ pair }}
        </div>
      </td>
      <td class="border-r" style="width: 50%;">
        <b-row>
          <b-col cols="6">
            <div class="h3">Oracle "{{ title }}"</div>
            <div class="text-muted push-5-t">{{ url }}</div>
          </b-col>
          <b-col cols="4" class="rating-container">
            <div>
              <vue-stars
                  name="rating"
                  active-color="#ffc107"
                  inactive-color="#c9c9c9"
                  shadow-color="none"
                  hover-color="#ffc107"
                  :max="5"
                  :value="3"
                  :readonly="false"
                  char=""
                  inactive-char=""
                  class="fa stars"
              />
              <a href="#" class="ml-3">{{ reviews.length }} Reviews</a>
            </div>
            <div>Reputation</div>
          </b-col>
          <b-col cols="2" class="text-center">
            <i class="fa fa-circle fa-2x text-success"></i>
            <div>Ping 200 ms</div>
          </b-col>
        </b-row>
      </td>
      <td class="border-r" style="width: 30%;">
        <div class="h4 font-w700">
          {{ volume.GIC }} GIC / {{ volume.BTC }} BTC / {{ volume.USD }} $
        </div>
        <div class="text-muted push-5-t">24hr Volume</div>
      </td>
      <td class="text-center" style="width: 10%;">
        <div class="h4 font-w700">{{ optionsCount }}</div>
        <div class="text-muted push-5-t">Opened options</div>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import GiantOracle from '@/modules/giant-oracle/mocks';

export default {
  name: 'Trading',
  data: () => ({
    pair: '',
    title: '',
    url: '',
    optionsCount: 0,
    reviews: [],
    volume: {
      GIC: 0,
      BTC: 0,
      USD: 0,
    },

    isFavorite: true,
  }),
  methods: {
    async getOracleData() {
      this.$store.commit('showPreload');

      const data = await GiantOracle.getOracleData();
      this.pair = data.pair;
      this.title = data.title;
      this.url = data.url;
      this.optionsCount = data.optionsCount;
      this.volume = data.volume;
      this.reviews = data.reviews;

      this.$store.commit('hidePreload');
    },
    preparePage() {
      this.getOracleData();
    },
    toggleFavoriteOracle() {
      this.isFavorite = !this.isFavorite;
    },
  },
  created() {
    this.preparePage();
  },
};
</script>

<style scoped>
  .rating-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .stars >>> label {
    display: inline-block;
    cursor: pointer;
    margin-bottom: 0;
    font-size: 1.1em;
  }
  .toggle-favorite {
    cursor: pointer;
  }
</style>
