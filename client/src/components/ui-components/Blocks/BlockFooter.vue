<template>
  <div class="block-footer">
    <div class="block-left">
      <div class="block-copyright">
        <span>Giant Exchange BETA 1.0.0</span>
      </div>
    </div>
    <div class="block-right">
      <div class="block-information">
        <span>Ping time: {{ pingTime }} mc</span>
        <span>Block {{ block }}</span>
      </div>
      <div class="block-location">
        <div class="icon">
          <MapMarkerAlt :width="12" :height="12"></MapMarkerAlt>
        </div>
        <div class="location">
          <span>Moscow, Russia</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MapMarkerAlt from "../../../assets/icons/MapMarkerAlt.vue";

export default {
  name: "BlockFooter",
  components: {
    MapMarkerAlt
  },
  data() {
    return {
      pingTime: 1344,
      block: 140000
    };
  }
};
</script>

<style scoped>
.block-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: -webkit-linear-gradient(right, #0e5fda, #07306d);
  background: -moz-linear-gradient(right, #0e5fda, #07306d);
  background: -o-linear-gradient(right, #0e5fda, #07306d);
  background: linear-gradient(to left, #0e5fda, #07306d);
  color: rgba(255, 255, 255, 0.7);
  font-size: 10px;
  height: 34px;
}
.block-left {
  display: flex;
  align-items: center;
  width: auto;
}
.block-copyright {
  margin-left: 15px;
}
.block-right {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
}
.block-information {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 170px;
}
.block-location {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 15px;
}
.icon {
  display: flex;
  align-items: center;
  padding-right: 6px;
}
.icon > svg {
  color: #ffffff;
  opacity: 0.7;
}
@media screen and (max-width: 760px) {
  .block-footer {
    flex-direction: column;
    height: 69px;
    align-items: center;
    justify-content: space-around;
  }
  .block-location {
    margin-right: 0;
  }
  .block-right {
    width: 280px;
  }
}
</style>
