<template>
  <div>
    <b-input v-model="justification"
             name="justification"
             maxlength="1000"
             required
             placeholder="Justification of the payment"
             class="mb-2" />
    <b-input v-model="$v.url.$model"
             name="url"
             maxlength="1000"
             required
             placeholder="URL with arguments to justification"
             class="mb-2" />
    <div v-if="$v.url.$error" class="error text-danger mb-2">URL error</div>
  </div>
</template>

<script>
import url from 'vuelidate/lib/validators/url';

export default {
  name: 'DividendPayment',
  data: () => ({
    justification: '',
    url: '',
  }),
  validations: {
    url: {
      url,
    },
  },
};
</script>
