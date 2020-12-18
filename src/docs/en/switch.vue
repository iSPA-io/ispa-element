<template>
  <h1>Switch</h1>
  <p>Commonly used switch. Default icons used from <a href="https://heroicons.com/" target="_blank" title="Heroicons">Heroicons</a>.</p>

  <h3>Global Component</h3>
  <pre class="ispa-code language-javascript"><code>{{ code1 }}</code></pre>
  <h3>Use at Component</h3>
  <pre class="ispa-code language-javascript"><code>{{ code2 }}</code></pre>

  <h2>Basic usage</h2>
  <div class="demo">
    <div class="block pb-2 mb-2 border-b">
      Form: {{ form }}
      <span v-if="changedText" class="text-xs text-gray-400">{{ changedText }}</span>
    </div>
    <i-switch
      v-model="form.switch"
      true-value="1"
      false-falue="2"
      show-icon
      text-on="On"
      text-off="Off"
      title="test"
      small
      @change="changeSwitch"
    />
  </div>
</template>

<script>
import  { defineComponent } from 'vue'

export default defineComponent({
  name: 'Switch',
  props: {

  },
  data() {
    return {
      form: {
        switch: true,
      }, changedText: null,

      code1: `//  app.js
import { ISwitch } from 'ispa-element'

app.component(ISwitch.name, ISwitch)`,
      code2: `//  component.vue
import { ISwitch } from 'ispa-element'

export default {
  components: { ISwitch },
}`,
    }
  },
  methods: {
    changeSwitch(e, val) {
      this.changedText = 'event changed fire ' + e + ' - and value is: ' + val
    },
  },
})
</script>
