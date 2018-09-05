<template>
  <b-modal v-model="authModal" hide-footer centered title="Sign In">
    <div class="block-themed animated fadeIn">
      <div class="block-content block-content-full block-content-narrow">
        <b-form class="form-horizontal" @submit.prevent="onSubmit">
          <div class="form-group">
            <div class="form-material form-material-primary floating"
                 :class="{ open: login }">
              <b-form-input
                  class="form-control"
                  type="text"
                  v-model="login"
                  required
                  id="login-username"/>
              <label for="login-username">Username</label>
            </div>
          </div>

          <div class="form-group">
            <div class="form-material form-material-primary floating"
                 :class="{ open: password }">
              <b-form-input
                  class="form-control"
                  type="password"
                  v-model="password"
                  required
                  id="login-password"/>
              <label for="login-password">Password</label>
            </div>
          </div>

          <div class="form-group row mt-5">
            <div class="col-6">
              <b-button
                  type="submit"
                  variant="primary"
                  block>
                <i class="si si-login pull-right"></i> Sign in
              </b-button>
            </div>
            <div class="col-6">
              <b-button
                  type="button"
                  variant="default"
                  block
                  @click="closeModal">
                Close
              </b-button>
            </div>
          </div>
        </b-form>
      </div>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: 'c-authorization',
  data: () => ({
    login: '',
    password: '',
  }),
  computed: {
    authModal: {
      get() {
        return this.$store.state.authModal;
      },
      set(val) {
        this.$store.state.authModal = val;
      },
    },
  },
  methods: {
    onSubmit() {
      console.log('submitted');
    },
    closeModal() {
      this.$store.commit('toggleAuthModal');
    },
  },
};
</script>

<style scoped>

</style>
