<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 512 512"
    :aria-labelledby="iconName"
    role="presentation"
  >
    <title :id="iconName">{{ iconName }} icon</title>
    <g :fill="iconColor">
      <path
        d="M96 96c0 26.51-21.49 48-48 48S0 122.51 0 96s21.49-48 48-48 48 21.49 48
        48zM48 208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm0
        160c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49
        48-48-21.49-48-48-48zm96-236h352c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H144c-8.837
        0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h352c8.837 0 16-7.163
        16-16v-40c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0
        8.837 7.163 16 16 16zm0 160h352c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H144c-8.837
        0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: "ListUl",
  props: {
    iconName: {
      type: String,
      default: "box"
    },
    width: {
      type: [Number, String],
      default: 10
    },
    height: {
      type: [Number, String],
      default: 10
    },
    iconColor: {
      type: String,
      default: "currentColor"
    }
  }
};
</script>

<style scoped></style>
