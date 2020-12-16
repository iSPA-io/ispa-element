<template>
  <div>
    <h1>Getting Start</h1>
    <div class="tips tips-warning">
      <p>Warning</p>
      <p>This library only use for VueJS version 3.x and Tailwind Css. All icons example on this page use from Font Awesome Pro 5.</p>
    </div>
    <p>To use this package, open up your terminal in the desired directory and run the following command</p>
    <pre class="ispa-code language-sh"><code>{{ `npm install ispa-element` }}</code></pre>

    <p>Then add the library into your main js project</p>
    <pre class="ispa-code language-javascript"><code>{{ code2 }}</code></pre>

    <h2>Module Loader</h2>
    <p>This is the recommended way if your application uses vue-cli or has a webpack based build with vue-loader configured. Import the components as .vue files for seamless integration within your project where path of each component is available at the "import" section of a component documentation.</p>

    <pre class="ispa-code language-javascript"><code>{{ `import { IButton } from 'ispa-element'` }}</code></pre>
    <p>In the next step, register the component with the tag name you'd like to use</p>
    <pre class="ispa-code language-javascript"><code>{{ code4 }}</code></pre>

    <div class="tips">
      <p>Note</p>
      <p>You can use any tag name, but notes these tag name maybe conflict with others tag name, so make sure it's unique tag name to use</p>
    </div>

    <h2>Special Thanks</h2>
    <p>Thanks for amazing library <a href="https://primefaces.org/primevue/showcase/#/" target="_blank" rel="noopener noreferrer">PrimeVue</a> and <a href="https://element.eleme.io/" target="_blank" rel="noopener noreferrer">Element UI</a>, our first version has been inspired from these library. Some our code has been modified from a part of these projects.</p>

    <h2>Milestone</h2>
    <ul>
      <li v-for="(item, ind) in checkList" :key="ind">
        <label class="mb-2" for="">
          <input class="mr-1" type="checkbox" :checked="item.checked"> {{ item.name }}
        </label>
      </li>
    </ul>

    <h2>Versioning</h2>
    <p>Maintained under the <a href="https://semver.org/" target="_blank" rel="noopener noreferrer">Semantic Versioning guidelines</a>.</p>

    <h2>License</h2>
    <p><a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer">MIT</a> © <a href="https://github.com/malayvuong" rel="noopener noreferrer">Malayvuong</a></p>

    <h2>Invite us a cup of coffee</h2>
    <p>If you like this project and want to contribute us, then you can send us a cup of coffee by this ways below:</p>
    <table><thead><tr><th style="text-align: center;">PAYPAL.ME</th> <th style="text-align: center;">MOMO App (Vietnam)</th></tr></thead> <tbody><tr><td style="text-align: center;"><img src="https://ispa.io/docs/assets/qr-code-paypal.png" alt="support us" style="max-width: 200px;"></td> <td style="text-align: center;"><img src="https://ispa.io/docs/assets/qr-code-momo.jpg" alt="support us" style="max-width: 200px;"></td></tr></tbody></table>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import Milestone from '../../i18n/milestone.json'
import { Language } from '../../routes/languages'

export default defineComponent({
  name: 'GettingStart',
  props: {

  },
  setup() {
    const router = useRouter()
    const lang = router.currentRoute.value.path.split('/')[1] || Language.VI

    const checkList = Milestone[lang]

    return { checkList }
  },
  data() {
    return {
      code2: `import { createApp } from 'vue'
import iSPAElement from 'ispa-element'

const app = createApp(App)
app.use(iSPAElement).mount('#app')`,
      code4: `//  In app.js
import {createApp} from 'vue'
const app = createApp(App)

app.component('i-button', IButton)

app.mount('#app')

//  In component.vue
export default {
  components: { IButton }
}`,
    }
  },
})
</script>
