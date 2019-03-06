import Vue from 'vue';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';

const requireComponent = require.context(
  '.',
  true,
  /index\.vue/,
);

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);

  const componentName = upperFirst(camelCase(fileName
    .replace(/^\.\/(.*)\.\w+$/, '$1')
    .replace(/\/index/, '')));

  Vue.component(componentName, componentConfig.default || componentConfig);
});
