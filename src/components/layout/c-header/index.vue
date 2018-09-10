<template>
  <b-container fluid>
    <b-row v-if="!isAuthorized">
      <b-col class="plugin-warn">
        Plugin GiantSigner is not installed,
        <b-link href="#foo">install it</b-link> for authorized work with Giant.Exchange
      </b-col>
    </b-row>

    <b-row class="header">
      <b-col md="1">
        <div class="logo">
          <img src="@/assets/logo.png" alt="Giant logo">
        </div>
      </b-col>

      <b-col md="7" class="nav-wrap">
        <b-nav>
          <b-nav-item active>Dashboard</b-nav-item>
          <b-nav-item>Trading</b-nav-item>
          <b-nav-item>Governance</b-nav-item>
        </b-nav>
      </b-col>

      <b-col md="4" class="user-info">
        <div class="user" v-if="isAuthorized">
          <div class="name">{{ user.name }}</div>
          <div class="cash">{{ user.cash }} GIC</div>
        </div>
        <div class="lock">
          <i v-if="!isAuthorized" class="fa fa-lock fa-2x" @click="showAuthModal"></i>
          <i v-else class="fa fa-unlock-alt fa-2x"></i>
        </div>
        <div v-if="isAuthorized" class="notifications">
          <i class="fa fa-bell-o fa-2x"></i>
          <span class="badge badge-primary">5</span>
        </div>
        <b-form-select v-model="language" :options="options" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'c-header',
  data: () => ({
    language: 'en',

    user: {
      name: 'Name',
      cash: 500,
    },

    options: [
      { value: 'en', text: 'English' },
      { value: 'ru', text: 'Русский' },
    ],
  }),
  computed: {
    isAuthorized() {
      return this.$store.state.isAuthorized;
    },
  },
  methods: {
    showAuthModal() {
      this.$store.commit('toggleAuthModal');
    },
  },
};
</script>

<style lang="scss" scoped>
  .plugin-warn {
    background: #f3b760;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  .header {
    padding-top: 10px;
    padding-bottom: 10px;
    .logo {
      width: 100px;
      height: 50px;
      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
  .nav-wrap {
    display: flex;
    align-items: center;
  }
  .user-info {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .user,
    .lock,
    .notifications {
      margin-right: 20px;
    }
    .lock,
    .notifications {
      transition: .3s;
      &:hover {
        opacity: .85;
      }
    }
    .cash {
      white-space: nowrap;
    }
    .fa-lock {
      cursor: pointer;
    }
  }
  .notifications {
    font-size: 80%;
    position: relative;
    cursor: pointer;
    .badge {
      position: absolute;
      top: -5px;
      right: -5px;
    }
  }
  .custom-select {
    width: auto;
  }
</style>
