<template>
  <div>
    <b-form-group
      label="Button style radios">
      <b-form-radio-group
        buttons
        button-variant="primary"
        v-model="updateButtonSelected"
        :options="optionsSelect"
        name="radioBtnOutline"
      />
    </b-form-group>
  </div>
</template>

<script>
export default {
  name: 'InputsFilters',
  props: {
    optionsSelect: {
      type: Array,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  computed: {
    updateButtonSelected: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
  /deep/ .btn-primary {
    text-transform: none;
    font-size: 10px;
    padding-bottom: 3px;
  }
  /deep/ .btn-group > .btn:not(.dropdown-toggle) {
    background-color: transparent;
    color: #C7C7C7;
    border-bottom: 1px solid #C7C7C7;
  }
  /deep/ .active {
    background-color: #FFFFFF !important;
    color: #4F4F4F !important;
    border-bottom: 3px solid #4F4F4F !important;
    border-radius: 0 !important;
  }
</style>
