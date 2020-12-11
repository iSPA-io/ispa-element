import { App } from 'vue'
import IButton from './button.vue'

IButton.install = (app: App): void => {
  app.component(IButton.name, IButton)
}

export default IButton
