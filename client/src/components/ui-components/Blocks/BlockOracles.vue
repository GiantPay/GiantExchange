<template>
  <div class="block-oracles">
    <div class="header">
      <span>Oracles</span>
      <div class="icon-table">

      </div>
    </div>
    <div class="content">
      <div class="block-title">
        <div class="main-title">
          <span>Main Title</span>
          <span>BTC/USD</span>
        </div>
        <div class="rating">
          <div class="header-rating">
            <span>Rating</span>
            <span>7/10</span>
          </div>
          <b-progress :value="25" variant="success" striped :animated="animate"></b-progress>
        </div>
      </div>
      <div class="block-ping">
        <div class="ping">

        </div>
        <div class="url-oracle">
          <a href="https://oracleoftheben">https://oracleoftheben</a>
        </div>
      </div>
      <div class="block-value">
        <div class="brokers">
          <span>Brokers</span>
          <span class="value">120</span>
        </div>
        <div class="options">
          <span>Options</span>
          <span class="value">250</span>
        </div>
        <div class="fee">
          <span>Fee</span>
          <span class="value">0.25%</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BlockOracles"
  }
</script>

<style scoped>
.block-oracles {
  display: flex;
  margin: 5px;
}
</style>