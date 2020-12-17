<template>
  <h1>Form Item</h1>
  <p>Commonly used form item.</p>


  <h3>Global Component</h3>
  <pre class="ispa-code language-javascript"><code>{{ code1 }}</code></pre>
  <h3>Use at Component</h3>
  <pre class="ispa-code language-javascript"><code>{{ code2 }}</code></pre>


  <h2>Basic Usage</h2>
  <p>Let's put a simple input inside your element</p>
  <div class="demo">
    <i-form-item
      label="Label of Input demo"
      for="input_demo_1"
      desc="This is description of form item"
    >
      <i-input id="input_demo_1" placeholder="Input demo" />
    </i-form-item>
  </div>
  <pre class="ispa-code language-html"><code>{{`<i-form-item label="Label of Input demo" for="input_demo_1" desc="This is description of form item">
  <i-input id="input_demo_1" placeholder="Input demo" />
</i-form-item>`}}</code></pre>


  <h2>Custom label</h2>
  <div class="demo">
    <i-form-item
      for="input_demo_2"
      desc="This is description of form item"
    >
      <template #label>
        <span class="text-red-500">*</span> Custom label
      </template>
      <i-input id="input_demo_2" placeholder="Input demo" />
    </i-form-item>
  </div>


  <h2>Form Item Attributes</h2>
  <table>
    <thead><tr><th style="text-align: left;">Attribute</th> <th style="text-align: left;">Description</th> <th style="text-align: left;">Type</th> <th style="text-align: left;">Accepted values</th> <th style="text-align: left;">Default</th></tr></thead>
    <tbody>
      <tr>
        <td style="text-align: left;">label</td>
        <td style="text-align: left;">label of form item</td>
        <td style="text-align: left;">string</td>
        <td style="text-align: left;">—</td>
        <td style="text-align: left;">—</td>
      </tr>
      <tr>
        <td style="text-align: left;">desc</td>
        <td style="text-align: left;">description of form item</td>
        <td style="text-align: left;">string</td>
        <td style="text-align: left;">—</td>
        <td style="text-align: left;">—</td>
      </tr>
      <tr>
        <td style="text-align: left;">label-class</td>
        <td style="text-align: left;">class name of label</td>
        <td style="text-align: left;">string</td>
        <td style="text-align: left;">—</td>
        <td style="text-align: left;">—</td>
      </tr>
    </tbody>
  </table>


  <h2>Form Item Slots</h2>
  <table class="w-full">
    <thead>
      <tr>
        <th style="text-align: left;">Name</th>
        <th style="text-align: left;">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="text-align: left;">—</td>
        <td style="text-align: left;">content of Form Item</td>
      </tr>
      <tr>
        <td style="text-align: left;">label</td>
        <td style="text-align: left;">content of label</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import  { defineComponent } from 'vue'

export default defineComponent({
  name: 'FormItem',
  props: {

  },
  data() {
    return {
      code1: `//  app.js
import { IFormItem } from 'ispa-element'

app.component(IFormItem.name, IFormItem)`,
      code2: `//  component.vue
import { IFormItem } from 'ispa-element'

export default {
  components: { IFormItem },
}`,
    }
  },
})
</script>
