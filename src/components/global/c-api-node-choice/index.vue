<template>
  <div>
    <b-modal v-model="apiNodeModal" hide-footer centered title="Choose API Node">
      <div class="node-list">
        <b-row v-for="node in apiNodeList"
               :key="node.ip"
               class="node-item"
               :class="{ active: node.active }"
               @click="chooseNode">
          <b-col cols="6" class="address">
            <div class="region">
              {{ node.address }}
            </div>
            <div class="ip">
              {{ node.ip }}
            </div>
          </b-col>

          <b-col cols="4" class="ping">
            Ping time {{ node.ping }} ms
          </b-col>

          <b-col cols="2" class="icon">
            <i class="fa fa-chain fa-2x"></i>
          </b-col>
        </b-row>
      </div>

      <b-row align-h="end" class="mt-4">
        <b-col cols="6">
          <b-button
              type="button"
              variant="default"
              block
              @click="closeModal">
            Close
          </b-button>
        </b-col>
      </b-row>
    </b-modal>
    <transition name="slide-fade">
      <div class="loading" v-if="isLoading">
        <div class="logo">
          <img src="@/assets/logo.png" alt="Giant logo">
        </div>
        <i class="fa fa-3x fa-cog fa-spin"></i>
        <p class="mt-3">
          Connecting to API node:<br>
          http://192.168.0.1
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'c-api-node-choice',
  data: () => ({
    apiNodeList: [
      {
        address: 'Moscow, Russia',
        ip: '192.168.0.1',
        ping: 90,
        active: true,
      },
      {
        address: 'NYC, USA',
        ip: '192.168.0.2',
        ping: 239,
        active: false,
      },
    ],
    isLoading: false,
  }),
  computed: {
    apiNodeModal: {
      get() {
        return this.$store.state.apiNodeModal;
      },
      set(val) {
        this.$store.state.apiNodeModal = val;
      },
    },
  },
  methods: {
    closeModal() {
      this.$store.commit('toggleApiNodeModal');
    },
    chooseNode() {
      this.isLoading = !this.isLoading;
      setTimeout(() => {
        this.isLoading = !this.isLoading;
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
  .node-list {
    padding: 0 15px;
  }
  .node-item {
    padding: 10px;
    border: 1px solid #f0f0f0;
    transition: .2s;
    cursor: pointer;
    &:not(:first-child) {
      border-top: none;
    }
    &:hover {
      background-color: #f5f5f5;
    }
    &.active {
      color: #46c37b;
    }
    .ping,
    .icon {
      display: flex;
      align-items: center;
    }
    .icon {
      justify-content: flex-end;
    }
  }
  .loading {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    z-index: 1100;
  }
  .logo {
    width: 150px;
    height: 87px;
    margin-bottom: 15px;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: .2s;
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
