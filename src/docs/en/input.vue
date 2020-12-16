<template>
  <div>
    <h1>Input</h1>
    <p>Commonly used input.</p>


    <h3>Global Component</h3>
    <pre class="ispa-code language-javascript"><code>{{ code1 }}</code></pre>
    <h3>Use at Component</h3>
    <pre class="ispa-code language-javascript"><code>{{ code2 }}</code></pre>


    <h2>Basic Usage</h2>
    <p>Let's put a simple input inside your element</p>
    <div class="demo">
      <p>Demo text: <b>{{ demoText }}</b></p>
      <i-input class="max-w-lg" :model-value="demoText" @update:modelValue="demoText = $event" placeholder="Placeholder text" />
    </div>
    <pre class="ispa-code language-html"><code>{{`<i-input :model-value="input" @update:modelValue="input = $event" />`}}</code></pre>
    <div class="tips tips-warning">
      <p>Please Note</p>
      <p>
        Please note that <code>v-model</code> has been changed some stuff from Vue2 to Vue3, in this input you must use <code>@update:modelValue="input = $event"</code> in this element, for more information please click <a href="https://v3.vuejs.org/guide/migration/v-model.html#_3-x-syntax" target="_blank">here</a> to read.
      </p>
    </div>


    <h2>Working with icons</h2>
    <p>Use some icons class name will make your input has more meaning.</p>
    <div class="demo">
      <i-input class="max-w-lg mb-3" icon="fa fa-edit" placeholder="Placeholder text" />
      <i-input class="max-w-lg" icon="fa fa-edit" icon-align="right" placeholder="Placeholder text" />
    </div>
    <pre class="ispa-code language-html"><code>{{`<i-input icon="fa fa-edit" placeholder="Placeholder text" />
<i-input icon="fa fa-edit" icon-align="right" placeholder="Placeholder text" />`}}</code></pre>


    <h2>Disabled status</h2>
    <div class="demo">
      <i-input disabled class="max-w-lg" placeholder="Placeholder text" />
    </div>


    <h2>Validate status</h2>
    <p>Set the validate status by class name <code>is-error</code> and <code>is-success</code></p>
    <div class="demo">
      <i-input class="max-w-lg mb-3" validate="is-error" icon="fa fa-edit" placeholder="Placeholder text" />
      <i-input class="max-w-lg" validate="is-success" icon="fa fa-edit" icon-align="right" placeholder="Placeholder text" />
    </div>
    <pre class="ispa-code language-html"><code>{{`<i-input validate="is-error" icon="fa fa-edit" placeholder="Placeholder text" />
<i-input validate="is-success" icon="fa fa-edit" icon-align="right" placeholder="Placeholder text" />`}}</code></pre>


    <h2>Append and Prepend</h2>
    <p>We currently support append and prepend, but not supported an input inside an append or prepend.</p>
    <div class="demo">
      <i-input class="max-w-lg mb-3" icon="fa fa-link" placeholder="Placeholder text">
        <template #prepend>https://</template>
      </i-input>
      <i-input class="max-w-lg mb-3" validate="is-success" icon="fa fa-edit" placeholder="Placeholder text">
        <template #append>append text</template>
      </i-input>
      <i-input class="max-w-lg" validate="is-success" icon="fa fa-link" placeholder="Placeholder text">
        <template #prepend>https://</template>
        <template #append>append text</template>
      </i-input>
    </div>
    <pre class="ispa-code language-html"><code>{{`<i-input placeholder="Placeholder text">
  <template #prepend>https://</template>
  <template #append>append text</template>
</i-input>`}}</code></pre>


    <h2>Attributes</h2>
    <table>
      <thead><tr><th style="text-align: left;">Attribute</th> <th style="text-align: left;">Description</th> <th style="text-align: left;">Type</th> <th style="text-align: left;">Accepted values</th> <th style="text-align: left;">Default</th></tr></thead>
      <tbody>
        <tr>
          <td style="text-align: left;">type</td>
          <td style="text-align: left;">input type</td>
          <td style="text-align: left;">string</td>
          <td style="text-align: left;">
            <code>text</code> / <code>email</code> / <code>tel</code> / <code>password</code>
          </td>
          <td style="text-align: left;"><code>text</code></td>
        </tr>
      </tbody>
    </table>

    <h2>Events method</h2>
  </div>
</template>

<script>
import  { defineComponent } from 'vue'

export default defineComponent({
  name: 'Input',
  data() {
    return {
      demoText: 'Let\'s edit this text',
      code1: `//  app.js
import { IInput } from 'ispa-element'

app.component(IInput.name, IInput)`,
      code2: `//  component.vue
import { IInput } from 'ispa-element'

export default {
  components: { IInput },
}`,
    }
  },
})
</script>
