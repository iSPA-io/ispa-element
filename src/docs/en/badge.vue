<template>
  <h1>Badge</h1>
  <p>Commonly used badge.</p>

  <h3>Global Component</h3>
  <pre class="ispa-code language-javascript"><code>{{ code1 }}</code></pre>
  <h3>Use at Component</h3>
  <pre class="ispa-code language-javascript"><code>{{ code2 }}</code></pre>


  <h2>Basic Usage</h2>
  <div class="demo space-x-2">
    <i-badge>Default</i-badge>
    <i-badge type="secondary">Secondary</i-badge>
    <i-badge type="primary">Primary</i-badge>
    <i-badge type="success">Success</i-badge>
    <i-badge type="info">Info</i-badge>
    <i-badge type="warning">Warning</i-badge>
    <i-badge type="danger">Danger</i-badge>
  </div>
  <pre class="ispa-code language-html"><code>{{`<i-badge>Default</i-badge>
<i-badge type="secondary">Secondary</i-badge>
<i-badge type="primary">Primary</i-badge>
<i-badge type="success">Success</i-badge>
<i-badge type="info">Info</i-badge>
<i-badge type="warning">Warning</i-badge>
<i-badge type="danger">Danger</i-badge>`}}</code></pre>


  <h2>Sizes</h2>
  <div class="demo space-x-2">
    <i-badge size="sm" type="danger">Small (sm)</i-badge>
    <i-badge type="danger">Default (md)</i-badge>
    <i-badge size="lg" type="danger">Large (lg)</i-badge>
  </div>
  <pre class="ispa-code language-html"><code>{{`<i-badge size="sm">Small (sm)</i-badge>
<i-badge>Default (md)</i-badge>
<i-badge size="lg">Large (lg)</i-badge>`}}</code></pre>


  <h2>Dismiss Button</h2>
  <div class="demo space-x-2">
    <i-badge size="sm" type="success" dismiss>Badge</i-badge>
    <i-badge type="success" dismiss>Badge</i-badge>
    <i-badge size="lg" type="success" dismiss>Badge</i-badge>
  </div>
  <pre class="ispa-code language-html"><code>{{`<i-badge @click="YourMethod" dismiss>Badge</i-badge>`}}</code></pre>


  <h2>Dots and custom dot's color</h2>
  <div class="demo space-x-2">
    <i-badge size="sm" dot>Badge</i-badge>
    <i-badge dot>Badge</i-badge>
    <i-badge size="lg" dot>Badge</i-badge>
  </div>
  <pre class="ispa-code language-html"><code>{{`<i-badge @click="YourMethod" dismiss>Badge</i-badge>`}}</code></pre>
  <p>With custom class</p>
  <div class="demo space-x-2">
    <i-badge dot dot-class="text-emerald-600">Done</i-badge>
    <i-badge dot dot-class="text-red-500">Bugs</i-badge>
    <i-badge dot dot-class="text-indigo-500">Accessibility</i-badge>
  </div>
  <pre class="ispa-code language-html"><code>{{`<i-badge dot dot-class="text-red-500">Bugs</i-badge>`}}</code></pre>


  <h2>Attributes</h2>
  <table>
    <thead><tr><th style="text-align: left;">Attribute</th> <th style="text-align: left;">Description</th> <th style="text-align: left;">Type</th> <th style="text-align: left;">Accepted values</th> <th style="text-align: left;">Default</th></tr></thead>
    <tbody>
      <tr>
        <td style="text-align: left;">type</td>
        <td style="text-align: left;">badge type</td>
        <td style="text-align: left;">string</td>
        <td style="text-align: left;">
          <code>default</code> / <code>secondary</code> / <code>primary</code> / <code>success</code> / <code>info</code> / <code>warning</code> / <code>danger</code>
        </td>
        <td style="text-align: left;"><code>default</code></td>
      </tr>
      <tr>
        <td style="text-align: left;">size</td>
        <td style="text-align: left;">Size of badge</td>
        <td style="text-align: left;">string</td>
        <td style="text-align: left;"><code>sm</code> / <code>md</code> / <code>lg</code></td>
        <td style="text-align: left;"><code>md</code></td>
      </tr>
      <tr>
        <td style="text-align: left;">dismiss</td>
        <td style="text-align: left;">show dismiss button</td>
        <td style="text-align: left;">boolean</td>
        <td style="text-align: left;">—</td>
        <td style="text-align: left;">false</td>
      </tr>
      <tr>
        <td style="text-align: left;">dot</td>
        <td style="text-align: left;">show dot</td>
        <td style="text-align: left;">boolean</td>
        <td style="text-align: left;">—</td>
        <td style="text-align: left;">false</td>
      </tr>
      <tr>
        <td style="text-align: left;">dot-class</td>
        <td style="text-align: left;">custom dot class</td>
        <td style="text-align: left;">string</td>
        <td style="text-align: left;">—</td>
        <td style="text-align: left;">—</td>
      </tr>
    </tbody>
  </table>


  <h2>Events</h2>
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
        <td style="text-align: left;">click</td>
        <td style="text-align: left;">click trigger only use for dismiss button</td>
        <td>event</td>
      </tr>
    </tbody>
  </table>
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
