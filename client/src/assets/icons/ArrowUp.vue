<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 448 512"
    :aria-labelledby="iconName"
    role="presentation"
  >
    <title :id="iconName">{{ iconName }} icon</title>
    <g :fill="iconColor">
      <path
        d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207
        39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0
        33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0
        13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2
        289.1c-9.3 9.8-24.8 10-34.3.4z"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: "ArrowUp",
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
