import GiantSigner from './giant-signer';

const VueGiantSigner = {
  install(Vue) {
    // Object.defineProperty(Vue.prototype, '$giantSigner', {
    //   get() {
    //     return GiantSigner;
    //   },
    // });
    Vue.mixin({
      beforeCreate() {
        this.$giantSigner = GiantSigner;
      },
    });
  },
};

export default VueGiantSigner;
