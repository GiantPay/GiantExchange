<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       :width="width"
       :height="height"
       viewBox="0 0 320 512"
       :aria-labelledby="iconName"
       role="presentation">
    <title
      :id="iconName"
      lang="en">{{iconName}} icon </title>
    <g :fill="iconColor">
      <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3
      0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"/>
    </g>
  </svg>
</template>

<script>
  export default {
    name: "CaretDown",
    props: {
      iconName: {
        type: String,
        default: 'box'
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
        default: 'currentColor'
      }
    },
  }
</script>

<style scoped>

</style>
