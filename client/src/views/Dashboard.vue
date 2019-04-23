<template>
  <b-card no-body>
    <b-nav tabs class="nav-head">
      <b-nav-item active-class="active" :to="{ name: 'transaction-list' }">
        List of transaction
      </b-nav-item>
      <b-nav-item active-class="active" :to="{ name: 'funds' }">
        Funds
      </b-nav-item>
      <b-nav-item active-class="active" :to="{ name: 'activities' }">
        Activity
      </b-nav-item>
    </b-nav>
    <div class="card-body">
      <router-view />
    </div>
  </b-card>
</template>

<script>
export default {
  name: 'Dashboard',
};
</script>

<style scoped>
  .nav-head {
    padding: 10px 10px 0;
    background: rgba(0, 0, 0, 0.03);
  }
</style>
