<template>
  <div class="i-divider" :class="type" v-bind="attrs">
    <div class="i-divider-line"><div></div></div>
    <div class="i-divider-content" :class="['i-' + align]">
      <span>
        <slot name="default"></slot>
      </span>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

export default defineComponent({
  name: 'IDivider',
  props: {
    /** Align of content */
    align: {
      type: String as PropType<'left' | 'center' | 'right'>,
      default: 'left',
      validator: (val: string) => ['left', 'center', 'right'].includes(val),
    },
    /** Type to chill */
    type: {
      type: String as PropType<'default' | 'secondary' | 'primary' | 'info' | 'success' | 'warning' | 'danger'>,
      default: 'default',
      validator: (val: string) => ['default', 'secondary', 'primary', 'info', 'success', 'warning', 'danger'].includes(val),
    },
  },
  setup(props, { attrs }) {

    return { attrs }
  },
})
</script>

<style>
.i-divider {
  @apply relative my-4;
}
.i-divider .i-divider-line {
  @apply absolute inset-0 flex items-center;
}
.i-divider .i-divider-line > div {
  @apply w-full border-l-0 border-r-0 border-b-0 border-t border-solid border-gray-300;
}
.i-divider .i-divider-content {
  @apply relative flex text-sm;
}
.i-divider .i-divider-content > span {
  @apply mx-3 px-2 bg-white text-gray-500;
}
.i-divider .i-divider-content.i-left {
  @apply justify-start;
}
.i-divider .i-divider-content.i-center {
  @apply justify-center;
}
.i-divider .i-divider-content.i-right {
  @apply justify-end;
}

/** Themes */
.i-divider.secondary .i-divider-line > div {
  @apply border-gray-400;
}
.i-divider.secondary .i-divider-content > span {
  @apply text-gray-600;
}
.i-divider.primary .i-divider-line > div {
  @apply border-lightBlue-300;
}
.i-divider.primary .i-divider-content > span {
  @apply text-lightBlue-600;
}
.i-divider.success .i-divider-line > div {
  @apply border-green-300;
}
.i-divider.success .i-divider-content > span {
  @apply text-green-600;
}
.i-divider.info .i-divider-line > div {
  @apply border-cyan-300;
}
.i-divider.info .i-divider-content > span {
  @apply text-cyan-600;
}
.i-divider.warning .i-divider-line > div {
  @apply border-yellow-300;
}
.i-divider.warning .i-divider-content > span {
  @apply text-yellow-600;
}
.i-divider.danger .i-divider-line > div {
  @apply border-red-300;
}
.i-divider.danger .i-divider-content > span {
  @apply text-red-600;
}
</style>
