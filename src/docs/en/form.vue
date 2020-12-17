<template>
  <div>
    <h1>Form</h1>
    <p>
      Commonly used form. We will use this form element with <code>i-form-item</code>, <code>i-input</code> and more element.
    </p>


    <h3>Global Component</h3>
    <pre class="ispa-code language-javascript"><code>{{ code1 }}</code></pre>
    <h3>Use at Component</h3>
    <pre class="ispa-code language-javascript"><code>{{ code2 }}</code></pre>


    <h2>Basic usage</h2>
    <p>Be sure to use an appropriate type on all inputs (e.g., <code>email</code> for email address or <code>number</code> for numerical information) to take advantage of newer input controls like email verification, number selection, and more.</p>
    <div class="demo">
      <div v-if="submitted" class="block border-b border-gray-500 pb-3 mb-4">Form Submitted: {{ submitted }}</div>
      <i-form class="max-w-xl">
        <i-form-item for="form_fullname" label="Fullname" :desc="`Input value: ${ form.fullname }`">
          <i-input id="form_fullname" v-model="form.fullname" icon="fa fa-user" placeholder="Please input your fullname" />
        </i-form-item>
        <i-form-item for="form_email" label="Email" :desc="`Input value: ${ form.email }`">
          <i-input id="form_email" v-model="form.email" icon="fa fa-envelope" placeholder="Please input your email address" />
        </i-form-item>
        <i-form-item for="form_website" label="Website" :desc="`Input value: ${ form.website }`">
          <i-input id="form_website" v-model="form.website" icon="fa fa-link" placeholder="Please input your website address">
            <template #prepend>https://</template>
          </i-input>
        </i-form-item>
        <div class="block text-right">
          <i-button icon="fa fa-ban">Cancel</i-button>
          <i-button icon="fa fa-save" type="primary" class="ml-1" @click="submitForm">Submit</i-button>
        </div>
      </i-form>
    </div>
    <pre class="ispa-code language-html"><code>{{`<template>
  <i-form>
    <i-form-item for="form_fullname" label="Fullname">
      <i-input id="form_fullname" v-model="form.fullname" icon="fa fa-user" placeholder="Please input your fullname" />
    </i-form-item>
    <i-form-item for="form_email" label="Email">
      <i-input id="form_email" v-model="form.email" icon="fa fa-envelope" placeholder="Please input your email address" />
    </i-form-item>
    <div class="block text-right">
      <i-button icon="fa fa-ban">Cancel</i-button>
      <i-button icon="fa fa-save" type="primary" class="ml-1" @click="submitForm">Submit</i-button>
    </div>
  </i-form>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          fullname: null,
          email: null,
        }
      }
    },
    methods: {
      submitForm() {
        console.log(this.form)
      }
    }
  }
</script>`}}</code></pre>


    <h2>Form Attributes</h2>
    <table>
      <thead><tr><th style="text-align: left;">Attribute</th> <th style="text-align: left;">Description</th> <th style="text-align: left;">Type</th> <th style="text-align: left;">Accepted values</th> <th style="text-align: left;">Default</th></tr></thead>
      <tbody>
      </tbody>
    </table>
  </div>
</template>

<script>
import  { defineComponent } from 'vue'

export default defineComponent({
  name: 'Form',
  data() {
    return {
      submitted: null,
      form: {
        fullname: null, email: null, website: null,
      },
      code1: `//  app.js
import { IForm } from 'ispa-element'

app.component(IForm.name, IForm)`,
      code2: `//  component.vue
import { IForm } from 'ispa-element'

export default {
  components: { IForm },
}`,
    }
  },
  methods: {
    submitForm() {
      this.submitted = this.form

      setTimeout(() => {
        this.submitted = null
      }, 3000)
    },
  },
})
</script>
