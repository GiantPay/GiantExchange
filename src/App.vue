<template>
  <div id="app">
    <router-view v-if="$route.meta.emptyLayout" />
    <c-full v-else />
  </div>
</template>

<script>
import cFull from '@/components/layout/c-full/index.vue';

export default {
  name: 'app',
  components: {
    cFull,
  },
};
</script>
