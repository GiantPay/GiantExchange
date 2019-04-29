<template>
  <div>
    <b-input
      v-model="name"
      name="name"
      maxlength="1000"
      required
      placeholder="Oracle name"
      class="mb-2"
    />
    <b-input
      v-model="$v.url.$model"
      name="url"
      maxlength="1000"
      required
      placeholder="URL to oracle description page"
      class="mb-2"
    />
    <div v-if="$v.url.$error" class="error text-danger mb-2">
      URL error
    </div>
    <b-input
      v-model="commission"
      number
      name="commission"
      required
      type="number"
      step="any"
      placeholder="Oracle commission"
      class="mb-2"
    />
    <b-input
      v-model="address"
      name="address"
      maxlength="30"
      required
      placeholder="Address of the smart contract oracle"
      class="mb-2"
    />
  </div>
</template>

<script>
import url from "vuelidate/lib/validators/url";

export default {
  name: "OracleRegistration",
  data: () => ({
    name: "",
    url: "",
    commission: "",
    address: ""
  }),
  validations: {
    url: {
      url
    }
  }
};
</script>
