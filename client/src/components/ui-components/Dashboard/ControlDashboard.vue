<template>
  <div class="block-control">
    <div class="left-block">
      <span class="online-label">
        <Clock class="clock"></Clock>
        <span class="online-text">Online</span>
      </span>
      <div class="block-hour">
        <b-form-select
          class="hour-select"
          v-model="selected"
          :options="options"
          disabled-field
        ></b-form-select>
        <ChevronDown class="icon-chevron"></ChevronDown>
      </div>
    </div>
    <div class="right-block">
      <div class="block-calendar">
        <CalendarAlt class="calendar-alt"></CalendarAlt>
      </div>
      <span class="calendar-title">dates</span>
      <div class="block-date">
        <v-date-picker
          class="custom-data-picker"
          v-model="selectedData"
          mode="range"
          show-caps
          popoverAlign="right"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Clock from "../../../assets/icons/Clock.vue";
import CalendarAlt from "../../../assets/icons/CalendarAlt.vue";
import ChevronDown from "../../../assets/icons/ChevronDown.vue";

export default {
  name: "ControlDashboard",
  components: {
    Clock,
    CalendarAlt,
    ChevronDown
  },
  data() {
    return {
      selected: "1",
      options: [
        { value: "1", text: "1 hour" },
        { value: "2", text: "2 hour" },
        { value: "3", text: "3 hour" },
        { value: "6", text: "6 hour" },
        { value: "8", text: "8 hour" },
        { value: "12", text: "12 hour" },
        { value: "24", text: "24 hour" }
      ],
      selectedData: {
        start: new Date(2019, 0, 9),
        end: new Date(2019, 0, 18)
      }
    };
  }
};
</script>

<style scoped>
.block-control {
  display: flex;
  padding: 20px 30px;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  border-radius: 5px;
  box-shadow: 0 3px 25px rgba(0, 0, 0, 0.1);
  height: 63px;
  background-color: #ffffff;
  margin-bottom: 30px;
}
.left-block {
  width: 50%;
  display: flex;
  align-items: center;
}
.right-block {
  position: relative;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.online-label {
  display: inline-block;
  padding: 7px 12px;
  border-radius: 5px;
  background-color: #0e5fda;
  color: #ffffff;
  font-size: 12px;
  cursor: pointer;
}
.clock {
  width: 12px;
  height: 12px;
  color: #ffffff;
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
  width: 75px;
  padding-right: 10px;
}
/deep/.custom-select > option {
  color: #4f4f4f;
  background-color: #ffffff;
}
.icon-chevron {
  position: absolute;
  width: 8px;
  height: 8px;
  color: #ffffff;
  right: 20px;
  top: 12px;
}
.calendar-alt {
  width: 12px;
  height: 12px;
}
.custom-data-picker {
  margin-left: 5px;
}
/deep/.custom-data-picker > input {
  border: 0;
  min-width: 160px;
  background-color: #f4f5f7;
  padding-left: 8px;
  color: #c7c7c7;
}
@media only screen and (max-width: 1700px) and (min-width: 471px) {
  .calendar-title {
    display: none;
  }
}
@media only screen and (max-width: 470px) and (min-width: 320px) {
  .calendar-title {
    display: none;
  }
  .online-text {
    display: none;
  }
  .clock {
    margin-right: 0;
  }
  .block-calendar {
    display: flex;
    padding: 9px 10px;
    border-radius: 5px;
    background-color: #0e5fda;
    cursor: pointer;
  }
  .calendar-alt {
    color: #ffffff;
  }
  .block-date {
    position: absolute;
  }
  /deep/.custom-data-picker > input {
    opacity: 0.1;
    width: 30px;
    min-width: 30px !important;
  }
}
</style>
