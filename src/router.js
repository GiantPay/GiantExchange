import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import TermsOfUse from './views/TermsOfUse.vue';
import Trading from './views/Trading.vue';
import Vote from './views/Vote.vue';
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
      meta: {
        emptyLayout: true,
      },
    },
    {
      path: '/terms-of-use',
      name: 'terms-of-use',
      component: TermsOfUse,
      meta: {
        emptyLayout: true,
      },
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/vote',
      name: 'vote',
      component: Vote,
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
