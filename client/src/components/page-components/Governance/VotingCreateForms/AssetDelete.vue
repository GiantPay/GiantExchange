<template>
  <div>
    <b-input
      v-model="id"
      name="id"
      required
      placeholder="Asset id"
      class="mb-2"
    />
    <b-textarea
      v-model="rationale"
      name="rationale"
      maxlength="1000"
      required
      placeholder="Rationale for deletion"
      class="mb-2"
      rows="5"
    />
    <b-input
      v-model="$v.url.$model"
      name="url"
      maxlength="1000"
      required
      placeholder="URL with arguments to justification"
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
  name: "AssetDelete",
  data: () => ({
    id: "",
    rationale: "",
    url: ""
  }),
  validations: {
    url: {
      url
    }
  }
};
</script>
