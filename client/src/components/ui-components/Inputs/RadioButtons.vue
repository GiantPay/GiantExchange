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
        { value: 5 * 60 * 1000, text: '5 minutes' },
        { value: 3 * 60 * 1000, text: '3 minutes' },
        { value: 60 * 1000, text: '1 minutes' },
        { value: 30 * 1000, text: '30 sec' },
      ],
    };
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
