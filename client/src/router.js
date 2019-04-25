import Vue from "vue";
import Router from "vue-router";
import Governance from "./views/Governance.vue";
import TermsOfUse from "./views/TermsOfUse.vue";
import Dashboard from "./views/Dashboard.vue";
import ChooseAsset from "./components/page-components/Trading/ChooseAsset.vue";
import ChooseOracle from "./components/page-components/Trading/ChooseOracle.vue";

import CurrentVotingTable from "@/components/page-components/Governance/CurrentVotingTable.vue";
import ArchiveVotingTable from "@/components/page-components/Governance/ArchiveVotingTable.vue";
import NewVoting from "@/components/page-components/Governance/NewVoting.vue";

const Home = () => import(/* webpackChunkName: "home" */ "./views/Home.vue");
const Trading = () =>
  import(/* webpackChunkName: "trading" */ "./views/Trading.vue");

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/terms-of-use",
      name: "terms-of-use",
      component: TermsOfUse
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
      meta: {
        layout: "default"
      }
    },
    {
      path: "/governance",
      name: "governance",
      component: Governance,
      meta: {
        layout: "default"
      },
      children: [
        {
          path: "voting-list",
          name: "voting-list",
          component: CurrentVotingTable,
          meta: {
            layout: "default"
          }
        },
        {
          path: "create-voting",
          name: "create-voting",
          component: NewVoting,
          meta: {
            layout: "default"
          }
        },
        {
          path: "voting-archive",
          name: "voting-archive",
          component: ArchiveVotingTable,
          meta: {
            layout: "default"
          }
        }
      ]
    },
    {
      path: "/trading",
      name: "trading-asset",
      component: ChooseAsset,
      meta: {
        layout: "default"
      }
    },
    {
      path: "/trading/:asset_id",
      name: "trading-oracle",
      component: ChooseOracle,
      meta: {
        layout: "default"
      }
    },
    {
      path: "/trading/:asset_id/:oracle_id",
      component: ChooseOracle,
      meta: {
        layout: "default"
      }
    },
    {
      path: "/trading/:asset_id/:oracle_id/:broker_caption",
      name: "trading",
      component: Trading,
      meta: {
        layout: "default"
      }
    }
  ]
});
