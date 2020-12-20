import { App } from 'vue'
import Dropdown from './src/index.vue'

Dropdown.install = (app: App): void => {
  app.component(Dropdown.name, Dropdown)
}

export default Dropdown
