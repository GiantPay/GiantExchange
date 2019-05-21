<template>
  <div>
    <div class="input-group">
      <b-form-input
        v-if="active"
        v-model="computedValue"
        class="form-control"
        :disabled="disabled"
        :placeholder="placeholder"
      />
      <div class="input-group-append">
        <span
          class="input-group-text"
          :class="{ active: active }"
          @click="switchActive"
        >
          <Search />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "../../../assets/icons/Search.vue";

export default {
  name: "InputWithButton",
  components: {
    Search
  },
  props: {
    placeholder: {
      type: String,
      default: "Search"
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
    value: {
      type: String
    }
  },
  data() {
    return {
      active: false
    };
  },
  computed: {
    computedValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      }
    }
  },
  methods: {
    switchActive() {
      this.active = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.input-group {
  display: flex;
  justify-content: flex-end;
  width: 172px;
}
.input-group > .form-control:not(:last-child),
.input-group > .custom-select:not(:last-child) {
  height: 23px;
  background-color: #f4f5f7;
  border: 0;
}
.input-group-text {
  height: 23px;
  opacity: 0.6;
  border: 0;
  cursor: pointer;
  color: #c7c7c7;
}
.input-group-text:hover {
  color: #8b8b8b;
}
.active {
  color: #0c6cfd;
  opacity: 1;
  background-color: #f4f5f7;
}
.active:hover {
  color: #0c6cfd;
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
