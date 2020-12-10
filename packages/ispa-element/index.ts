import type { App } from 'vue'
import Button from '@ispa-element/button'
import { setConfig } from '@ispa-element/utils/config'
import type { InstallOptions } from '@ispa-element/utils/config'

const defaultInstallOpt: InstallOptions =  {
  size: '' as ComponentSize,
  zIndex: 2000,
}

const components = [
  Button,
]

const install = (app: App, opt: InstallOptions): void => {
  const option = Object.assign(defaultInstallOpt, opt)
  // use(option.locale)
  app.config.globalProperties.$ELEMENT = option
  setConfig(option)

  components.forEach(component => {
    app.component(component.name, component)
  })
}

export {
  Button,
  install,
}

export default {
  install,
}
