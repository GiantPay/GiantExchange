<template>
  <transition name="fade">
    <div id="page-loader" v-if="isLoading"></div>
  </transition>
</template>

<script>
export default {
  name: 'loader',
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
  },
};
</script>

<style lang="scss" scoped>
  #page-loader {
    position: absolute;
    background-color: rgba(255, 255, 255, .7);
  }
  .fade-enter-active {
    transition: 0s;
  }
  .fade-leave-active {
    transition: .2s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
