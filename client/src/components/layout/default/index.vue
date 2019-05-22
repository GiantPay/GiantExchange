<template>
  <div class="default-layout">
    <BlockHeader class="mb-4" />
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

import { mapMutations } from "vuex";

import { DEAL_ENDED } from "@/graphql";

export default {
  name: "DefaultLayout",
  components: {
    BlockHeader,
    cFooter,
    cAuth,
    cLoader
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
.content-wrapper {
  position: relative;
  flex: 1 0 auto;
  padding: 0 15px;
}
.footer {
  flex: 0 0 auto;
}
</style>
