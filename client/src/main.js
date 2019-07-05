import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./plugins/includes";
import "./components/global";

import "@/styles/general-style.scss";

import { createProvider } from "./vue-apollo";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  apolloProvider: createProvider({
    reconnect: true
  }),
  render: h => h(App)
}).$mount("#app");
