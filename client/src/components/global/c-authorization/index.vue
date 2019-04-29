<template>
  <b-modal v-model="authModal" hide-footer centered title="Sign In">
    <div class="block-themed animated fadeIn">
      <div class="block-content block-content-full block-content-narrow">
        <b-form class="form-horizontal" @submit.prevent="onSubmit">
          <div class="form-group">
            <div
              class="form-material form-material-primary floating"
              :class="{ open: login }"
            >
              <b-form-input
                id="login-username"
                v-model="login"
                class="form-control"
                type="text"
                required
              />
              <label for="login-username">Username</label>
            </div>
          </div>

          <div class="form-group">
            <div
              class="form-material form-material-primary floating"
              :class="{ open: password }"
            >
              <b-form-input
                id="login-password"
                v-model="password"
                class="form-control"
                type="password"
                required
              />
              <label for="login-password">Password</label>
            </div>
          </div>

          <div class="form-group row mt-5">
            <div class="col-6">
              <b-button type="submit" variant="primary" block>
                <i class="si si-login pull-right" /> Sign in
              </b-button>
            </div>
            <div class="col-6">
              <b-button
                type="button"
                variant="default"
                block
                @click="closeModal"
              >
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
  name: "CAuthorization",
  data: () => ({
    login: localStorage.getItem("username"),
    password: ""
  }),
  computed: {
    authModal: {
      get() {
        return this.$store.state.authModal;
      },
      set(val) {
        this.$store.state.authModal = val;
      }
    }
  },
  methods: {
    onSubmit() {
      try {
        const reply = this.$giantSigner.signIn(this.login, this.password);
        if (reply) {
          localStorage.setItem("username", this.login);
          this.$store.commit("authorization");
          this.$store.commit("toggleAuthModal");
          this.$emit("authorized", this.login);
        }
      } catch (error) {
        console.log("error", error);
      }
    },
    closeModal() {
      this.$store.commit("toggleAuthModal");
    }
  }
};
</script>

<style scoped></style>
