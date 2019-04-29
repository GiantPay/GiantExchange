<template>
  <div />
</template>

<script>
import GiantOracle from "@/modules/giant-oracle/mocks";

import _ from "lodash";
import { toSnakeCase } from "@/modules/helpers";

export default {
  name: "ChooseOracle",
  data: () => ({
    oracle: "",
    broker: ""
  }),
  async created() {
    await this.getOracleData();
    await this.getBrokerData();
    this.$router.push({
      name: "trading",
      params: {
        oracle_id: this.oracle.id,
        broker_caption: toSnakeCase(this.broker.caption),
        broker_deal_scheme: this.broker.dealScheme
      }
    });
  },
  methods: {
    async getOracleData() {
      this.$store.commit("showPreload");

      const data = await GiantOracle.getOracleList();

      const volumes = [];
      data.forEach(value => {
        volumes.push(value.volume.GIC);
      });

      const maxVolume = Math.max(...volumes);
      this.oracle = _.find(data, { volume: { GIC: maxVolume } });

      this.$store.commit("hidePreload");
    },
    async getBrokerData() {
      this.$store.commit("showPreload");

      const data = await GiantOracle.getBrokerList();

      const volumes = [];
      data.forEach(value => {
        volumes.push(value.volume);
      });

      const maxVolume = Math.max(...volumes);
      this.broker = _.find(data, { volume: maxVolume });

      this.$store.commit("hidePreload");
    }
  }
};
</script>
