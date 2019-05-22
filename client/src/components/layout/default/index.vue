<template>
  <div class="default-layout">
    <div class="header">
      <BlockHeader />
    </div>
    <div class="content-wrapper">
      <router-view />
      <c-auth @authorized="getUsername" />
      <c-loader />
    </div>
    <div class="footer">
      <BlockFooter></BlockFooter>
    </div>
  </div>
</template>

<script>
import cAuth from "@/components/global/c-authorization/index.vue";
import cLoader from "@/components/global/c-loader/index.vue";

import BlockHeader from "@/components/ui-components/Blocks/BlockHeader.vue";
import BlockFooter from "@/components/ui-components/Blocks/BlockFooter.vue";

import { mapMutations } from "vuex";

import { DEAL_ENDED } from "@/graphql";

export default {
  name: "DefaultLayout",
  components: {
    BlockHeader,
    cAuth,
    cLoader,
    BlockFooter
  },
  data: () => ({
    username: ""
  }),
  methods: {
    getUsername(username) {
      this.username = username;
    },
    dealEndedSubscribe() {
      this.$apollo.addSmartSubscription("dealEnded", {
        query: DEAL_ENDED,
        result({ data: { dealEnded } }) {
          this.dealEndedNotify(dealEnded);
        }
      });
    },

    ...mapMutations(["dealEndedNotify"])
  },
  created() {
    this.dealEndedSubscribe();
  }
};
</script>

<style lang="scss" scoped>
.default-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.default-layout /deep/ {
  @import "~bootstrap/dist/css/bootstrap.css";
  @import "~bootstrap-vue/dist/bootstrap-vue.css";
  @import "../../../styles/oneui.css";
}
.header {
  position: fixed;
  width: 100%;
  height: 70px;
  z-index: 100;
}
.content-wrapper {
  flex: 1 0 auto;
  padding: 0 15px;
  margin-top: 90px;
}
.footer {
  width: 100vw;
  margin-top: 20px;
}
</style>
