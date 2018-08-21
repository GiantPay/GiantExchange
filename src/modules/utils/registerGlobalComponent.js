/**
 * TODO
 */
function registerGlobalComponent(Vue, component) {
  Vue.component(component.name, component);
  console.log('component', component);
  const obj = {};
  obj[`$${component.name}`] = {
    get() {
      let el = this;
      console.log('el', el);
      while (el) {
        for (let i = 0; i < el.$children.length; i++) {
          const child = el.$children[i];
          /* istanbul ignore else */
          if (child.$options._componentTag === component.name) {
            return child;
          }
        }
        el = el.$parent;
      }
      if (process.env.NODE_ENV !== 'production') {
        console.warn(`${component.name} component must be part of this component scope or any of the parents scope.`);
      }
      return null;
    },
  };
  Object.defineProperties(Vue.prototype, obj);
}

export default registerGlobalComponent;
