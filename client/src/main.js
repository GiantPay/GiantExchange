import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./plugins/includes";
import "./components/global";

import DefaultLayout from "@/components/layout/default/index.vue";
import EmptyLayout from "@/components/layout/empty/index.vue";
import { createProvider } from "./vue-apollo";

Vue.component("default-layout", DefaultLayout);
Vue.component("empty-layout", EmptyLayout);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  apolloProvider: createProvider({
    reconnect: true
  }),
  render: h => h(App)
}).$mount("#app");
