<template>
  <b-modal v-model="apiNodeModal" hide-footer centered title="Choose API Node">
    <div class="node-list">
      <div class="node-item">
        <div class="address">
          <div class="region"></div>
          <div class="ip"></div>
        </div>
        <div class="ping">
          Ping time 100 ms
        </div>
        <div class="icon">
          <i class="fa fa-chain fa-2x"></i>
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: 'c-api-node-choice',
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
};
</script>

<style scoped>

</style>
