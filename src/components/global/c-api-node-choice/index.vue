<template>
  <div>
    <b-modal v-model="apiNodeModal" hide-footer centered title="Choose API Node">
      <div class="node-list">
        <b-row v-for="node in apiNodeList"
               :key="node.ip"
               class="node-item"
               :class="{ active: node.ip === selectedNode.ip }"
               @click="chooseNode(node)">
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
    <transition name="fade">
      <div class="loading" v-if="isConnecting">
        <div class="logo">
          <img src="@/assets/logo.svg" alt="Giant logo">
        </div>
        <i class="fa fa-3x fa-cog fa-spin"></i>
        <p v-if="selectedNode.ip" class="mt-3">
          Connecting to API node:<br>
          http://{{ selectedNode.ip }}
        </p>
        <p v-else class="mt-3">
          Connecting...
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
import giantConnect from '@/modules/giant-connect';
import mockProvider from '@/modules/giant-connect/mock-provider/index';

import _ from 'lodash';

export default {
  name: 'c-api-node-choice',
  data: () => ({
    apiNodeList: [],
    selectedNode: {},
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
    isConnecting() {
      return this.$store.state.isConnecting;
    },
  },
  methods: {
    closeModal() {
      this.$store.commit('toggleApiNodeModal');
    },
    chooseNode(node) {
      this.$store.commit('connectingToNode');
      this.selectedNode = node;
      setTimeout(async () => {
        await giantConnect.use(node.ip);
        this.$emit('selectedNode', this.selectedNode);
        this.$store.commit('toggleApiNodeModal');
        this.$store.commit('connectedToNode');
      }, 1000);
    },
    findLowestPing(nodeList) {
      const [fastestNode] = _.sortBy(nodeList, 'ping');
      return fastestNode;
    },
    async getNodeList() {
      const nodeList = await mockProvider();
      this.apiNodeList = await giantConnect.getPingedList(nodeList);
    },
    async checkConnection() {
      const selectedIp = localStorage.getItem('nodeIp');
      if (!selectedIp) {
        this.$store.commit('connectingToNode');

        const nodeList = await mockProvider();
        const pingedNodes = await giantConnect.getPingedList(nodeList);
        this.selectedNode = this.findLowestPing(pingedNodes);
        await giantConnect.use(this.selectedNode.ip);

        this.$emit('selectedNode', this.selectedNode);

        this.$store.commit('connectedToNode');
      } else {
        const nodeList = await mockProvider();
        this.selectedNode = _.find(nodeList, { ip: selectedIp });

        this.$emit('selectedNode', this.selectedNode);
      }
    },
  },
  created() {
    this.checkConnection();
    this.getNodeList();
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
    margin-bottom: 15px;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: .2s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
