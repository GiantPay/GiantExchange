<template>
  <div class="layout">
    <BlockHeader />
    <div class="content-wrapper">
      <router-view />
      <c-auth @authorized="getUsername" />
      <c-loader />
    </div>
    <c-footer />
    <notifications position="bottom left" />
  </div>
</template>

<script>
import cFooter from "@/components/layout/c-footer/index.vue";
import cAuth from "@/components/global/c-authorization/index.vue";
import cLoader from "@/components/global/c-loader/index.vue";

import BlockHeader from "@/components/ui-components/Blocks/BlockHeader.vue";

export default {
  name: "CFull",
  components: {
    cFooter,
    cAuth,
    cLoader,
    BlockHeader
  },
  data: () => ({
    username: ""
  }),
  methods: {
    getUsername(username) {
      this.username = username;
    }
  }
};
</script>

<style lang="scss" scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.layout /deep/ {
  @import "~bootstrap/dist/css/bootstrap.css";
  @import "~bootstrap-vue/dist/bootstrap-vue.css";
  @import "../../../styles/oneui.css";
}
.content-wrapper {
  position: relative;
  flex: 1 0 auto;
  padding: 0 15px;
}
.footer {
  flex: 0 0 auto;
}
</style>
