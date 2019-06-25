<template>
  <div class="block-grid">
    <div class="block-left">
      <ControlDashboard></ControlDashboard>
      <MyTrading></MyTrading>
      <MyOracles></MyOracles>
      <MyBrokers></MyBrokers>
    </div>
    <div class="block-center">
      <OracleBinance></OracleBinance>
    </div>
    <div class="block-right">
      <!--<DealsBrokerDashboard></DealsBrokerDashboard>-->
      <DealsTraderDashboard></DealsTraderDashboard>
      <!--<DealsOracleDashboard></DealsOracleDashboard>-->
    </div>
  </div>
</template>

<script>
  import ControlDashboard from "../components/ui-components/Dashboard/ControlDashboard.vue";
  import MyTrading from "../components/ui-components/Dashboard/MyTrading.vue";
  import MyOracles from "../components/ui-components/Dashboard/MyOracles.vue";
  import MyBrokers from "../components/ui-components/Dashboard/MyBrokers.vue";
  import OracleBinance from "../components/ui-components/Blocks/OracleBinance.vue";
  import DealsBrokerDashboard from "../components/ui-components/Dashboard/DealsBrokerDashboard.vue";
  import DealsOracleDashboard from "../components/ui-components/Dashboard/DealsOracleDashboard.vue";
  import DealsTraderDashboard from "../components/ui-components/Dashboard/DealsTraderDashboard.vue";

  export default {
    name: "Dashboard",
    components: {
      ControlDashboard,
      MyTrading,
      MyOracles,
      MyBrokers,
      OracleBinance,
      DealsBrokerDashboard,
      DealsOracleDashboard,
      DealsTraderDashboard
    },
    data() {
      return {
      };
    },
  };
</script>

<style scoped>
  .block-grid {
    width: 100%;
    display: grid;
    grid-gap: 30px;
    grid-template-rows: 100%;
    grid-template-columns: 32% 32% 32%;
    grid-template-areas: "left center right";
  }
  .block-left {
    grid-area: left;
    max-width: 100%;
    background-color: #f7f7f7;
    border-radius: 5px;
  }
  .block-center {
    grid-area: center;
    max-width: 100%;
    background-color: #ffffff;
    border-radius: 5px;
  }
  .block-right {
    grid-area: right;
    max-width: 100%;
    background-color: #ffffff;
    border-radius: 5px;
  }
</style>
