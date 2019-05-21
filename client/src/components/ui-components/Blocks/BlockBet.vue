<template>
  <div class="block-bet">
    <div class="header">
      <span>Bet</span>
    </div>
    <div class="content">
      <div class="input-block">
        <InputWithLabel
          :placeholder="placeholder"
          :disabled="disabled"
          :labelValue="labelValue"
          :minValue="minValue"
          :maxValue="maxValue"
          v-model="value"
        ></InputWithLabel>
      </div>
      <div class="set-interval-block">
        <RadioButtons
          :optionsSelect="optionsSelect"
          v-model="buttonSelected"
        ></RadioButtons>
      </div>
      <div class="rate-block">
        <div class="currency">
          <span>BTC / USD</span>
        </div>
        <div class="rate">
          <span class="rate-value">13352,58</span>
        </div>
      </div>
      <div class="reward-block">
        <span>Reward 62%</span>
        <b-progress :value="62" variant="primary"></b-progress>
      </div>
      <div class="buttons-block">
        <div class="call-block">
          <b-button variant="success">Call</b-button>
        </div>
        <div class="put-block">
          <b-button variant="danger">Put</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputWithLabel from "../Inputs/InputWithLabel.vue";
import RadioButtons from "../Inputs/RadioButtons.vue";

export default {
  name: "BlockBet",
  components: {
    InputWithLabel,
    RadioButtons
  },
  data() {
    return {
      placeholder: "Input text",
      disabled: false,
      labelValue: "GIC",
      minValue: 100,
      maxValue: 1000,
      value: 150,
      valueInput: 0,
      optionsSelect: [
        { value: 60 * 1000, text: "1 min" },
        { value: 5 * 60 * 1000, text: "5 min" },
        { value: 10 * 60 * 1000, text: "10 min" },
        { value: 30 * 60 * 1000, text: "30 min" }
      ],
      buttonSelected: 1 * 60 * 1000
    };
  },
  methods: {}
};
</script>

<style scoped>
.block-bet {
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  margin: 5px;
  max-width: 350px;
  height: 624px;
  border-radius: 5px;
  box-shadow: 0 3px 25px rgba(0, 0, 0, 0.1);
}
.header {
  display: flex;
  justify-content: start;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 10px;
}
.content {
  padding-top: 10px;
  padding-bottom: 10px;
}
.input-block {
  padding-bottom: 10px;
}
.set-interval-block {
  padding-top: 10px;
  padding-bottom: 10px;
}
.rate-block {
  height: 250px;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.currency {
  display: flex;
  justify-content: center;
  font-weight: bold;
}
.rate {
  display: flex;
  justify-content: center;
}
.rate-value {
  background-color: #f4f5f7;
  padding: 2px 10px;
  border-radius: 5px;
  font-size: 20px;
  color: #4f4f4f;
}
/deep/.progress {
  height: 38px;
}
.reward-block {
  padding-top: 10px;
  padding-bottom: 20px;
}
.buttons-block {
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
}
.call-block {
  width: 50%;
  display: flex;
  justify-content: flex-start;
}
.call-block > button {
  width: 130px;
  height: 37px;
}
.put-block {
  width: 50%;
  display: flex;
  justify-content: flex-end;
}
.put-block > button {
  width: 130px;
  height: 37px;
}
@media screen and (max-width: 1140px) {
  .block-bet {
    height: 405px;
  }
  .rate-block {
    height: 70px;
  }
  /deep/.progress {
    height: 6px;
  }
}
</style>
