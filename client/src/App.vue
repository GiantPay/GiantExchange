<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
const emptyLayout = "empty";

export default {
  name: "App",
  computed: {
    layout() {
      return `${this.$route.meta.layout || emptyLayout}-layout`;
    }
  }
};
</script>
