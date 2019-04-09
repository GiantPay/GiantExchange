<template>
  <div class="oracle-list mt-2">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide
          v-for="(oracle, index) in oracleList"
          :key="oracle.title"
          class="oracle bg-gray-lighter" :class="{ active: oracle.isActive }">
        <div @click="chooseOracle(index)">
          <div class="font-w700">
            <a href="#" @click.prevent.stop="showPopup({ _id: oracle.id }, POPUP_TYPE.ORACLE)">
              Oracle "{{ oracle.title }}"
            </a>
          </div>
          <div class="oracle-info" v-if="!oracle.isActive">
            <div class="font-w700">
              {{ oracle.volume.BTC }} BTC
              <div class="font-s12 font-w400">24hr Volume</div>
            </div>
            <div class="font-w700">
              {{ oracle.optionsCount }}
              <div class="font-s12 font-w400">Opened options</div>
            </div>
            <div class="font-w700">
              <i class="fa fa-circle text-success"></i>
              <div class="font-s12 font-w400">Ping 200 ms</div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

import { POPUP_TYPE } from '@/modules/constants';

export default {
  name: 'OracleSlider',
  components: {
    swiper,
    swiperSlide,
  },
  props: {
    oracleList: {
      type: Array,
    },
    showPopup: {
      type: Function,
    },
  },
  data: () => ({
    swiperOption: {
      slidesPerView: 'auto',
      allowTouchMove: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    },

    POPUP_TYPE,
  }),
  methods: {
    chooseOracle(index) {
      this.$emit('chooseOracle', index);
    },
  },
};
</script>

<style scoped>
  .oracle {
    width: 350px;
    padding: 15px;
    text-align: center;
    border: 1px solid #ccc;
    cursor: pointer;
    min-height: 102px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .oracle.active {
    border-bottom: 0;
    background: #fff;
  }
  .oracle-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
  }
  >>> .swiper-button-disabled {
    visibility: hidden;
  }
</style>
