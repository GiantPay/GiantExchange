<template>
  <div class="default-layout">
    <c-header :username="username" />
    <div class="content-wrapper">
      <slot/>
      <c-auth @authorized="getUsername" />
      <c-loader />
    </div>
    <c-footer />
    <notifications position="bottom left" />
  </div>
</template>

<script>
import cHeader from '@/components/layout/c-header/index.vue';
import cFooter from '@/components/layout/c-footer/index.vue';
import cAuth from '@/components/global/c-authorization/index.vue';
import cLoader from '@/components/global/c-loader/index.vue';

export default {
  name: 'default-layout',
  components: {
    cHeader,
    cFooter,
    cAuth,
    cLoader,
  },
  data: () => ({
    username: '',
  }),
  methods: {
    getUsername(username) {
      this.username = username;
    },
  },
};
</script>

<style lang="scss" scoped>
  .default-layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .default-layout /deep/ {
    @import '~bootstrap/dist/css/bootstrap.css';
    @import '~bootstrap-vue/dist/bootstrap-vue.css';
    @import '../../../styles/oneui.css';
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
