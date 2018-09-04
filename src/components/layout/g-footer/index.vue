<template>
  <b-container fluid class="footer-wrap">
    <b-row>
      <b-col sm="4">
        Giant.Exchange BETA {{ version }}
      </b-col>
      <b-col sm="8" class="connection-info">
        <div class="ping">
          Ping time 120 ms
        </div>
        <div class="block-value">
          Block 157000
        </div>
        <div class="api-node">
          <b-link href="#">Moscow, Russia</b-link>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import pjson from '@/../package.json';

export default {
  name: 'g-footer',
  computed: {
    version() {
      return pjson.version;
    },
  },
};
</script>

<style lang="scss" scoped>
  .footer-wrap {
    padding-top: 5px;
    padding-bottom: 5px;
  }
  .connection-info {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    & > div {
      margin-left: 20px;
    }
  }
</style>
