<template>
  <div>
    <h1>Button</h1>
    <p>Commonly used button.</p>

    <h3>Global Component</h3>
    <pre class="ispa-code language-javascript"><code>{{ code1 }}</code></pre>
    <h3>Use at Component</h3>
    <pre class="ispa-code language-javascript"><code>{{ code2 }}</code></pre>


    <h2>Basic Usage</h2>
    <div class="demo">
      <i-button class="mr-2 mb-3" type="default">Default</i-button>
      <i-button class="mr-2 mb-3" type="secondary">Secondary</i-button>
      <i-button class="mr-2 mb-3" type="primary">Primary</i-button>
      <i-button class="mr-2 mb-3" type="success">Success</i-button>
      <i-button class="mr-2 mb-3" type="info">Info</i-button>
      <i-button class="mr-2 mb-3" type="warning">Warning</i-button>
      <i-button class="mr-2 mb-3" type="danger">Danger</i-button>

      <hr class="mb-3">
      <i-button plain class="mr-2 mb-3" type="default">Default</i-button>
      <i-button plain class="mr-2 mb-3" type="secondary">Secondary</i-button>
      <i-button plain class="mr-2 mb-3" type="primary">Primary</i-button>
      <i-button plain class="mr-2 mb-3" type="success">Success</i-button>
      <i-button plain class="mr-2 mb-3" type="info">Info</i-button>
      <i-button plain class="mr-2 mb-3" type="warning">Warning</i-button>
      <i-button plain class="mr-2 mb-3" type="danger">Danger</i-button>

      <hr class="mb-3">
      <i-button round class="mr-2 mb-3" type="default">Default</i-button>
      <i-button round class="mr-2 mb-3" type="secondary">Secondary</i-button>
      <i-button round class="mr-2 mb-3" type="primary">Primary</i-button>
      <i-button round class="mr-2 mb-3" type="success">Success</i-button>
      <i-button round class="mr-2 mb-3" type="info">Info</i-button>
      <i-button round class="mr-2 mb-3" type="warning">Warning</i-button>
      <i-button round class="mr-2 mb-3" type="danger">Danger</i-button>

      <hr class="mb-3">
      <i-button flat class="mr-2 mb-3" type="default">Default</i-button>
      <i-button flat class="mr-2 mb-3" type="secondary">Secondary</i-button>
      <i-button flat class="mr-2 mb-3" type="primary">Primary</i-button>
      <i-button flat class="mr-2 mb-3" type="success">Success</i-button>
      <i-button flat class="mr-2 mb-3" type="info">Info</i-button>
      <i-button flat class="mr-2 mb-3" type="warning">Warning</i-button>
      <i-button flat class="mr-2 mb-3" type="danger">Danger</i-button>

      <hr class="mb-3">
      <i-button block type="primary">Block Button</i-button>
    </div>
    <pre class="ispa-code language-html"><code>{{ code3 }}</code></pre>


    <h2>Disabled Button</h2>
    <p>The <code>disabled</code> attribute determines if the button is disabled.</p>
    <div class="demo">
      <i-button disabled class="mr-2 mb-3" type="default">Default</i-button>
      <i-button disabled class="mr-2 mb-3" type="secondary">Secondary</i-button>
      <i-button disabled class="mr-2 mb-3" type="primary">Primary</i-button>
      <i-button disabled class="mr-2 mb-3" type="success">Success</i-button>
      <i-button disabled class="mr-2 mb-3" type="info">Info</i-button>
      <i-button disabled class="mr-2 mb-3" type="warning">Warning</i-button>
      <i-button disabled class="mr-2 mb-3" type="danger">Danger</i-button>

      <hr class="mb-3">
      <i-button disabled plain class="mr-2 mb-3" type="default">Default</i-button>
      <i-button disabled plain class="mr-2 mb-3" type="secondary">Secondary</i-button>
      <i-button disabled plain class="mr-2 mb-3" type="primary">Primary</i-button>
      <i-button disabled plain class="mr-2 mb-3" type="success">Success</i-button>
      <i-button disabled plain class="mr-2 mb-3" type="info">Info</i-button>
      <i-button disabled plain class="mr-2 mb-3" type="warning">Warning</i-button>
      <i-button disabled plain class="mr-2 mb-3" type="danger">Danger</i-button>
    </div>
    <pre class="ispa-code language-html"><code>{{ `<i-button disabled type="primary">Primary</i-button>` }}</code></pre>


    <h2>Loading Button</h2>
    <p>Display a loading state button.</p>
    <div class="demo">
      <i-button loading class="mr-2 mb-3" type="primary">Loading Button</i-button>

      <hr class="mb-3">

      <div class="block mb-2">
        <label for="loading_state">
          <input id="loading_state" class="mr-1" type="checkbox" :checked="loadingState" v-model="loadingState"> Loading: <b>{{ loadingState ? 'true' : 'false' }}</b>
        </label>
      </div>
      <i-button :loading="loadingState" class="mr-2 mb-3" type="primary">Loading Primary</i-button>
      <i-button :loading="loadingState" class="mr-2 mb-3" icon="fa fa-trash-alt" type="danger">Loading with Icon</i-button>
      <i-button :loading="loadingState" class="mr-2 mb-3" icon="fa fa-trash-alt" type="danger" icon-align="right">Loading with Icon Right</i-button>
    </div>
    <pre class="ispa-code language-html"><code>{{ `<i-button loading type="primary">Loading Button</i-button>` }}</code></pre>


    <h2>Icons & Align</h2>
    <p>Use icons to add more meaning to Button. You can use icon alone to save some space, or use it with text.</p>
    <div class="demo">
      <i-button class="mr-2 mb-3" type="primary" icon="fa fa-edit" />
      <i-button class="mr-2 mb-3" type="danger" icon="fa fa-trash-alt" />
      <i-button class="mr-2 mb-3" type="info" icon="fa fa-search">Search</i-button>
      <i-button class="mr-2 mb-3" type="success" icon="fa fa-cloud-upload" icon-align="right">Upload</i-button>
      <i-button loading class="mr-2 mb-3" type="danger" icon="fa fa-save" icon-align="right" />
      <i-button class="mr-2 mb-3" size="sm" type="danger" icon="fa fa-save" icon-align="right" />
      <i-button class="mr-2 mb-3" size="xs" type="danger" icon="fa fa-save" icon-align="right" />
    </div>
    <pre class="ispa-code language-html"><code>{{ `<i-button type="danger" icon="fa fa-trash-alt" />
<i-button type="info" icon="fa fa-search" icon-align="right">Search</i-button>` }}</code></pre>


    <h2>Sizes</h2>
    <p>Besides default size, Button component provides four additional sizes for you to choose among different scenarios.</p>
    <div class="demo">
      <i-button size="xl" class="mr-2 mb-3" type="primary">Size xl</i-button>
      <i-button size="lg" class="mr-2 mb-3" type="primary">Size lg</i-button>
      <i-button size="md" class="mr-2 mb-3" type="primary">Size md (default)</i-button>
      <i-button size="sm" class="mr-2 mb-3" type="primary">Size sm</i-button>
      <i-button size="xs" class="mr-2 mb-3" type="primary">Size xs</i-button>
    </div>
    <pre class="ispa-code language-html"><code>{{ code4 }}</code></pre>


    <h2>Attributes</h2>
    <table><thead><tr><th style="text-align: left;">Attribute</th> <th style="text-align: left;">Description</th> <th style="text-align: left;">Type</th> <th style="text-align: left;">Accepted values</th> <th style="text-align: left;">Default</th></tr></thead> <tbody><tr><td style="text-align: left;">type</td> <td style="text-align: left;">button type</td> <td style="text-align: left;">string</td> <td style="text-align: left;"><code>primary</code> / <code>secondary</code> / <code>success</code> / <code>warning</code> / <code>danger</code> / <code>info</code> / <code>default</code></td> <td style="text-align: left;"><code>default</code></td></tr> <tr><td style="text-align: left;">size</td> <td style="text-align: left;">button size</td> <td style="text-align: left;">string</td> <td style="text-align: left;"><code>xl</code> / <code>lg</code> / <code>md</code> / <code>sm</code> / <code>xs</code></td> <td style="text-align: left;"><code>md</code></td></tr> <tr><td style="text-align: left;">icon</td> <td style="text-align: left;">Icon class name</td> <td style="text-align: left;">string</td> <td style="text-align: left;">—</td> <td style="text-align: left;">—</td></tr> <tr><td style="text-align: left;">icon-loading</td> <td style="text-align: left;">Icon Loading class name</td> <td style="text-align: left;">string</td> <td style="text-align: left;">—</td> <td style="text-align: left;"><code>fa fa-spin fa-spinner</code></td></tr> <tr><td style="text-align: left;">block</td> <td style="text-align: left;">Full width button</td> <td style="text-align: left;">boolean</td> <td style="text-align: left;">—</td> <td style="text-align: left;">false</td></tr> <tr><td style="text-align: left;">loading</td> <td style="text-align: left;">Display loading icon &amp; disabled button</td> <td style="text-align: left;">boolean</td> <td style="text-align: left;">—</td> <td style="text-align: left;">false</td></tr> <tr><td style="text-align: left;">disabled</td> <td style="text-align: left;">Disabled the button</td> <td style="text-align: left;">boolean</td> <td style="text-align: left;">—</td> <td style="text-align: left;">false</td></tr> <tr><td style="text-align: left;">plain</td> <td style="text-align: left;">Determine whether it's a simple plain button</td> <td style="text-align: left;">boolean</td> <td style="text-align: left;">—</td> <td style="text-align: left;">false</td></tr> <tr><td style="text-align: left;">flat</td> <td style="text-align: left;">Determine whether it's a flat button</td> <td style="text-align: left;">boolean</td> <td style="text-align: left;">—</td> <td style="text-align: left;">false</td></tr> <tr><td style="text-align: left;">round</td> <td style="text-align: left;">Determine whether it's a round button</td> <td style="text-align: left;">boolean</td> <td style="text-align: left;">—</td> <td style="text-align: left;">false</td></tr></tbody></table>
  </div>
</template>

<script>
import  { defineComponent } from 'vue'

export default defineComponent({
  name: 'Button',
  props: {

  },
  data() {
    return {
      loadingState: false,

      code1: `//  app.js
import { IButton } from 'ispa-element'

app.component(IButton.name, IButton)`,
      code2: `//  component.vue
import { IButton } from 'ispa-element'

export default {
  components: { IButton },
}`,
      code3: `//  Default
<i-button>Default</i-button>

//  Plain (Primary)
<i-button plain type="primary">Primary</i-button>

//  Round (Success)
<i-button round type="success">Success</i-button>

//  Flat (Info)
<i-button flat type="info">Info</i-button>

//  Block (Danger)
<i-button block type="danger">Danger</i-button>`,
      code4: `<i-button size="xl" type="primary">Size xl</i-button>
<i-button size="lg" type="primary">Size lg</i-button>
<i-button size="md" type="primary">Size md (default)</i-button>
<i-button size="sm" type="primary">Size sm</i-button>
<i-button size="xs" type="primary">Size xs</i-button>`,
    }
  },
})
</script>
