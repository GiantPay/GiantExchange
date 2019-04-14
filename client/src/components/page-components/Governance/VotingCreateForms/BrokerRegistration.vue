<template>
  <div>
    <b-input v-model="name"
             name="name"
             maxlength="1000"
             required
             placeholder="Oracle name"
             class="mb-2" />
    <b-input v-model="$v.url.$model"
             name="url"
             maxlength="1000"
             required
             placeholder="URL to broker description page"
             class="mb-2" />
    <div v-if="$v.url.$error" class="error text-danger mb-2">URL error</div>
    <b-input v-model="optionType"
             name="optionType"
             maxlength="30"
             required
             placeholder="Type of broker option"
             class="mb-2" />
    <b-input v-model="brokerScheme"
             name="brokerScheme"
             maxlength="30"
             required
             placeholder="Generated broker scheme"
             class="mb-2" />
  </div>
</template>

<script>
import url from 'vuelidate/lib/validators/url';

export default {
  name: 'OracleRegistration',
  data: () => ({
    name: '',
    url: '',
    optionType: '',
    brokerScheme: '',
  }),
  validations: {
    url: {
      url,
    },
  },
};
</script>
