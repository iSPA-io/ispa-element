<template>
  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
    <svg v-if="dot" class="-ml-0.5 mr-1.5 h-2 w-2 text-indigo-400" fill="currentColor" viewBox="0 0 8 8">
      <circle cx="4" cy="4" r="3" />
    </svg>
    <slot name="default"></slot>
    <button v-if="dismiss" type="button" class="flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none focus:bg-indigo-500 focus:text-white">
      <span class="sr-only">Remove small option</span>
      <svg class="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
        <path stroke-linecap="round" stroke-width="1.5" d="M1 1l6 6m0-6L1 7" />
      </svg>
    </button>
  </span>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

export default defineComponent({
  name: 'IBadge',
  props: {
    /** Type of Badge */
    type: { type: String as PropType<'default' | 'success' | 'danger' | 'primary' | 'warning' | 'info'>, default: 'default' },
    /** Dot badge */
    dot: { type: Boolean, default: false },
    dotColor: { type: String, default: null },
    /** Dismiss button */
    dismiss: { type: Boolean, default: false },
  },
  setup(props) {
    // init here
  },
})
</script>

<style>
</style>
