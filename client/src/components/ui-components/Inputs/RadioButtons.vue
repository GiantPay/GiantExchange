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
  name: "RadioButtons",
  props: {
    optionsSelect: {
      type: Array,
      required: true
    },
    value: {
      type: Number,
      default: 0,
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
  margin-right: 5px;
}
/deep/ .btn-group > .btn:not(.dropdown-toggle) {
  border-radius: 5px;
  background-color: #ffffff;
  color: #4f4f4f;
  box-shadow: 0 3px 25px rgba(0, 0, 0, 0.1);
}
/deep/ .active {
  background-color: #0e5fda !important;
  color: #ffffff !important;
  box-shadow: none;
}
</style>
