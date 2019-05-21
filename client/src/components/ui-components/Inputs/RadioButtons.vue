<template>
  <div>
    <b-form-group>
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
  margin-right: auto;
}
/deep/ .btn-group > .btn:not(.dropdown-toggle) {
  border-radius: 5px;
  background-color: #ffffff;
  color: #4f4f4f;
  box-shadow: 0 3px 25px rgba(0, 0, 0, 0.1);
  text-transform: initial;
}
/deep/ .active {
  background-color: #0e5fda !important;
  color: #ffffff !important;
  box-shadow: none;
}
/deep/ .btn-group > .btn:not(:last-child),
.btn-group > .btn-group:not(:last-child) {
  margin-right: 0;
}
/deep/ .btn-group {
  position: relative;
  display: flex;
  vertical-align: middle;
  justify-content: space-between;
}
</style>
