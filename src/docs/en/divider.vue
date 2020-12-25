<template>
  <h1>Dividers</h1>
  <p>Commonly used divider.</p>


  <h3>Global Component</h3>
  <pre class="ispa-code language-javascript"><code>{{ code1 }}</code></pre>
  <h3>Use at Component</h3>
  <pre class="ispa-code language-javascript"><code>{{ code2 }}</code></pre>


  <h2>Basic Usage</h2>
  <div class="demo">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
    <i-divider />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
  </div>
  <pre class="ispa-code language-html"><code>{{`...
<i-divider />
...`}}</code></pre>


  <h2>Custom content</h2>
  <div class="demo">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
    <i-divider>Lorem ipsum</i-divider>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
    <i-divider align="center">
      <i class="fa fa-star text-orange-500"></i>
      <i class="fa fa-star text-orange-500 mx-2"></i>
      <i class="fa fa-star text-orange-500"></i>
    </i-divider>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
    <i-divider align="right">Lorem ipsum</i-divider>
  </div>
  <pre class="ispa-code language-html"><code>{{`...
<i-divider />
...`}}</code></pre>


  <h2>Custom themes</h2>
  <p>For more fun, we build more themes that you can handle by yourself with the type you want.</p>
  <div class="demo">
    <i-divider>Default type</i-divider>
    <i-divider type="secondary">Secondary type</i-divider>
    <i-divider type="warning">
      <i class="fa fa-star"></i>
      <i class="fa fa-star mx-2"></i>
      <i class="fa fa-star"></i>
      (Warning type)
    </i-divider>
    <i-divider type="success">
      <i class="fa fa-check-circle"></i>
      Success type
    </i-divider>
    <i-divider type="primary">
      <i class="fa fa-edit"></i>
      Primary type
    </i-divider>
    <i-divider type="info">Info type</i-divider>
    <i-divider type="danger">
      <i class="fa fa-trash-alt"></i>
      (Danger type)
    </i-divider>
  </div>
  <pre class="ispa-code language-html"><code>{{`<i-divider>Default type</i-divider>
<i-divider type="secondary">Secondary type</i-divider>
<i-divider type="success">Success type</i-divider>
<i-divider type="primary">Primary type</i-divider>
<i-divider type="info">Info type</i-divider>
<i-divider type="warning">Warning type</i-divider>
<i-divider type="danger">Danger type</i-divider>`}}</code></pre>


  <h2>Attributes</h2>
  <table>
    <thead><tr><th style="text-align: left;">Attribute</th> <th style="text-align: left;">Description</th> <th style="text-align: left;">Type</th> <th style="text-align: left;">Accepted values</th> <th style="text-align: left;">Default</th></tr></thead>
    <tbody>
      <tr>
        <td style="text-align: left;">align</td>
        <td style="text-align: left;">Align of content</td>
        <td style="text-align: left;">string</td>
        <td style="text-align: left;"><code>left</code> / <code>center</code> / <code>right</code></td>
        <td style="text-align: left;"><code>left</code></td>
      </tr>
      <tr>
        <td style="text-align: left;">type</td>
        <td style="text-align: left;">Type of divider</td>
        <td style="text-align: left;">string</td>
        <td style="text-align: left;"><code>default</code> / <code>secondary</code> / <code>primary</code> / <code>info</code> / <code>success</code> / <code>warning</code> / <code>danger</code></td>
        <td style="text-align: left;"><code>default</code></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import  { defineComponent } from 'vue'

export default defineComponent({
  name: 'Divider',
  props: {

  },
  data() {
    return {

      code1: `//  app.js
import { IDivider } from 'ispa-element'

app.component(IDivider.name, IDivider)`,
      code2: `//  component.vue
import { IDivider } from 'ispa-element'

export default {
  components: { IDivider },
}`,
    }
  },
})
</script>
