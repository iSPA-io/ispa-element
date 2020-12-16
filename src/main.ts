import { createApp } from 'vue'

import App from './app.vue'

const app = createApp(App)

import router from './routes'

import iSPAElement from 'ispa-element'

import  Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
const VuePrism = {
  install (app, options) {
    app.mixin({
      mounted () {
        Prism.highlightAll()
      },
    })
  },
}
app.use(VuePrism)

app.use(iSPAElement)
  .use(router)

app.mount('#app')
