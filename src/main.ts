import { createApp } from 'vue'
import App from './App.vue'

import iSPAElement from './index'

const app = createApp(App)

Object.keys(iSPAElement).forEach(name => {
  app.component(name, iSPAElement[name])
})

app.mount('#app')
