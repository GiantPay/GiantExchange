<template>
  <div>
    <b-table striped hover :items="assetList" class="bg-gray-lighter"></b-table>
  </div>
</template>

<script>
export default {
  name: 'AssetList',
  props: {
    assetList: {
      type: Array,
    },
  },
};
</script>

<style scoped>

</style>
