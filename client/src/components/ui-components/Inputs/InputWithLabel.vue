<template>
  <div>
    <div class="input-group">
      <b-form-input
        class="form-control"
        type="number"
        :disabled="disabled"
        v-model="computedValue"
        :placeholder="placeholder"/>
      <div class="input-group-append">
        <span class="input-group-text">{{labelValue}}</span>
      </div>
    </div>
    <div class="form-helper">
      Min: {{ $v.rate.$params.between.min }}, max: {{ $v.rate.$params.between.max }}
    </div>
    <small class="form-helper">min {{minValue}} &#124; max {{maxValue}}</small>
    {{value}}
  </div>
</template>

<script>
  import { between } from 'vuelidate/lib/validators';

export default {
  name: 'InputWithLabel',
  props: {
    placeholder: {
      type: String,
      default: 'Input text',
    },
    disabled: {
      type: Boolean,
      default: false,
      required: true,
    },
    labelValue: {
      type: String,
      default: '',
    },
    minValue: {
      type: Number,
      default: 100,
    },
    maxValue: {
      type: Number,
      default: 1000,
    },
    value: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      rate: 100,
    };
  },
  validations() {
    return {
      rate: {
        model: this.computedValue,
        between: between(
          this.minValue,
          this.maxValue,
        ),
      },
    };
  },
  computed: {
    computedValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', +val);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .input-group-text{
    opacity: 0.6;
  }
  .form-helper {
    display: block;
    color: #C7C7C7;
  }
</style>
