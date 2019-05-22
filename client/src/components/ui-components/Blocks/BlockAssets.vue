<template>
  <div class="block-assets">
    <div class="header">
      <div>Assets</div>
      <div class="control-block">
        <InputWithButton
          :placeholder="placeholder"
          :disabled="disabled"
          v-model="assetsSearch"
        ></InputWithButton>
        <b-form-select
          class="control-select"
          v-model="selected"
          :options="options"
        ></b-form-select>
      </div>
    </div>
    <div class="flex-assets">
      <CardAssets
        v-for="item in sortedList"
        v-bind:key="item.id"
        class="margin-10 card-asset"
        :class="{ 'not-active': !item.isActive }"
        :currencyFirst="item.currencyFirst"
        :currencySecond="item.currencySecond"
        :oracleValue="item.oracleValue"
        :brokerValue="item.brokerValue"
        :isActive="item.isActive"
        :barValue="item.barValue"
        :barVariant="item.barVariant"
      ></CardAssets>
    </div>
  </div>
</template>

<script>
import CardAssets from "../Cards/CardAssets.vue";
import InputWithButton from "../Inputs/InputWithButton.vue";
import _ from "lodash";

export default {
  name: "BlockAssets",
  components: {
    CardAssets,
    InputWithButton
  },
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      placeholder: "Currency name",
      disabled: false,
      assetsSearch: "",
      assetsSort: "",
      selected: "barValue",
      options: [
        { value: "barValue", text: "Volume" },
        { value: "oracleValue", text: "Oracles" },
        { value: "brokerValue", text: "Brokers" }
      ]
    };
  },
  computed: {
    filteredList: function() {
      let self = this;
      return this.data.filter(function(elem) {
        return _.includes(
          elem.currencyFirst.toLowerCase(),
          self.assetsSearch.toLowerCase()
        );
      });
    },
    sortedList: function() {
      return _.orderBy(this.filteredList, this.selected, "desc");
    }
  }
};
</script>

<style scoped>
.block-assets {
  height: 100%;
  padding: 15px 25px;
  box-shadow: 0 3px 25px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
.header {
  display: flex;
  justify-content: space-between;
  margin: 5px;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
}
.card-asset.not-active {
  opacity: 0.5;
}
.control-block {
  display: flex;
  justify-content: flex-end;
  width: 200px;
}
/deep/.custom-select {
  margin-left: 10px;
  font-size: 0.35em;
  background: #f4f5f7;
  border: 0;
  width: 60px;
}
.flex-assets {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-height: 180px;
  overflow-y: scroll;
}
.margin-10 {
  margin: 5px;
}
@media only screen and (max-width: 460px) and (min-width: 320px) {
  .flex-assets {
    justify-content: center;
  }
}
</style>
