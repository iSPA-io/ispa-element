<template>
  <h1>Switch</h1>
  <p>Commonly used switch. Default icons used from <a href="https://heroicons.com/" target="_blank" title="Heroicons">Heroicons</a>.</p>

  <h3>Global Component</h3>
  <pre class="ispa-code language-javascript"><code>{{ code1 }}</code></pre>
  <h3>Use at Component</h3>
  <pre class="ispa-code language-javascript"><code>{{ code2 }}</code></pre>


  <h2>Basic usage</h2>
  <div class="demo">
    <i-switch v-model="form.demo1" class="mr-2" />
    <i-switch v-model="form.demo1" class="mr-2" color-off="secondary" />
  </div>
  <pre class="ispa-code language-html"><code>{{`<i-switch v-model="switchValue" />
<i-switch v-model="switchValue" color-off="secondary" />`}}</code></pre>


  <h2>Extended value types</h2>
  <div class="demo">
    <div class="block pb-2 mb-2 border-b">
      Value of model: {{ form.switchValue }}
    </div>
    <i-switch v-model="form.switchValue" value-on="1" value-off="100" />
  </div>
  <pre class="ispa-code language-html"><code>{{`<i-switch v-model="switchValue" value-on="1" value-off="100" />`}}</code></pre>


  <h2>Working with icons class name / No icons</h2>
  <p>Icons are hidden by default, to enable icon, please use <code>show-icon</code></p>
  <div class="demo">
    <i-switch v-model="form.demo4" class="mr-2" />
    <i-switch v-model="form.demo4" show-icon class="mr-2" color-off="secondary" />
    <i-switch v-model="form.demo4" show-icon icon-off="fa fa-ban" icon-on="fa fa-plus" class="mr-2" />
    <i-switch v-model="form.demo4" show-icon icon-off="fa fa-trash-alt" icon-on="fa fa-eye" class="mr-2" color-off="danger" />
  </div>
  <pre class="ispa-code language-html"><code>{{`//  No icon
<i-switch v-model="switchValue" />
//  Show icon by default
<i-switch v-model="switchValue" show-icon />
//  Custom ON icon
<i-switch v-model="switchValue" show-icon icon-on="fa fa-plus" />
//  Custom OFF icon
<i-switch v-model="switchValue" show-icon icon-off="fa fa-trash-alt" />`}}</code></pre>


  <h2>Sizes</h2>
  <p>We used 3 sizes that you can choose: <code>big</code>, <code>default</code> (let blank), <code>small</code>.</p>
  <div class="demo">
    <i-switch v-model="form.demo3" show-icon size="big" class="mr-2" color-off="danger" />
    <i-switch v-model="form.demo3" show-icon class="mr-2" color-on="violet" />
    <i-switch v-model="form.demo3" show-icon size="small" class="mr-2" color-off="secondary" />
  </div>
  <pre class="ispa-code language-html"><code>{{`<i-switch v-model="switchValue" size="big" />
<i-switch v-model="switchValue" />
<i-switch v-model="switchValue" size="small" />`}}</code></pre>


  <h2>Disabled</h2>
  <div class="demo">
    <i-switch disabled class="mr-2" />
  </div>
  <pre class="ispa-code language-html"><code>{{`<i-switch v-model="switchValue" disabled />`}}</code></pre>


  <h2>Label and special Input style</h2>
  <div class="demo">
    <i-switch v-model="form.demo2" show-icon class="mr-2" title="Available to hire" desc="Nulla amet tempus sit accumsan. Aliquet turpis sed sit lacinia." />
    <i-divider />
    <i-switch v-model="form.demo2" show-icon class="max-w-xl mx-auto" title="Available to hire" desc="Nulla amet tempus sit accumsan. Aliquet turpis sed sit lacinia." float="right" />
    <i-divider />
    <i-switch v-model="form.demo2" show-icon class="mr-2" title="Available to hire" desc="Nulla amet tempus sit accumsan. Aliquet turpis sed sit lacinia." text-on="Enable" text-off="Disable" />
  </div>
  <pre class="ispa-code language-html"><code>{{`//  Special title and descriptions with float=left
<i-switch v-model="switchValue" title="Available to hire" desc="..." />

//  Special title and descriptions with float=right and centered
<i-switch v-model="switchValue" class="max-w-xl mx-auto" title="Available to hire" desc="..." float="right" />

//  Special title and descriptions with textOn and textOff
<i-switch v-model="switchValue" title="Available to hire" desc="..." text-on="Enable" text-off="Disable" />`}}</code></pre>


  <h2>Working with themes</h2>
  <p>We now support only these themes tag below</p>
  <div class="demo">
    <i-switch color-off="default" class="mr-2" />
    <i-switch color-off="secondary" class="mr-2" />
    <i-switch color-off="success" class="mr-2" />
    <i-switch color-off="primary" class="mr-2" />
    <i-switch color-off="info" class="mr-2" />
    <i-switch color-off="warning" class="mr-2" />
    <i-switch color-off="danger" class="mr-2" />
    <i-switch color-off="violet" class="mr-2" />
    <i-switch color-off="pink" class="mr-2" />
  </div>
  <pre class="ispa-code language-html"><code>{{`<i-switch color-off="default" />
<i-switch color-off="secondary" />
<i-switch color-off="success" />
<i-switch color-off="primary" />
<i-switch color-off="info" />
<i-switch color-off="warning" />
<i-switch color-off="danger" />
<i-switch color-off="violet" />
<i-switch color-off="pink" />`}}</code></pre>


  <h2>Attributes</h2>
  <table>
    <thead><tr><th style="text-align: left;">Attribute</th> <th style="text-align: left;">Description</th> <th style="text-align: left;">Type</th> <th style="text-align: left;">Accepted values</th> <th style="text-align: left;">Default</th></tr></thead>
    <tbody>
      <tr>
        <td style="text-align: left;">model-value / v-model</td>
        <td style="text-align: left;">switch binding value</td>
        <td style="text-align: left;">boolean /string / number</td>
        <td style="text-align: left;">—</td>
        <td style="text-align: left;">—</td>
      </tr>
      <tr>
        <td style="text-align: left;">value-on</td>
        <td style="text-align: left;">switch value when in <code>on</code> state</td>
        <td style="text-align: left;">boolean /string / number</td>
        <td style="text-align: left;">—</td>
        <td style="text-align: left;">—</td>
      </tr>
      <tr>
        <td style="text-align: left;">value-off</td>
        <td style="text-align: left;">switch value when in <code>off</code> state</td>
        <td style="text-align: left;">boolean /string / number</td>
        <td style="text-align: left;">—</td>
        <td style="text-align: left;">—</td>
      </tr>
      <tr>
        <td style="text-align: left;">color-on</td>
        <td style="text-align: left;">background color when in <code>on</code> state</td>
        <td style="text-align: left;">string</td>
        <td style="text-align: left;">—</td>
        <td style="text-align: left;"><code>success</code></td>
      </tr>
      <tr>
        <td style="text-align: left;">color-off</td>
        <td style="text-align: left;">background color when in <code>off</code> state</td>
        <td style="text-align: left;">string</td>
        <td style="text-align: left;">—</td>
        <td style="text-align: left;"><code>default</code></td>
      </tr>
      <tr>
        <td style="text-align: left;">show-icon</td>
        <td style="text-align: left;">Show icon of state</td>
        <td style="text-align: left;">boolean</td>
        <td style="text-align: left;">—</td>
        <td style="text-align: left;">false</td>
      </tr>
      <tr>
        <td style="text-align: left;">icon-on</td>
        <td style="text-align: left;">icon class name when in <code>on</code> state</td>
        <td style="text-align: left;">string</td>
        <td style="text-align: left;">—</td>
        <td style="text-align: left;">—</td>
      </tr>
      <tr>
        <td style="text-align: left;">icon-off</td>
        <td style="text-align: left;">icon class name when in <code>off</code> state</td>
        <td style="text-align: left;">string</td>
        <td style="text-align: left;">—</td>
        <td style="text-align: left;">—</td>
      </tr>
      <tr>
        <td style="text-align: left;">title</td>
        <td style="text-align: left;">Title of special template</td>
        <td style="text-align: left;">string</td>
        <td style="text-align: left;">—</td>
        <td style="text-align: left;">—</td>
      </tr>
      <tr>
        <td style="text-align: left;">desc</td>
        <td style="text-align: left;">Description text of special template</td>
        <td style="text-align: left;">string</td>
        <td style="text-align: left;">—</td>
        <td style="text-align: left;">—</td>
      </tr>
      <tr>
        <td style="text-align: left;">text-on</td>
        <td style="text-align: left;">Text display when in <code>on</code> state</td>
        <td style="text-align: left;">string</td>
        <td style="text-align: left;">—</td>
        <td style="text-align: left;">—</td>
      </tr>
      <tr>
        <td style="text-align: left;">text-off</td>
        <td style="text-align: left;">Text display when in <code>off</code> state</td>
        <td style="text-align: left;">string</td>
        <td style="text-align: left;">—</td>
        <td style="text-align: left;">—</td>
      </tr>
      <tr>
        <td style="text-align: left;">float</td>
        <td style="text-align: left;">Float button when use special template</td>
        <td style="text-align: left;">string</td>
        <td style="text-align: left;"><code>left</code> / <code>right</code></td>
        <td style="text-align: left;"><code>left</code></td>
      </tr>
      <tr>
        <td style="text-align: left;">size</td>
        <td style="text-align: left;">Size of switch</td>
        <td style="text-align: left;">string</td>
        <td style="text-align: left;"><code>small</code> / <code>big</code></td>
        <td style="text-align: left;">—</td>
      </tr>
      <tr>
        <td style="text-align: left;">disabled</td>
        <td style="text-align: left;">Disabled switch</td>
        <td style="text-align: left;">boolean</td>
        <td style="text-align: left;">—</td>
        <td style="text-align: left;">false</td>
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
        <td style="text-align: left;">change</td>
        <td style="text-align: left;">triggers only when the switch change value</td>
        <td>(value: boolean | string | number)</td>
      </tr>
    </tbody>
  </table>
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
        demo1: false, demo2: false, demo3: false, demo4: false, demo5: false,
        switchValue: false,
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
