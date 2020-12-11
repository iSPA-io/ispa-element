import { App } from 'vue'
import FormItem from './src/index.vue'

FormItem.install = (app: App): void => {
  app.component(FormItem.name, FormItem)
}

export default FormItem
