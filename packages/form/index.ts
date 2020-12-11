import { App } from 'vue'
import Form from './src/index.vue'

Form.install = (app: App): void => {
  app.component(Form.name, Form)
}

export default Form
