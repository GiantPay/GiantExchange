import registerGlobalComponent from '@/modules/utils/registerGlobalComponent';
import vueUse from '@/modules/utils/vueUse';
import GiantSigner from './component/index.vue';

const vueGiantSigner = {
  install(Vue) {
    registerGlobalComponent(Vue, GiantSigner);
  },
};

export default vueGiantSigner;

vueUse(vueGiantSigner);
