<template>
  <div>
    <div class="input-group">
      <b-form-input
        v-if="active"
        class="form-control"
        :disabled="disabled"
        v-model="computedValue"
        :placeholder="placeholder"/>
      <div class="input-group-append">
        <span class="input-group-text" :class="{active: active}" v-on:click="switchActive">
          <Search></Search>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Search from '../../../assets/icons/Search.vue';

export default {
  name: 'InputWithButton',
  components: {
    Search,
  },
  props: {
    placeholder: {
      type: String,
      default: 'Search',
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
    value: {
      type: String,
    },
  },
  data() {
    return {
      active: false,
    };
  },
  computed: {
    computedValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', +val);
      },
    },
  },
  methods: {
    switchActive() {
      this.active = !this.active;
    },
  },
};
</script>

<style lang="scss" scoped>
  .input-group {
    width: 172px;
  };
  .input-group > .form-control:not(:last-child), .input-group > .custom-select:not(:last-child) {
    height: 23px;
    background-color: #F4F5F7;
    border: 0;
  }
  .input-group-text{
    height: 23px;
    opacity: 0.6;
    border: 0;
    cursor: pointer;
    color: #C7C7C7;
  }
  .input-group-text:hover{
    color: #8B8B8B;
  }
  .active {
    color: #0C6CFD;
    opacity: 1;
    background-color: #F4F5F7;
  }
  .active:hover {
    color: #0C6CFD;
  }
  input {
    font-size: 10px;
  }
  input::-webkit-input-placeholder {
    font-size: 10px;
  }
  input::-moz-placeholder {
    font-size: 10px;
  }
  input:-ms-input-placeholder {
    font-size: 10px;
  }
  input:-moz-placeholder {
    font-size: 10px;
  }
</style>
