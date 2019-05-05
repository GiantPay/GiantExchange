<template>
  <div id="app">
    <Empty v-if="!routeType" />
    <Default v-else />
  </div>
</template>

<script>
const Default = () => import("@/components/layout/default/index.vue");
const Empty = () => import("@/components/layout/empty/index.vue");

export default {
  name: "App",
  components: {
    Default,
    Empty
  },
  computed: {
    routeType() {
      return this.$route.meta.layout;
    }
  }
};
</script>
