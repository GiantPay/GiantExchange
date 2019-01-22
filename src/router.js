import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Trading from './views/Trading.vue';
import Governance from './views/Governance.vue';
import Dashboard from './views/Dashboard.vue';
import ChooseAsset from './components/page-components/Trading/ChooseAsset.vue';
import ChooseOracle from './components/page-components/Trading/ChooseOracle.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/governance',
      name: 'governance',
      component: Governance,
    },
    {
      path: '/trading',
      name: 'trading-asset',
      component: ChooseAsset,
    },
    {
      path: '/trading/:asset_id',
      name: 'trading-oracle',
      component: ChooseOracle,
    },
    {
      path: '/trading/:asset_id/:oracle_id',
      component: ChooseOracle,
    },
    {
      path: '/trading/:asset_id/:oracle_id/:broker_id',
      name: 'trading',
      component: Trading,
    },
  ],
});
