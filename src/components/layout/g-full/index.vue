<template>
  <div class="layout">
    <g-header />
    <div class="content-wrapper">
      <router-view/>
    </div>
    <g-footer />
  </div>
</template>

<script>
import GHeader from '@/components/layout/g-header/index.vue';
import GFooter from '@/components/layout/g-footer/index.vue';

export default {
  name: 'g-full',
  components: {
    GHeader,
    GFooter,
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
    flex: 1 0 auto;
  }
  .footer {
    flex: 0 0 auto;
  }
</style>
