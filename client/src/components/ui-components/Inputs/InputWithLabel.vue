<template>
  <div>
    <div class="input-group">
      <b-form-input
        class="form-control"
        type="text"
        :disabled="disabled"
        v-model="textInput"
        :placeholder="placeholder"/>
      <div class="input-group-append">
        <span class="input-group-text">{{labelValue}}</span>
      </div>
    </div>
    <small class="form-helper">min {{minValue}} &#124; max {{maxValue}}</small>
    <span>{{textInput}}</span>
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
    },
    labelValue: {
      type: String,
      default: 'GIC',
    },
    minValue: {
      type: Number,
      default: 100,
    },
    maxValue: {
      type: Number,
      default: 1000,
    },
  },
  data() {
    return {
      textInput: '100',
    };
  },
  methods: {

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
