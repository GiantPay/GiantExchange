import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import './modules/includes';
import './components/global';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './styles/oneui.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
