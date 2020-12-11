import { createApp } from 'vue'
const app = createApp(App)

import App from './app.vue'

import iSPAElement from 'ispa-element'

app.use(iSPAElement)

app.mount('#app')
