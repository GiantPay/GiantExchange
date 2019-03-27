<template>
  <div>
    <div class="input-group">
      <b-form-input
        class="form-control"
        type="text"
        :disabled="disabled"
        v-model="updateValueInput"
        :placeholder="placeholder"/>
      <div class="input-group-append">
        <span class="input-group-text">{{labelValue}}</span>
      </div>
    </div>
    <small class="form-helper">min {{minValue}} &#124; max {{maxValue}}</small>
    <span>{{updateValueInput}}</span>
  </div>
</template>

<script>
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
    valueInput: {
      type: Number,
      default: 0,
      required: true,
    },
  },
  computed: {
    updateValueInput: {
      get() {
        return this.valueInput;
      },
      set(value) {
        this.$emit('updateValueInput', value);
      },
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
