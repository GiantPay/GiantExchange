<template>
  <div class="empty-layout">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "EmptyLayout"
};
</script>

<style lang="scss" scoped>
.empty-layout /deep/ {
  @import "~bootstrap/dist/css/bootstrap.css";
  @import "~bootstrap-vue/dist/bootstrap-vue.css";
  @import "../../../styles/oneui.css";
}
</style>
