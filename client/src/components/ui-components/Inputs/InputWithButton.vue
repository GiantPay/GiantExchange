<template>
  <div class="input-group">
    <b-form-input
      class="form-control"
      :disabled="disabled"
      :v-model="text"
      :placeholder="placeholder" />
    <div class="input-group-append">
      <span class="input-group-text">GIC</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'InputWithButton',
    props: {
      text: {
        type: String,
        default: '',
      },
      placeholder: {
        type: String,
        default: 'Input text',
      },
      disabled: {
        type: Boolean,
        default: false,
      },
    },
    methods: {

    }
  };
</script>

<style lang="scss" scoped>
  .input-group-text{
    opacity: 0.6;
  }
</style>
