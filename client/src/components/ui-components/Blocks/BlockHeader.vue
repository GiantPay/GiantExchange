<template>
  <div class="header">
    <div class="block-logo">
      <img src="../../../assets/logo.png" alt="">
    </div>
    <div class="block-navigation">
      <Navigation></Navigation>
    </div>
    <div class="block-purse">
      <Purse></Purse>
    </div>
    <div class="block-helpers">
      <div class="block-alert">
        <Bell :width="16" :height="16"></Bell>
      </div>
      <div>
        <div class="block-question">
          <QuestionCircle :width="16" :height="16"></QuestionCircle>
        </div>
        <div class="block-lang">
          <b-form-select v-model="selected" :options="options" disabled-field></b-form-select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from '../Header/Navigation.vue';
import Purse from '../Header/Purse.vue';
import Bell from "../../../assets/icons/Bell.vue";
import QuestionCircle from "../../../assets/icons/QuestionCircle.vue";

export default {
  name: 'BlockHeader',
  components: {
    Navigation,
    Purse,
    Bell,
    QuestionCircle,
  },
  data() {
    return {
      selected: 'En',
      options: [
        { value: 'En', text: 'En' },
        { value: 'Ru', text: 'Ru' },
        { value: 'Der', text: 'Der' },
        { value: 'Fr', text: 'Fr' },
      ]
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 70px;
  background: -webkit-linear-gradient(right, #0E5FDA, #07306D);
  background: -moz-linear-gradient(right, #0E5FDA, #07306D);
  background: -o-linear-gradient(right, #0E5FDA, #07306D);
  background: linear-gradient(to left, #0E5FDA, #07306D);
}
.block-alert {
  display: flex;
  align-items: center;
}
.block-alert > svg {
  color: #ffffff;
  opacity: 0.7;
}
.block-question {
  display: flex;
  align-items: center;
}
.block-question > svg {
  color: #ffffff;
  opacity: 0.7;
}
/deep/.custom-select {
  margin-left: 10px;
  font-size: 0.8em;
  border: 0;
  background: 0;
  background-color: rgba(255, 255, 255, 0.1);
  color: #ffffff;
}
/deep/.custom-select > option {
  color: #4F4F4F;
  background-color: #ffffff;
}
</style>