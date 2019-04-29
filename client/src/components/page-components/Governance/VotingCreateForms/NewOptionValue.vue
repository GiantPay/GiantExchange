<template>
  <div>
    <b-input
      v-model="newValue"
      name="newValue"
      maxlength="1000"
      required
      placeholder="New value"
      class="mb-2"
    />
    <b-input
      v-model="justification"
      name="justification"
      maxlength="1000"
      required
      placeholder="Justification"
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
  </div>
</template>

<script>
import url from "vuelidate/lib/validators/url";

export default {
  name: "NewOptionValue",
  data: () => ({
    newValue: "",
    justification: "",
    url: ""
  }),
  validations: {
    url: {
      url
    }
  }
};
</script>
