<template>
  <div class="block-bet">
    <div class="header">
      <span>Bet</span>
    </div>
    <div class="content-bet">
      <div class="input-block">
        <InputWithLabel
          :placeholder="placeholder"
          :disabled="disabled"
          :labelValue="labelValue"
          :minValue="minValue"
          :maxValue="maxValue"
          v-model="rate"
          :class="{ error: animationError }"
        ></InputWithLabel>
      </div>
      <div class="set-interval-block">
        <RadioButtons :optionsSelect="optionsSelect" v-model="buttonSelected" />
      </div>
      <div class="rate-block">
        <div class="currency">
          <span>BTC / USD</span>
        </div>
        <div class="rate">
          <span class="rate-value">{{ currentCost }}</span>
        </div>
      </div>
      <div class="reward-block">
        <span>Reward 80%</span>
        <b-progress :value="80" variant="primary"></b-progress>
      </div>
      <div class="buttons-block">
        <div class="call-block">
          <b-button
            @click="buyOption(DEAL_TYPE.CALL)"
            variant="success"
            class="button-call"
          >
            Call <ArrowUp :width="14" :height="14"></ArrowUp>
          </b-button>
        </div>
        <div class="put-block">
          <b-button
            @click="buyOption(DEAL_TYPE.PUT)"
            variant="danger"
            class="button-put"
          >
            Put <ArrowDown :width="14" :height="14"></ArrowDown>
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputWithLabel from "../Inputs/InputWithLabel.vue";
import RadioButtons from "../Inputs/RadioButtons.vue";
import ArrowUp from "@/assets/icons/ArrowUp.vue";
import ArrowDown from "@/assets/icons/ArrowDown.vue";

import { mapState, mapMutations } from "vuex";

import { between } from "vuelidate/lib/validators";

import { DEAL_TYPE } from "@/modules/constants";

export default {
  name: "BlockBet",
  components: {
    InputWithLabel,
    RadioButtons,
    ArrowUp,
    ArrowDown
  },
  props: {
    currentCost: {
      type: Number
    }
  },
  data() {
    return {
      placeholder: "Input text",
      disabled: false,
      labelValue: "GIC",
      minValue: 100,
      maxValue: 1000,
      rate: 150,
      valueInput: 0,
      optionsSelect: [
        { value: 1, text: "1 min" },
        { value: 2, text: "2 min" },
        { value: 3, text: "3 min" }
      ],
      buttonSelected: 1,

      animationError: false,
      DEAL_TYPE
    };
  },
  validations() {
    return {
      rate: {
        between: between(
          this.currentBroker.rateInterval.minRate,
          this.currentBroker.rateInterval.maxRate
        )
      }
    };
  },
  methods: {
    buyOption(dealType) {
      if (this.$v.$invalid && this.rate > this.balanceValue) {
        this.animationError = true;
        if (this.rate > this.balanceValue) {
          this.$notify({
            title: "Insufficient funds"
          });
        }
      } else {
        this.animationError = false;
        this.$emit("buyOption", {
          id: +new Date(),
          rate: this.rate,
          time: this.buttonSelected,
          dealType
        });
        this.changeBalance(-this.rate);
      }
    },
    ...mapMutations(["changeBalance"])
  },
  computed: {
    ...mapState("trading", ["currentBroker"]),
    ...mapState(["balanceValue"])
  }
};
</script>

<style scoped>
.block-bet {
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  box-shadow: 0 3px 25px rgba(0, 0, 0, 0.1);
}
.header {
  display: flex;
  justify-content: flex-start;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 10px;
}
.content-bet {
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
  height: 214px;
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
  border-radius: 5px;
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
  height: 40px;
  border-radius: 5px;
  border: none;
  background: #00cc5b;
}
.put-block {
  width: 50%;
  display: flex;
  justify-content: flex-end;
}
.put-block > button {
  width: 130px;
  height: 40px;
  border-radius: 5px;
  border: none;
  background: #fd2b2b;
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
.error {
  animation-name: shakeError;
  animation-duration: 0.6s;
  animation-timing-function: ease-in-out;
}
</style>
