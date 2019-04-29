import GiantSigner from "./giant-signer";

const vueGiantSigner = {
  install(Vue) {
    Object.defineProperty(Vue.prototype, "$giantSigner", {
      get() {
        return GiantSigner;
      }
    });
  }
};

export default vueGiantSigner;
