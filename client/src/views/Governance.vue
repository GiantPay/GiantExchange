<template>
  <b-card no-body>
    <b-nav tabs class="nav-head">
      <b-nav-item active-class="active" :to="{ name: 'voting-list' }">Current Voting</b-nav-item>
      <b-nav-item active-class="active" :to="{ name: 'create-voting' }">New voting</b-nav-item>
      <b-nav-item active-class="active" :to="{ name: 'voting-archive' }">Archive</b-nav-item>
    </b-nav>
    <div class="card-body">
      <router-view />
    </div>
  </b-card>
</template>

<script>
export default {
  name: 'Governance',
};
</script>

<style lang="scss" scoped>
  .nav-head {
    padding: 10px 10px 0;
    background: rgba(0, 0, 0, 0.03);
  }
</style>
