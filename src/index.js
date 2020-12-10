import iButton from './components/button/button.vue';
import iForm from './components/form/form.vue';
import iFormItem from './components/form/form-item.vue';
import iInput from './components/input/input.vue';

const iSPAElement = {
  iButton,
  iForm,
  iFormItem,
  iInput,
};

const install = (app, opt = {}) => {
  Object.keys(iSPAElement).forEach((name) => {
    app.component(name, iSPAElement[name]);
  });
};


export default {
  install,
  ...iSPAElement,
};
