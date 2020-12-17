import { createApp, nextTick } from 'vue'

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

router.isReady().then(() => {

  router.afterEach(async route => {
    await nextTick()
    document.title = (route.meta.title ? route.meta.title + ' | ' : '') + 'iSPA Element UI'
  })

})

app.mount('#app')
