import type { App } from 'vue'
//  Basic
import IAlert from '@ispa-element/alert'
import IButton from '@ispa-element/button'
//  Form - input
import IForm from '@ispa-element/form'
import IFormItem from '@ispa-element/form-item'
import IInput from '@ispa-element/input'
import ISwitch from '@ispa-element/switch'
//  Navigation
import IDropdown from '@ispa-element/dropdown'
//  Advanced
import IDivider from '@ispa-element/divider'

import { setConfig } from '@ispa-element/utils/config'
import type { InstallOptions } from '@ispa-element/utils/config'

const defaultInstallOpt: InstallOptions =  {
  size: '' as ComponentSize,
  zIndex: 2000,
}

const components = [
  IAlert, IButton,
  IInput, IForm, IFormItem, ISwitch,
  IDropdown,
  IDivider,
]

const install = (app: App, opt: InstallOptions): void => {
  const option = Object.assign(defaultInstallOpt, opt)
  // use(option.locale)
  app.config.globalProperties.$ISPA = option
  setConfig(option)

  components.forEach(component => {
    app.component(component.name, component)
  })
}

export {
  IAlert, IButton,
  IInput, IForm, IFormItem, ISwitch,
  IDropdown,
  IDivider,
  install,
}

export default {
  install,
}
