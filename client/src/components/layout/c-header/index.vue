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
          <router-link to="/">
            <img src="@/assets/logo.svg" alt="Giant logo">
          </router-link>
        </div>
      </b-col>

      <b-col md="7" class="nav-wrap">
        <b-nav>
          <li class="nav-item">
            <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/trading" class="nav-link">Trading</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/governance/voting-list" class="nav-link">Governance</router-link>
          </li>
        </b-nav>
      </b-col>

      <b-col md="4" class="user-info">
        <div class="user">
          <div class="name">{{ user.name }}</div>
          <c-user-balance v-if="isAuthorized"
                          class="cash block"
                          :class="{ 'block-opt-refresh': isCashLoading }"
                          :cash="user.cash"/>
        </div>
        <div class="lock">
          <i v-if="!isAuthorized" class="fa fa-lock fa-2x" @click="showAuthModal"></i>
          <i v-else class="fa fa-unlock-alt fa-2x" @click="deauthorization"></i>
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
import GiantExplorer from '@/models';

export default {
  name: 'c-header',
  props: {
    username: {
      type: String,
      default: 'name',
    },
  },
  data() {
    return {
      language: 'en',

      user: {
        name: this.username ? this.username : localStorage.getItem('username'),
        cash: 0,
      },

      options: [
        {
          value: 'en',
          text: 'English',
        },
        {
          value: 'ru',
          text: 'Русский',
        },
      ],

      isCashLoading: true,
    };
  },
  computed: {
    isAuthorized() {
      return this.$store.state.isAuthorized;
    },
  },
  watch: {
    username() {
      this.user.name = this.username;
    },
  },
  methods: {
    showAuthModal() {
      this.$store.commit('toggleAuthModal');
    },
    deauthorization() {
      this.$store.commit('deauthorization');
    },
    async preparePage() {
      const publicKey = this.$giantSigner.getPublicKey();
      const balance = await GiantExplorer.getBalance(publicKey);
      this.user.cash = balance.data;
      this.isCashLoading = false;

      this.user.name = this.$giantSigner.getUsername();
    },
  },
  created() {
    this.preparePage();
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
      width: 110px;
      height: 50px;
      display: flex;
      align-items: center;
      a {
        width: 100%;
      }
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
    .lock {
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
  .router-link-active {
    color: #46c37b;
  }
  .block {
    margin-bottom: 0;
    background: transparent;
  }
  .block-opt-refresh::before {
    background: #fff;
    opacity: .75;
  }
</style>
