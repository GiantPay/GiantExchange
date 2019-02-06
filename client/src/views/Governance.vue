<template>
  <b-card no-body>
    <b-tabs card>
      <b-tab title="Current Voting" active>
        <b-row>
          <b-col cols="12">
            <h1 class="header-transaction">Current Voting</h1>
          </b-col>
          <b-col cols="12">
            <CurrentVotingTable></CurrentVotingTable>
          </b-col>
        </b-row>
      </b-tab>
      <b-tab title="New voting">
        <b-col cols="12">
          <h1 class="header-transaction">New voting</h1>
        </b-col>
        <b-col cols="12">
          To do
        </b-col>
      </b-tab>
      <b-tab title="Archive">
        <b-col cols="12">
          <h1 class="header-transaction">Activity Archive</h1>
        </b-col>
        <b-col cols="12">
          <ArchiveVotingTable></ArchiveVotingTable>
        </b-col>
      </b-tab>
    </b-tabs>
  </b-card>
</template>

<script>
import CurrentVotingTable from '@/components/page-components/Governance/CurrentVotingTable.vue';
import ArchiveVotingTable from '@/components/page-components/Governance/ArchiveVotingTable.vue';

export default {
  name: 'Governance',
  components: {
    CurrentVotingTable,
    ArchiveVotingTable,
  },
  data: () => ({

  }),

  methods: {

  },
};
</script>

<style scoped>
  .header-transaction {
    padding-bottom: 30px;
    padding-left: 12px;
  }
</style>