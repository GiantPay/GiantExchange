<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       :width="width"
       :height="height"
       viewBox="0 0 448 512"
       :aria-labelledby="iconName"
       role="presentation">
    <title :id="iconName">{{iconName}} icon </title>
    <g :fill="iconColor">
      <path d="M288 44v40c0 8.837-7.163 16-16 16H16c-8.837 0-16-7.163-16-16V44c0-8.837
          7.163-16 16-16h256c8.837 0 16 7.163 16 16zM0 172v40c0 8.837 7.163 16 16
          16h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16zm16
          312h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16
          16v40c0 8.837 7.163 16 16 16zm256-200H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16
          16h256c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16z"/>
    </g>
  </svg>
</template>

<script>
export default {
  name: 'BarAlignLeft',
  props: {
    iconName: {
      type: String,
      default: 'box',
    },
    width: {
      type: [Number, String],
      default: 10,
    },
    height: {
      type: [Number, String],
      default: 10,
    },
    iconColor: {
      type: String,
      default: 'currentColor',
    },
  },
};
</script>

<style scoped>

</style>
