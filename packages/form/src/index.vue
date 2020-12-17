<template>
  <form
    v-bind="attrs"
    action=""
    :class="[
      inline ? 'form-inline' : ''
    ]"
  >
    <slot></slot>
  </form>
</template>

<script lang='ts'>
import { defineComponent, toRefs, reactive, provide } from 'vue'

export default defineComponent({
  name: 'IForm',
  props: {
    /** Label inline with field */
    inline: { type: Boolean, default: false },
    /** Item display inline */
    itemInline: { type: Boolean, default: false },
  },
  setup(props, { attrs, emit }) {
    const iForm = reactive({
      ...toRefs(props),
      emit,
    })

    provide('iForm', iForm)

    return { attrs }
  },
})
</script>
