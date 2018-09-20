<template>
  <table class="block-table bg-gray-lighter mt-2">
    <tbody>
    <tr>
      <td class="border-r" style="width: 10%;">
        <div class="push-30 push-30-t font-w700 h5">
          <i class="fa fa-fw fa-star text-gray toggle-favorite"
             @click="toggleFavoriteOracle"
             :class="{ 'text-warning': isFavorite }"></i>
          {{ oracle.pair }}
        </div>
      </td>
      <td class="border-r" style="width: 50%;">
        <b-row>
          <b-col cols="6">
            <div class="h3">Oracle "{{ oracle.title }}"</div>
            <div class="text-muted push-5-t">{{ oracle.url }}</div>
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
                  :readonly="true"
                  char=""
                  inactive-char=""
                  class="fa stars"
              />
              <a href="#" class="ml-3">{{ oracle.reviews.length }} Reviews</a>
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
          {{ oracle.volume.GIC }} GIC / {{ oracle.volume.BTC }} BTC / {{ oracle.volume.USD }} $
        </div>
        <div class="text-muted push-5-t">24hr Volume</div>
      </td>
      <td class="text-center" style="width: 10%;">
        <div class="h4 font-w700">{{ oracle.optionsCount }}</div>
        <div class="text-muted push-5-t">Opened options</div>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'OracleInfo',
  props: {
    oracle: {
      type: Object,
    },
  },
  data: () => ({
    isFavorite: true,
  }),
  methods: {
    toggleFavoriteOracle() {
      this.isFavorite = !this.isFavorite;
    },
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
