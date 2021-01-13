<template>
  <span
    class="i-badge"
    :class="[
      'i-' + size,
      'i-' + type,
      dismiss ? 'i-dismiss' : '',
      dot ? 'i-dot' : '',
    ]"
  >
    <svg v-if="dot" class="i-dot" :class="dotClass" fill="currentColor" viewBox="0 0 8 8">
      <circle cx="4" cy="4" r="3" />
    </svg>
    <slot name="default"></slot>
    <button v-if="dismiss" type="button" class="i-dismiss" @click="handleClick">
      <span class="sr-only">Remove small option</span>
      <svg stroke="currentColor" fill="none" viewBox="0 0 8 8">
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
    type: { type: String as PropType<'default' | 'secondary' | 'success' | 'danger' | 'primary' | 'warning' | 'info'>, default: 'default',
      validator: (val: string) => ['default', 'danger', 'success', 'info',
        'primary', 'warning', 'secondary'].indexOf(val) > -1,
    },
    /** Dot badge */
    dot: { type: Boolean, default: false },
    dotClass: { type: String, default: null },
    /** Dismiss button */
    dismiss: { type: Boolean, default: false },
    /** Size of badge */
    size: { type: String as PropType<'md' | 'lg' | 'sm'>, default: 'md',
      validator: (val: string) => ['md', 'lg', 'sm'].indexOf(val) > -1,
    },
  },
  emits: ['click'],
  setup(props, { emit, attrs }) {
    const handleClick = evt => {
      emit('click', evt)
    }

    return { attrs, handleClick }
  },
})
</script>

<style>
.i-badge {
  @apply bg-white border-solid relative inline-flex items-center rounded-full border border-transparent px-3 py-0.5 text-sm font-medium;
}
.i-badge.i-sm {
  @apply px-2 py-0;
}
.i-badge.i-lg {
  @apply px-4 py-1 text-base;
}
.i-badge.i-dismiss {
  @apply pr-1;
}
.i-badge.i-dot {
  @apply pl-2;
}
.i-badge.i-lg.i-dot {
  @apply pl-2.5;
}
.i-badge .i-dot {
  @apply -ml-0.5 mr-1.5 h-2 w-2;
}
.i-badge .i-dismiss {
  @apply border-0 bg-transparent p-0.5 cursor-pointer text-current flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center focus:outline-none focus:text-white;
}
.i-badge .i-dismiss > svg {
  @apply h-2 w-2;
}
.i-badge.i-lg.i-dot > svg {
  @apply h-2.5 w-2.5;
}
.i-badge.i-default {
  @apply border-gray-300 text-gray-800;
}
.i-badge.i-default .i-dismiss, .i-badge.i-secondary .i-dismiss {
  @apply hover:bg-gray-200 focus:bg-gray-500;
}
.i-badge.i-secondary {
  @apply bg-gray-100 text-gray-800;
}
.i-badge.i-primary {
  @apply bg-blue-100 text-lightBlue-800;
}
.i-badge.i-primary .i-dismiss {
  @apply hover:bg-blue-200 focus:bg-blue-500;
}
.i-badge.i-warning {
  @apply bg-yellow-100 text-yellow-800;
}
.i-badge.i-warning .i-dismiss {
  @apply hover:bg-yellow-200 focus:bg-yellow-500;
}
.i-badge.i-danger {
  @apply bg-red-100 text-red-800;
}
.i-badge.i-danger .i-dismiss {
  @apply hover:bg-red-200 focus:bg-red-500;
}
.i-badge.i-info {
  @apply bg-cyan-100 text-cyan-800;
}
.i-badge.i-info .i-dismiss {
  @apply hover:bg-cyan-200 focus:bg-cyan-500;
}
.i-badge.i-success {
  @apply bg-green-100 text-green-800;
}
.i-badge.i-success .i-dismiss {
  @apply hover:bg-green-200 focus:bg-green-500;
}
</style>
