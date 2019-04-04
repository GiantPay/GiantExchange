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
  name: 'RadioButtons',
  props: {
    optionsSelect: {
      type: Array,
      default: () => [0],
      required: true,
    },
    value: {
      type: Number,
      default: 0,
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
    margin-right: 5px;
  }
  /deep/ .btn-group > .btn:not(.dropdown-toggle) {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    background-color: #FFFFFF;
    color: #4F4F4F;
    box-shadow: 0 3px 25px rgba(0,0,0,0.1);
  }
  /deep/ .active {
    background-color: #0E5FDA !important;
    color: #ffffff !important;
    box-shadow: none;
  }
</style>
