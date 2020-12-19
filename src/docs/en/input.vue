<template>
  <h1>Input</h1>
  <p>Commonly used input.</p>


  <h3>Global Component</h3>
  <pre class="ispa-code language-javascript"><code>{{ code1 }}</code></pre>
  <h3>Use at Component</h3>
  <pre class="ispa-code language-javascript"><code>{{ code2 }}</code></pre>


  <h2>Basic Usage</h2>
  <p>Let's put a simple input inside your element</p>
  <div class="demo">
    <p>
      Demo text: <b>{{ demoText }}</b>
    </p>
    <i-input v-model="demoText" class="max-w-lg" placeholder="Placeholder text" />
  </div>
  <pre class="ispa-code language-html"><code>{{`<i-input v-model="demoText" placeholder="Placeholder text" />
<i-input :model-value="demoText" @update:modelValue="demoText = $event" />`}}</code></pre>
  <div class="tips tips-warning">
    <p>Please Note</p>
    <p>
      Please note that <code>v-model</code> has been changed some stuff from Vue2 to Vue3, in this input you must use <code>@update:modelValue="input = $event"</code> when you use <code>model-value</code>, for more information please click <a href="https://v3.vuejs.org/guide/migration/v-model.html#_3-x-syntax" target="_blank">here</a> to read.
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


  <h2>Input Attributes</h2>
  <table>
    <thead><tr><th style="text-align: left;">Attribute</th> <th style="text-align: left;">Description</th> <th style="text-align: left;">Type</th> <th style="text-align: left;">Accepted values</th> <th style="text-align: left;">Default</th></tr></thead>
    <tbody>
      <tr>
        <td style="text-align: left;">type</td>
        <td style="text-align: left;">input type</td>
        <td style="text-align: left;">string</td>
        <td style="text-align: left;">
          <code>text</code> / <code>email</code> / <code>tel</code> / <code>password</code> / <code>number</code>
        </td>
        <td style="text-align: left;"><code>text</code></td>
      </tr>
      <tr>
        <td style="text-align: left;">model-value / v-model</td>
        <td style="text-align: left;">input binding value</td>
        <td style="text-align: left;">string / number</td>
        <td style="text-align: left;">—</td>
        <td style="text-align: left;">—</td>
      </tr>
      <tr>
        <td style="text-align: left;">placeholder</td>
        <td style="text-align: left;">placeholder of Input</td>
        <td style="text-align: left;">string</td>
        <td style="text-align: left;">—</td>
        <td style="text-align: left;">—</td>
      </tr>
      <tr>
        <td style="text-align: left;">autocomplete</td>
        <td style="text-align: left;">same as <code>autocomplete</code> in native input</td>
        <td style="text-align: left;">string</td>
        <td style="text-align: left;"><code>on</code> / <code>off</code></td>
        <td style="text-align: left;"><code>off</code></td>
      </tr>
      <tr>
        <td style="text-align: left;">name</td>
        <td style="text-align: left;">same as <code>name</code> in native input</td>
        <td style="text-align: left;">string</td>
        <td style="text-align: left;">—</td>
        <td style="text-align: left;">—</td>
      </tr>
      <tr>
        <td style="text-align: left;">validate</td>
        <td style="text-align: left;">validate status class name</td>
        <td style="text-align: left;">string</td>
        <td style="text-align: left;"><code>is-success</code> / <code>is-error</code></td>
        <td style="text-align: left;">—</td>
      </tr>
      <tr>
        <td style="text-align: left;">icon</td>
        <td style="text-align: left;">icon class name</td>
        <td style="text-align: left;">string</td>
        <td style="text-align: left;">—</td>
        <td style="text-align: left;">—</td>
      </tr>
      <tr>
        <td style="text-align: left;">icon-align</td>
        <td style="text-align: left;">icon align class name</td>
        <td style="text-align: left;">string</td>
        <td style="text-align: left;"><code>left</code> / <code>right</code></td>
        <td style="text-align: left;"><code>left</code></td>
      </tr>
      <tr>
        <td style="text-align: left;">disabled</td>
        <td style="text-align: left;">disabled status</td>
        <td style="text-align: left;">boolean</td>
        <td style="text-align: left;">—</td>
        <td style="text-align: left;">false</td>
      </tr>
      <tr>
        <td style="text-align: left;">required</td>
        <td style="text-align: left;">required status</td>
        <td style="text-align: left;">boolean</td>
        <td style="text-align: left;">—</td>
        <td style="text-align: left;">false</td>
      </tr>
    </tbody>
  </table>


  <h2>Input slots</h2>
  <table class="w-full">
    <thead>
      <tr>
        <th style="text-align: left;">Name</th>
        <th style="text-align: left;">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="text-align: left;">append</td>
        <td style="text-align: left;">content to prepend before Input</td>
      </tr>
      <tr>
        <td style="text-align: left;">prepend</td>
        <td style="text-align: left;">content to append after Input</td>
      </tr>
    </tbody>
  </table>


  <h2>Input Events</h2>
  <table class="w-full">
    <thead>
      <tr>
        <th style="text-align: left;">Name</th>
        <th style="text-align: left;">Description</th>
        <th style="text-align: left;">Parameters</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="text-align: left;">blur</td>
        <td style="text-align: left;">triggers when Input blurs</td>
        <td>(event: Event)</td>
      </tr>
      <tr>
        <td style="text-align: left;">focus</td>
        <td style="text-align: left;">triggers when Input focuses</td>
        <td>(event: Event)</td>
      </tr>
      <tr>
        <td style="text-align: left;">change</td>
        <td style="text-align: left;">triggers only when the input box loses focus or the user presses Enter</td>
        <td>(value: string | number)</td>
      </tr>
      <tr>
        <td style="text-align: left;">input</td>
        <td style="text-align: left;">triggers when the input value change</td>
        <td>(value: string | number)</td>
      </tr>
      <tr>
        <td style="text-align: left;">clear</td>
        <td style="text-align: left;">triggers when the input cleared by clicking the clear button</td>
        <td>—</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import  { defineComponent } from 'vue'

export default defineComponent({
  name: 'Input',
  data() {
    return {
      demoText: 'Let\'s edit this text', isBlur: false,
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
  methods: {
    testBlur() {
      this.isBlur = !this.isBlur
    },
  },
})
</script>
