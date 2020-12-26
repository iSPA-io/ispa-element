<template>
  <form
    v-bind="attrs"
    action=""
    :class="[
      inline ? 'form-inline' : ''
    ]"
  >
    <slot name="default"></slot>
  </form>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
// , toRefs, reactive, provide

// import mitt from 'mitt'

export default defineComponent({
  name: 'IForm',
  props: {
    /** Label inline with field */
    inline: { type: Boolean, default: false },
    /** Item display inline */
    itemInline: { type: Boolean, default: false },
  },
  setup(props, { attrs }) {
    // const formMitt = mitt()

    // const IForm = reactive({
    //   formMitt,
    //   ...toRefs(props),
    //   emit,
    // })

    // provide('ispaForm', IForm)

    return { attrs }
  },
})
</script>
