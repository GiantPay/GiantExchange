<template>
  <div class="home">
    <img alt="Giant logo" src="../assets/logo.png">
  </div>
</template>

<script>

export default {
  name: 'home',
  created() {
    console.log('---', this);
    // console.log('this.$giantSigner.signIn()', this.$giantSigner.signIn());
  },
};
</script>
