<template>
  <div>
    <b-nav class="desktop-menu">
      <b-nav-item to="/dashboard" active>
        Dashboard
      </b-nav-item>
      <b-nav-item to="/trading">
        Trading
      </b-nav-item>
      <b-nav-item to="/options">
        Options
      </b-nav-item>
      <b-nav-item to="/oracles">
        Oracles
      </b-nav-item>
      <b-nav-item to="/governance/voting-list">
        Governance
      </b-nav-item>
      <b-nav-item to="/statistics">
        Statistics
      </b-nav-item>
    </b-nav>
    <div v-click-outside="hide">
      <div class="mobile-menu">
        <div class="mobile-header-block">
          <div class="icon-block" @click="toggle">
            <Bars class="icon" :width="20" :height="14"> </Bars>
          </div>
          <span class="active-menu-item">{{ activePage }}</span>
        </div>
      </div>
      <b-nav vertical class="mobile-nav" v-show="opened">
        <b-nav-item class="mobile-nav-item" to="/dashboard" active>
          Dashboard
        </b-nav-item>
        <b-nav-item class="mobile-nav-item" to="/trading">
          Trading
        </b-nav-item>
        <b-nav-item class="mobile-nav-item" to="/options">
          Options
        </b-nav-item>
        <b-nav-item class="mobile-nav-item" to="/oracles">
          Oracles
        </b-nav-item>
        <b-nav-item class="mobile-nav-item" to="/governance/voting-list">
          Governance
        </b-nav-item>
        <b-nav-item class="mobile-nav-item" to="/statistics">
          Statistics
        </b-nav-item>
      </b-nav>
    </div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";
import Bars from "../../../assets/icons/Bars.vue";

export default {
  name: "Navigation",
  components: {
    Bars
  },
  props: {
    activePage: {
      type: String
    }
  },
  data() {
    return {
      isNavMobile: false,
      opened: false
    };
  },
  methods: {
    toggle() {
      this.opened = !this.opened;
    },
    hide() {
      this.opened = false;
    }
  },
  directives: {
    ClickOutside
  }
};
</script>

<style lang="scss" scoped>
.nav-link {
  font-size: 16px;
  color: #ffffff;
  opacity: 0.6;
  cursor: pointer;
  padding: 10px 20px 18px 20px;
}
.nav-link:hover {
  opacity: 0.8;
}
.active {
  opacity: 1;
  border-bottom: 3px solid #ffffff;
}
.active:hover {
  opacity: 1;
}
/*Mobile*/
.mobile-menu {
  width: 100%;
  display: none;
  justify-content: flex-start;
  align-items: center;
  height: 70px;
}
.mobile-header-block {
  display: flex;
  flex-wrap: nowrap;
  width: 150px;
  justify-content: space-around;
  align-items: center;
}
.icon-block {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.1);
  opacity: 0.6;
  cursor: pointer;
}
.icon-block:hover {
  opacity: 1;
}
.icon {
  color: #ffffff;
}
.active-menu-item {
  color: #ffffff;
  font-size: 16px;
}
.mobile-nav {
  position: absolute;
  width: 375px;
  background-color: #07306d;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #07306d;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
}
.mobile-nav-item > .nav-link {
  padding-bottom: 8px;
}
.mobile-nav-item:last-child {
  margin-bottom: 20px;
}
@media screen and (max-width: 1140px) {
  .mobile-menu {
    display: flex;
  }
  .desktop-menu {
    display: none;
  }
}
@media screen and (max-width: 375px) {
  .mobile-nav {
    width: 100%;
  }
}
</style>
