<template>
  <b-card no-body>
    <b-tabs card>
      <b-tab @click="goTo('voting-list')" title="Current Voting" active>
        <b-row>
          <b-col cols="12">
            <h1 class="header-transaction">Current Voting</h1>
          </b-col>
          <b-col cols="12">
            <router-view />
          </b-col>
        </b-row>
      </b-tab>
      <b-tab @click="goTo('create-voting')" title="New voting">
        <b-col cols="12">
          <h1 class="header-transaction">Select the type of voting</h1>
        </b-col>
        <b-col cols="12">
          <router-view />
        </b-col>
      </b-tab>
      <b-tab @click="goTo('voting-archive')" title="Archive">
        <b-col cols="12">
          <h1 class="header-transaction">Activity Archive</h1>
        </b-col>
        <b-col cols="12">
          <router-view />
        </b-col>
      </b-tab>
    </b-tabs>
  </b-card>
</template>

<script>
import CurrentVotingTable from '@/components/page-components/Governance/CurrentVotingTable.vue';
import ArchiveVotingTable from '@/components/page-components/Governance/ArchiveVotingTable.vue';
import NewVoting from '@/components/page-components/Governance/NewVoting.vue';

export default {
  name: 'Governance',
  components: {
    CurrentVotingTable,
    ArchiveVotingTable,
    NewVoting,
  },
  methods: {
    goTo(routeName) {
      this.$router.push({
        name: routeName,
      });
    },
  },
};
</script>

<style scoped>
  .header-transaction {
    padding-bottom: 30px;
    padding-left: 12px;
  }
</style>
