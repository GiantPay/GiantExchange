<template>
  <div class="layout">
    <c-header />
    <div class="content-wrapper">
      <router-view/>
      <c-auth/>
    </div>
    <c-footer />
  </div>
</template>

<script>
import cHeader from '@/components/layout/c-header/index.vue';
import cFooter from '@/components/layout/c-footer/index.vue';
import cAuth from '@/components/global/c-authorization/index.vue';

export default {
  name: 'c-full',
  components: {
    cHeader,
    cFooter,
    cAuth,
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
