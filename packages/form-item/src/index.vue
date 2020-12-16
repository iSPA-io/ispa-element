<template>
  <div class="form-group">
    <label
      v-if="label"
      :for="labelFor"
      :class="[
        'block text-md font-medium text-gray-700',
        labelClass
      ]"
    >
      {{ label }}
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
</style>
