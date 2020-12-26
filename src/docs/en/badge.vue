<template>
  <h1>Badge</h1>
  <p>Commonly used badge.</p>

  <h3>Global Component</h3>
  <pre class="ispa-code language-javascript"><code>{{ code1 }}</code></pre>
  <h3>Use at Component</h3>
  <pre class="ispa-code language-javascript"><code>{{ code2 }}</code></pre>


  <h2>Basic Usage</h2>
  <div class="demo">
    <i-badge>Badge</i-badge>
  </div>
</template>

<script>
import  { defineComponent } from 'vue'

export default defineComponent({
  name: 'Badge',
  props: {

  },
  data() {
    return {
      code1: `//  app.js
import { IBadge } from 'ispa-element'

app.component(IBadge.name, IBadge)`,
      code2: `//  component.vue
import { IBadge } from 'ispa-element'

export default {
  components: { IBadge },
}`,

    }
  },
})
</script>
