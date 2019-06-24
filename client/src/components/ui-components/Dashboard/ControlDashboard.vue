<template>
  <div class="block-control">
    <div class="left-block">
      <span class="online-label">Online</span>
      <Clock class="clock"></Clock>
      <span>last</span>
      <div class="block-hour">
        <b-form-select
          class="hour-select"
          v-model="selected"
          :options="options"
          disabled-field
        ></b-form-select>
      </div>
      <span>hour</span>
    </div>
    <div class="right-block">
      <span>dates</span>
      <div class="block-date">
        <v-date-picker
          class="custom-data-picker"
          v-model="selectedData"
          mode="range"
          show-caps
        />
      </div>
    </div>
  </div>
</template>

<script>
  import Clock from "../../../assets/icons/Clock.vue";
  export default {
    name: "ControlDashboard",
    components: {
      Clock,
    },
    data() {
      return {
        selected: "1",
        options: [
          { value: "1", text: "1" },
          { value: "2", text: "2" },
          { value: "3", text: "3" },
          { value: "6", text: "6" },
          { value: "8", text: "8" },
          { value: "12", text: "12" },
          { value: "24", text: "24" }
        ],
        selectedData: {
          start: new Date(2019, 0, 9),
          end: new Date(2019, 0, 18)
        },
      };
    },
  }
</script>

<style scoped>
  .block-control {
    display: flex;
    padding: 20px 30px;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-radius: 5px;
    box-shadow: 0 3px 25px rgba(0, 0, 0, 0.1);
    height: 63px;
  }
  .left-block {
    width: 50%;
    display: flex;
    align-items: center;
  }
  .right-block {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .online-label {
    display: inline-block;
    padding: 7px 12px;
    border-radius: 5px;
    background-color: #0E5FDA;
    color: #ffffff;
    font-size: 12px;
  }
  .clock {
    width: 12px;
    height: 12px;
    color: #4F4F4F;
    margin-left: 10px;
    margin-right: 5px;
  }
  .block-hour {
    position: relative;
  }
  /deep/.custom-select {
    margin-left: 10px;
    margin-right: 10px;
    font-size: 0.8em;
    border: 0;
    background: 0;
    background-color: rgba(14, 95, 218, 1);
    color: #ffffff;
    width: 55px;
    padding-right: 10px;
  }
  /deep/.custom-select > option {
    color: #4f4f4f;
    background-color: #ffffff;
  }
  .custom-data-picker {
    margin-left: 5px;
  }
  /deep/.custom-data-picker > input {
    border: 0;
    min-width: 160px;
    background-color: #F4F5F7;
    padding-left: 8px;
    color: #C7C7C7;
  }
</style>