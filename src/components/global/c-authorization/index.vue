<template>
  <div class="auth">
    <b-modal ref="authModal" hide-footer centered title="Sign In">
      <div class="block-themed animated fadeIn">
        <div class="block-content block-content-full block-content-narrow">
          <b-form class="form-horizontal" @submit.prevent="onSubmit">
            <div class="form-group">
              <div class="col-xs-12">
                <div class="form-material form-material-primary floating"
                     :class="{ open: login }">
                  <b-form-input
                      class="form-control"
                      type="text"
                      v-model="login"
                      id="login-username"/>
                  <label for="login-username">Username</label>
                </div>
              </div>
            </div>

            <div class="form-group">
              <div class="col-xs-12">
                <div class="form-material form-material-primary floating"
                     :class="{ open: password }">
                  <b-form-input
                      class="form-control"
                      type="password"
                      v-model="password"
                      id="login-password"/>
                  <label for="login-password">Password</label>
                </div>
              </div>
            </div>

            <div class="form-group">
              <div class="col-xs-12">
                <b-button
                    type="submit"
                    variant="primary"
                    class="btn-block">
                  <i class="si si-login pull-right"></i> Log in
                </b-button>
              </div>
            </div>
          </b-form>
        </div>
      </div>
    </b-modal>
    <!--<b-button @click="$refs.authModal.show()">Open</b-button>-->
  </div>
</template>

<script>
export default {
  name: 'c-authorization',
  data: () => ({
    login: '',
    password: '',
  }),
  methods: {
    onSubmit() {
      console.log('submitted');
    },
  },
  created() {
    // this.$refs.authModal.show();
  },
};
</script>

<style scoped>

</style>
