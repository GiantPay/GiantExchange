<template>
  <div>
    <div class="input-group">
      <b-form-input
        v-model="$v.computedValue.$model"
        class="form-control"
        type="number"
        :disabled="disabled"
        :placeholder="placeholder"
      />
      <div class="input-group-append">
        <span class="input-group-text">{{ labelValue }}</span>
      </div>
    </div>
    <small :class="{ red: $v.computedValue.$error }" class="form-helper">
      min {{ $v.computedValue.$params.between.min }} &#124; max
      {{ $v.computedValue.$params.between.max }}
    </small>
  </div>
</template>

<script>
import { between } from "vuelidate/lib/validators";

export default {
  name: "InputWithLabel",
  props: {
    placeholder: {
      type: String,
      default: "Input text"
    },
    disabled: {
      type: Boolean,
      default: false,
      required: true
    },
    labelValue: {
      type: String,
      default: ""
    },
    minValue: {
      type: Number,
      default: 100
    },
    maxValue: {
      type: Number,
      default: 1000
    },
    value: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      rate: 100
    };
  },
  validations() {
    return {
      computedValue: {
        between: between(this.computedMinValue, this.computedMaxValue)
      }
    };
  },
  computed: {
    computedValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", +val);
      }
    },
    computedMinValue() {
      return this.minValue;
    },
    computedMaxValue() {
      return this.maxValue;
    }
  }
};
</script>

<style lang="scss" scoped>
.input-group-text {
  opacity: 0.6;
}
.form-helper {
  display: block;
  color: #c7c7c7;
}
.red {
  color: #fd2b2b;
}
</style>
