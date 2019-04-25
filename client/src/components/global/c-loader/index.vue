<template>
  <div v-if="isLoading" id="page-loader" />
</template>

<script>
export default {
  name: "Loader",
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    }
  }
};
</script>

<style lang="scss" scoped>
#page-loader {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.7);
}
</style>
