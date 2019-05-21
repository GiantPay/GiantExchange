<template>
  <div class="header">
    <div class="header-left">
      <div class="block-logo">
        <img src="../../../assets/logo.png" alt="" />
      </div>
      <div class="block-navigation">
        <Navigation :activePage="activePage"></Navigation>
      </div>
    </div>
    <div class="header-right">
      <div class="block-purse">
        <Purse
          :balanceValue="balanceValue"
          :currency="currency"
          :walletAddress="walletAddress"
        >
          >
        </Purse>
      </div>
      <div class="block-helpers">
        <div class="block-alert">
          <Bell :width="16" :height="16"></Bell>
        </div>
        <div class="block-control">
          <div class="block-question">
            <QuestionCircle :width="16" :height="16"></QuestionCircle>
          </div>
          <div class="block-lang">
            <b-form-select
              v-model="selected"
              :options="options"
              disabled-field
            ></b-form-select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "../Header/Navigation.vue";
import Purse from "../Header/Purse.vue";
import Bell from "../../../assets/icons/Bell.vue";
import QuestionCircle from "../../../assets/icons/QuestionCircle.vue";

export default {
  name: "BlockHeader",
  components: {
    Navigation,
    Purse,
    Bell,
    QuestionCircle
  },
  data() {
    return {
      selected: "En",
      options: [
        { value: "En", text: "En" },
        { value: "Ru", text: "Ru" },
        { value: "Der", text: "Der" },
        { value: "Fr", text: "Fr" }
      ],
      balanceValue: 230.23,
      currency: "GIC",
      walletAddress: "DFvstVbsTjdbFGVlstdkeGHbaGdtwBkshr",
      activePage: "Dashboard"
    };
  }
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  background: -webkit-linear-gradient(right, #0e5fda, #07306d);
  background: -moz-linear-gradient(right, #0e5fda, #07306d);
  background: -o-linear-gradient(right, #0e5fda, #07306d);
  background: linear-gradient(to left, #0e5fda, #07306d);
}
.header-left {
  display: flex;
  align-items: center;
}
.header-right {
  display: flex;
  align-items: center;
}
.block-logo {
  margin-left: 20px;
}
.block-logo > img {
  width: 113px;
}
.block-navigation {
  padding-top: 15px;
  padding-left: 20px;
}
.block-helpers {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 160px;
}
.block-alert {
  display: flex;
  align-items: center;
  padding-left: 10px;
}
.block-alert > svg {
  color: #ffffff;
  opacity: 0.7;
}
.block-control {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.block-question {
  display: flex;
  align-items: center;
}
.block-question > svg {
  color: #ffffff;
  opacity: 0.7;
}
.block-lang {
  margin-right: 15px;
}
/deep/.custom-select {
  margin-left: 10px;
  font-size: 0.8em;
  border: 0;
  background: 0;
  background-color: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  padding-right: 10px;
  width: 60px;
}
/deep/.custom-select > option {
  color: #4f4f4f;
  background-color: #ffffff;
}
@media screen and (max-width: 1140px) {
  .block-navigation {
    padding-top: 0;
  }
}
</style>
