<template>
  <div>
    <b-form-group label="Button style radios">
      <b-form-radio-group
        v-model="updateButtonSelected"
        buttons
        button-variant="primary"
        :options="optionsSelect"
        name="radioBtnOutline"
      />
    </b-form-group>
  </div>
</template>

<script>
export default {
  name: "InputsFilters",
  props: {
    optionsSelect: {
      type: Array,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  },
  computed: {
    updateButtonSelected: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  }
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
  color: #c7c7c7;
  border-bottom: 1px solid #c7c7c7;
}
/deep/ .active {
  background-color: #ffffff !important;
  color: #4f4f4f !important;
  border-bottom: 3px solid #4f4f4f !important;
  border-radius: 0 !important;
}
</style>
