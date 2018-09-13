<template>
  <div class="layout">
    <c-header />
    <div class="content-wrapper">
      <router-view />
      <c-auth />
      <c-loader />
    </div>
    <c-footer />
  </div>
</template>

<script>
import cHeader from '@/components/layout/c-header/index.vue';
import cFooter from '@/components/layout/c-footer/index.vue';
import cAuth from '@/components/global/c-authorization/index.vue';
import cLoader from '@/components/global/c-loader/index.vue';

export default {
  name: 'c-full',
  components: {
    cHeader,
    cFooter,
    cAuth,
    cLoader,
  },
};
</script>

<style lang="scss" scoped>
  .layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .content-wrapper {
    position: relative;
    flex: 1 0 auto;
    padding: 0 15px;
  }
  .footer {
    flex: 0 0 auto;
  }
</style>
