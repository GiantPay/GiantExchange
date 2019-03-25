<template>
  <div>
    <b-form-group
      label="Button style radios">
      <b-form-radio-group
        id="1"
        buttons
        button-variant="primary"
        v-model="selected"
        :options="options"
        name="radioBtnOutline"
      />
    </b-form-group>
  </div>
</template>

<script>
  export default {
    name: 'RadioButtons',
    data() {
      return {
        selected: 'radio1',
        options: [
          { text: 'Radio 1', value: 'radio1' },
          { text: 'Radio 3', value: 'radio2' },
          { text: 'Radio 3 (disabled)', value: 'radio3', disabled: true },
          { text: 'Radio 4', value: 'radio4' },
        ],
      };
    },
  };
</script>

<style lang="scss" scoped>
  /deep/ .btn-primary {
    margin-right: 5px;
  }
  .btn-group > .btn:not(:last-child):not(.dropdown-toggle), .btn-group > .btn-group:not(:last-child) > .btn {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
</style>