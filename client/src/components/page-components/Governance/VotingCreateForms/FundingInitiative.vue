<template>
  <div>
    <b-input v-model="description"
             name="description"
             maxlength="1000"
             required
             placeholder="Description of the initiative"
             class="mb-2" />
    <b-input v-model="$v.url.$model"
             name="url"
             maxlength="1000"
             required
             placeholder="URL to description"
             class="mb-2" />
    <div v-if="$v.url.$error" class="error text-danger mb-2">URL error</div>
    <b-input v-model="name"
             name="name"
             maxlength="30"
             required
             placeholder="Name of the proposer"
             class="mb-2" />
    <b-input v-model="address"
             name="address"
             maxlength="50"
             required
             placeholder="Address for funding"
             class="mb-2" />
    <b-input v-model="amount"
             number
             name="amount"
             type="number"
             step="any"
             maxlength="30"
             required
             placeholder="Amount of funding"
             class="mb-2" />
  </div>
</template>

<script>
import url from 'vuelidate/lib/validators/url';

export default {
  name: 'FundingInitiative',
  data: () => ({
    description: '',
    url: '',
    name: '',
    address: '',
    amount: '',
  }),
  validations: {
    url: {
      url,
    },
  },
};
</script>
