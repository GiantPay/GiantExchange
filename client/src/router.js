import Vue from 'vue';
import Router from 'vue-router';
import TermsOfUse from './views/TermsOfUse.vue';
import Vote from './views/Vote.vue';
import Dashboard from './views/Dashboard.vue';
import ChooseAsset from './components/page-components/Trading/ChooseAsset.vue';
import ChooseOracle from './components/page-components/Trading/ChooseOracle.vue';

const Home = () => import(/* webpackChunkName: "home" */ './views/Home.vue');
const Trading = () => import(/* webpackChunkName: "trading" */ './views/Trading.vue');

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
      path: '/terms-of-use',
      name: 'terms-of-use',
      component: TermsOfUse,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        layout: 'default',
      },
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
      meta: {
        layout: 'default',
      },
    },
    {
      path: '/trading/:asset_id',
      name: 'trading-oracle',
      component: ChooseOracle,
      meta: {
        layout: 'default',
      },
    },
    {
      path: '/trading/:asset_id/:oracle_id',
      component: ChooseOracle,
      meta: {
        layout: 'default',
      },
    },
    {
      path: '/trading/:asset_id/:oracle_id/:broker_id',
      name: 'trading',
      component: Trading,
      meta: {
        layout: 'default',
      },
    },
  ],
});
