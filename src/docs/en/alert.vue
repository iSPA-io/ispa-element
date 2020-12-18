<template>
  <h1>Alert</h1>
  <p>Commonly used alert. Default icons used from <a href="https://heroicons.com/" target="_blank" title="Heroicons">Heroicons</a>.</p>

  <h3>Global Component</h3>
  <pre class="ispa-code language-javascript"><code>{{ code1 }}</code></pre>
  <h3>Use at Component</h3>
  <pre class="ispa-code language-javascript"><code>{{ code2 }}</code></pre>


  <h2>Basic Usage</h2>
  <div class="demo">
    <i-alert>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
    </i-alert>
    <i-alert type="info">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
    </i-alert>
    <i-alert type="success">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
    </i-alert>
    <i-alert type="warning">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
    </i-alert>
    <i-alert type="danger">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
    </i-alert>
  </div>
  <pre class="ispa-code language-html"><code>{{`<i-alert>default message</i-alert>
<i-alert type="info">...</i-alert>
<i-alert type="success">...</i-alert>
<i-alert type="warning">...</i-alert>
<i-alert type="danger">...</i-alert>`}}</code></pre>


  <h2>Working with custom icons / No icon</h2>
  <p>If you wish use icon by your own, you can put your <code>icon class name</code>. If you don't, just use <code>no-icon</code></p>
  <div class="demo">
    <i-alert type="success" icon="fa fa-badge-check">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
    </i-alert>
    <i-alert type="success" no-icon>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
    </i-alert>
  </div>
  <pre class="ispa-code language-html"><code>{{`<i-alert type="success" icon="fa fa-badge-check">...</i-alert>
<i-alert type="success" no-icon>...</i-alert>`}}</code></pre>

  <div class="tips">
    <p>Hack tips</p>
    <p>You can put more class name inside <code>icon=""</code> to modify icon color or more things.</p>
  </div>
  <div class="demo">
    <i-alert type="success" icon="fa fa-badge-check text-xl text-rose-700">...</i-alert>
  </div>
  <pre class="ispa-code language-html"><code>{{`<i-alert type="success" icon="fa fa-badge-check text-xl text-rose-700">...</i-alert>`}}</code></pre>


  <h2>Working with Title / slots Title</h2>
  <div class="demo">
    <i-alert title="Order completed">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
    </i-alert>
    <i-alert type="info">
      <template #title>
        <span class="text-lime-600">Required</span> text-lime-600 text
      </template>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
    </i-alert>
  </div>
  <pre class="ispa-code language-html"><code>{{`<i-alert title="Order completed">
  ...
</i-alert>
<i-alert type="info">
  <template #title>
    <span class="text-lime-600">Required</span> text-lime-600 text
  </template>
  ...
</i-alert>`}}</code></pre>


  <h2>Working with accent border</h2>
  <div class="demo">
    <i-alert accent>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
    </i-alert>
    <i-alert accent type="info">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
    </i-alert>
    <i-alert accent type="success">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
    </i-alert>
    <i-alert accent type="warning">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
    </i-alert>
    <i-alert accent type="danger">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
    </i-alert>
  </div>
  <pre class="ispa-code language-html"><code>{{`<i-alert accent>default message</i-alert>
<i-alert accent type="info">...</i-alert>
<i-alert accent type="success">...</i-alert>
<i-alert accent type="warning">...</i-alert>
<i-alert accent type="danger">...</i-alert>`}}</code></pre>


  <h2>Working with Dismissable / Auto Dismiss</h2>
  <div class="demo">
    <i-alert dismiss>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</i-alert>

    <i-button v-if="!closeStatusDemo" @click="startAutoDismiss">
      Click to start demo
      <span v-if="autoDismiss && !closedStt" class="text-cyan-500"> (running) </span>
      <span v-if="closedStt" class="text-cyan-500"> (done) </span>
    </i-button>

    <div v-if="!closeStatusDemo" class="block border-b border-gray-500 pb-3 mb-4">Alert will auto close after 5 second. Status: <b class="text-cyan-500">{{ closedStt ? 'true' : 'false' }}</b></div>
    <i-alert :show="alertShow" :auto-dismiss="autoDismiss" type="danger" @close="closedStatus">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</i-alert>
  </div>
  <pre class="ispa-code language-html"><code>{{`<i-alert dismiss>Show dismiss button.</i-alert>
<i-alert dismiss auto-dismiss>Auto dismiss after 5 seconds.</i-alert>`}}</code></pre>
  <div class="tips">
    <p>Note</p>
    <p><code>auto-dismiss</code> not required <code>dismiss</code> attribute to work</p>
  </div>


  <h2>Add more button anchor callback / slots href</h2>
  <div class="demo">
    <i-alert type="success" title="Order completed" href="https://ispa.io" hrefText="Click for more" hrefTarget="_blank" dismiss>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
    </i-alert>
    <i-alert type="success" title="Order completed" dismiss>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
      <template #href>
        <a href="/en/component/alert" title="Click for more">
          <span>Click for more </span>
          <i class="fa fa-long-arrow-right"></i>
        </a>
      </template>
    </i-alert>
  </div>
  <pre class="ispa-code language-html"><code>{{`<i-alert type="success" title="Order completed" href="/en/component/alert" href-text="Click for more" href-target="_blank" dismiss>...</i-alert>
<i-alert type="success" title="Order completed" dismiss>
  ...
  <template #href>
    <a href="/en/component/alert" title="Click for more">
      <span>Click for more </span>
      <i class="fa fa-long-arrow-right"></i>
    </a>
  </template>
</i-alert>`}}</code></pre>



  <h2>Attributes</h2>
  <table>
    <thead><tr><th style="text-align: left;">Attribute</th> <th style="text-align: left;">Description</th> <th style="text-align: left;">Type</th> <th style="text-align: left;">Accepted values</th> <th style="text-align: left;">Default</th></tr></thead>
    <tbody>
      <tr>
        <td style="text-align: left;">type</td>
        <td style="text-align: left;">alert type</td>
        <td style="text-align: left;">string</td>
        <td style="text-align: left;">
          <code>default</code> / <code>success</code> / <code>info</code> / <code>warning</code> / <code>danger</code>
        </td>
        <td style="text-align: left;"><code>default</code></td>
      </tr>
      <tr>
        <td style="text-align: left;">show</td>
        <td style="text-align: left;">alert showing status</td>
        <td style="text-align: left;">boolean</td>
        <td style="text-align: left;">—</td>
        <td style="text-align: left;">true</td>
      </tr>
      <tr>
        <td style="text-align: left;">title</td>
        <td style="text-align: left;">title of Alert</td>
        <td style="text-align: left;">string</td>
        <td style="text-align: left;">—</td>
        <td style="text-align: left;">—</td>
      </tr>
      <tr>
        <td style="text-align: left;">dismiss</td>
        <td style="text-align: left;">show dismiss button</td>
        <td style="text-align: left;">boolean</td>
        <td style="text-align: left;">—</td>
        <td style="text-align: left;">true</td>
      </tr>
      <tr>
        <td style="text-align: left;">dismiss-text</td>
        <td style="text-align: left;">Dismiss text (only apply when <code>href</code> attribute applied)</td>
        <td style="text-align: left;">string</td>
        <td style="text-align: left;">—</td>
        <td style="text-align: left;"><code>dismiss</code></td>
      </tr>
      <tr>
        <td style="text-align: left;">auto-dismiss</td>
        <td style="text-align: left;">Turn on auto dismiss (auto close after 5 seconds)</td>
        <td style="text-align: left;">boolean</td>
        <td style="text-align: left;">—</td>
        <td style="text-align: left;">false</td>
      </tr>
      <tr>
        <td style="text-align: left;">href</td>
        <td style="text-align: left;">Url to click to go</td>
        <td style="text-align: left;">string</td>
        <td style="text-align: left;">—</td>
        <td style="text-align: left;">—</td>
      </tr>
      <tr>
        <td style="text-align: left;">href-text</td>
        <td style="text-align: left;">Text display on href anchor</td>
        <td style="text-align: left;">string</td>
        <td style="text-align: left;">—</td>
        <td style="text-align: left;"><i class="fa fa-long-arrow-right"></i></td>
      </tr>
      <tr>
        <td style="text-align: left;">href-target</td>
        <td style="text-align: left;">action open of href anchor</td>
        <td style="text-align: left;">string</td>
        <td style="text-align: left;">—</td>
        <td style="text-align: left;"><code>_self</code></td>
      </tr>
      <tr>
        <td style="text-align: left;">accent</td>
        <td style="text-align: left;">Display left border of alert box</td>
        <td style="text-align: left;">boolean</td>
        <td style="text-align: left;">—</td>
        <td style="text-align: left;">false</td>
      </tr>
      <tr>
        <td style="text-align: left;">icon</td>
        <td style="text-align: left;">Icon class name</td>
        <td style="text-align: left;">string</td>
        <td style="text-align: left;">—</td>
        <td style="text-align: left;">—</td>
      </tr>
      <tr>
        <td style="text-align: left;">no-icon</td>
        <td style="text-align: left;">Hide icon of alert</td>
        <td style="text-align: left;">boolean</td>
        <td style="text-align: left;">—</td>
        <td style="text-align: left;">false</td>
      </tr>
    </tbody>
  </table>


  <h2>Alert slots</h2>
  <table class="w-full">
    <thead>
      <tr>
        <th style="text-align: left;">Name</th>
        <th style="text-align: left;">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="text-align: left;">title</td>
        <td style="text-align: left;">custom title content</td>
      </tr>
      <tr>
        <td style="text-align: left;">href</td>
        <td style="text-align: left;">custom href content</td>
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
        <td style="text-align: left;">close</td>
        <td style="text-align: left;">fires when alert is closed</td>
        <td></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import  { defineComponent } from 'vue'

export default defineComponent({
  name: 'Alert',
  props: {

  },
  data() {
    return {
      closeStatus: null, alertShow: true, closedStt: false, closeStatusDemo: false, autoDismiss: false,
      code1: `//  app.js
import { IAlert } from 'ispa-element'

app.component(IAlert.name, IAlert)`,
      code2: `//  component.vue
import { IAlert } from 'ispa-element'

export default {
  components: { IAlert },
}`,

    }
  },
  methods: {
    startAutoDismiss() {
      this.autoDismiss = true
      this.alertShow = true
      this.closedStt = false
      this.closeStatusDemo = false
    },
    closedStatus() {
      this.closedStt = true

      setTimeout(() => {
        this.closeStatusDemo = true
      }, 5000)
    },
    closeAlert() {
      this.closeStatus = 'Closed'

      setTimeout(() => {
        this.closeStatus = null
      }, 3000)
    },
  },
})
</script>
