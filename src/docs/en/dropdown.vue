<template>
  <h1>Dropdown</h1>
  <p>Commonly used dropdown.</p>


  <h3>Global Component</h3>
  <pre class="ispa-code language-javascript"><code>{{ code1 }}</code></pre>
  <h3>Use at Component</h3>
  <pre class="ispa-code language-javascript"><code>{{ code2 }}</code></pre>


  <h2>Basic Usage</h2>
  <div class="h-64"></div>
  <div class="demo">
    <i-dropdown />
  </div>
</template>

<script>
import  { defineComponent } from 'vue'

export default defineComponent({
  name: 'Dropdown',
  props: {

  },
  data() {
    return {

      code1: `//  app.js
import { IDropdown } from 'ispa-element'

app.component(IDropdown.name, IDropdown)`,
      code2: `//  component.vue
import { IDropdown } from 'ispa-element'

export default {
  components: { IDropdown },
}`,
    }
  },
})
</script>
