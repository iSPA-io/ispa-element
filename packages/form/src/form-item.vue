<template>
  <div class="form-group" v-bind="attrs">
    <label
      v-if="label || slots.label"
      :for="labelFor"
      :class="[
        labelClass
      ]"
    >
      <template v-if="!slots.label">{{ label }}</template>
      <slot v-else name="label"></slot>
    </label>
    <slot name="default"></slot>
    <p
      v-if="desc"
      class="mt-2 text-xs text-gray-500"
      v-html="desc"
    ></p>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IFormItem',
  props: {
    /** Label of Input */
    label: { type: String, default: null },
    /** Description text */
    desc: { type: String, default: null },
    /** Label class name */
    labelClass: { type: String, default: null },
    /** Label for */
    for: { type: String, default: null },
  },
  setup(props, { attrs, slots }) {
    // const ispaForm = inject('ispaForm')

    // console.log(ispaForm);

    return { attrs, slots }
  },
  computed: {
    labelFor() {
      return this.for
    },
  },
})
</script>
<style>
.form-group {
  @apply block mb-3;
}
.form-group > label {
  @apply block text-base font-medium text-gray-700;
}
</style>
