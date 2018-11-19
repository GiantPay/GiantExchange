<template>
  <div>
    <b-form-input v-model="rate"
                  type="number"
                  placeholder="Enter your name" />
  </div>
</template>

<script>
export default {
  name: 'DealValue',
  data: () => ({
    rate: 100,
  }),
};
</script>

<style lang="scss" scoped>

</style>
