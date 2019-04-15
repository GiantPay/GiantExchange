<template>
  <div>
    <b-input v-model="name"
             name="name"
             maxlength="100"
             required
             placeholder="Asset name"
             class="mb-2" />
    <b-input v-model="type"
             name="type"
             maxlength="30"
             required
             placeholder="Asset type"
             class="mb-2" />
    <b-textarea v-model="json"
                name="json"
                maxlength="4000"
                required
                placeholder="Oracle JSON API scheme"
                class="mb-2"
                rows="5" />
    <div v-if="jsonError" class="error text-danger mb-2">JSON parse error</div>
  </div>
</template>

<script>
export default {
  name: 'AssetRegistration',
  data: () => ({
    name: '',
    type: '',
    jsonText: '',
    jsonError: false,
  }),
  computed: {
    json: {
      get() {
        return this.jsonText;
      },
      set(val) {
        try {
          this.jsonText = val;
          if (JSON.parse(val)) this.jsonError = false;
        } catch (e) {
          this.jsonError = true;
        }
      },
    },
  },
};
</script>
