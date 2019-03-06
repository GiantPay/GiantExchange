<template>
  <div id="page-loader" v-if="isLoading"></div>
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
</style>
