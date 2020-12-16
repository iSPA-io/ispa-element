<template>
  <span
    :class="[
      block ? 'block' : 'inline-block',
      buttonDisabled ? 'is-disabled' : '',
    ]"
  >
    <button
      type="button"
      :class="[
        `btn btn-${type || 'default'}${plain ? '-outline' : ''}`,
        buttonSize ? `btn-${buttonSize}` : '',
        block ? 'btn-block' : '',
        flat ? 'btn-flat' : '',
        round ? 'btn-round' : '',
        buttonDisabled ? 'btn-disabled' : '',
      ]"
      :disabled="buttonDisabled"
      @click="handleClick"
    >
      <span v-if="loading === true && iconLoading" :class="$slots.default ? `${size === 'sm' ? 'mr-1' : 'mr-2'}` : ''">
        <i class="animate-spin" :class="iconLoading"></i>
      </span>
      <span v-if="!loading && icon && iconAlign === 'left'" :class="$slots.default ? `${size === 'sm' ? 'mr-1' : 'mr-2'}` : ''">
        <i :class="icon"></i>
      </span>
      <slot v-if="$slots.default"></slot>
      <span v-if="!loading && icon && iconAlign === 'right'" :class="$slots.default ? `${size === 'sm' ? 'ml-1' : 'ml-2'}` : ''">
        <i :class="icon"></i>
      </span>
    </button>
  </span>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { PropType } from 'vue'
import { isValidComponentSize, isValidAlign } from '@ispa-element/utils/validators'

type IButtonType = PropType<'primary' | 'success' | 'warning' | 'danger' | 'info' | 'secondary' | 'default'>

export default defineComponent({
  name: 'IButton',
  props: {
    /** Button type (class name) */
    type: {
      type: String as IButtonType,
      default: 'default',
      validator: (val: string) => {
        return ['default', 'danger', 'success', 'info',
          'primary', 'warning', 'secondary'].includes(val)
      },
    },
    /** Button size */
    size: {
      type: String,
      default: 'md',
      validator: isValidComponentSize,
    },
    /** Icon class name */
    icon: { type: String, default: null },
    /** Icon Position */
    iconAlign: { type: String as PropType<'left' | 'right'>, default: 'left',
      validator: isValidAlign,
    },
    /** Loading icon class name */
    iconLoading: { type: String, default: 'fa fa-spin fa-spinner' },
    /** Button block width status */
    block: { type: Boolean, default: false },
    /** Loading status */
    loading: { type: Boolean, default: false },
    /** Disabled status */
    disabled: { type: Boolean, default: false },
    /** Simple plain class */
    plain: { type: Boolean, default: false },
    /** Flat class */
    flat: { type: [Boolean, String], default: false },
    /** Round class */
    round: { type: [Boolean, String], default: false },
  },
  emits: ['click'],
  setup(props, ctx) {
    const buttonSize = computed(() => {
      return props.size
    })

    const buttonDisabled = computed(() => {
      return props.disabled || props.loading
    })
    const handleClick = evt => {
      ctx.emit('click', evt)
    }

    return {
      buttonSize,
      buttonDisabled,
      handleClick,
    }
  },
})
</script>

<style>
.btn {
  @apply border transition px-4 py-2 rounded font-medium text-sm
  focus:outline-none;
}

.btn-default{
  @apply bg-white border font-normal
  hover:bg-gray-100
  focus:bg-gray-100;
}
.btn-default-outline {
  @apply bg-white border font-normal
  hover:bg-gray-100
  focus:bg-gray-100;
}

.btn-primary {
  @apply text-white bg-lightBlue-500 border-lightBlue-500
  hover:bg-lightBlue-400
  focus:bg-lightBlue-400;
}
.btn-primary-outline {
  @apply text-lightBlue-600 border-lightBlue-300 bg-lightBlue-50
  hover:text-white hover:bg-lightBlue-500 hover:border-lightBlue-500
  focus:bg-lightBlue-100;
}

.btn-secondary {
  @apply text-white bg-trueGray-500 border-trueGray-500
  hover:bg-trueGray-400
  focus:bg-trueGray-400;
}
.btn-secondary-outline {
  @apply text-trueGray-600 border-trueGray-300 bg-trueGray-50
  hover:text-white hover:bg-trueGray-500 hover:border-trueGray-500
  focus:bg-trueGray-100;
}

.btn-success {
  @apply text-white bg-green-500 border-green-500
  hover:bg-green-400
  focus:bg-green-400;
}
.btn-success-outline {
  @apply text-green-600 border-green-300 bg-green-50
  hover:text-white hover:bg-green-500 hover:border-green-500
  focus:bg-green-100;
}

.btn-warning {
  @apply text-white bg-yellow-500 border-yellow-500
  hover:bg-yellow-400
  focus:bg-yellow-400;
}
.btn-warning-outline {
  @apply text-yellow-600 border-yellow-300 bg-yellow-50
  hover:text-white hover:bg-yellow-500 hover:border-yellow-500
  focus:bg-yellow-100;
}

.btn-info {
  @apply text-white bg-cyan-500 border-cyan-500
  hover:bg-cyan-400
  focus:bg-cyan-400;
}
.btn-info-outline {
  @apply text-cyan-600 border-cyan-300 bg-cyan-50
  hover:text-white hover:bg-cyan-500 hover:border-cyan-500
  focus:bg-cyan-100;
}

.btn-danger {
  @apply text-white bg-rose-500 border-rose-500
  hover:bg-rose-400
  focus:bg-rose-400;
}
.btn-danger-outline {
  @apply text-rose-600 border-rose-300 bg-rose-50
  hover:text-white hover:bg-rose-500 hover:border-rose-500
  focus:bg-rose-100;
}

.btn-disabled {
  @apply opacity-50 pointer-events-none;
}
.is-disabled {
  @apply cursor-not-allowed;
}

.btn-xs {
  @apply py-1 px-2 text-xs font-normal !important;
}
.btn-sm {
  @apply py-2 px-3 text-xs font-normal !important;
}
.btn-md {
  @apply py-2 px-4 !important;
}
.btn-lg {
  @apply py-3 px-5 text-base !important;
}
.btn-xl {
  @apply py-4 px-6 text-base !important;
}

.btn-block {
  @apply w-full !important;
}
.btn-flat {
  @apply rounded-none !important;
}
.btn-round {
  @apply rounded-3xl !important;
}
.btn-circle {
  @apply rounded-full !important;
}
</style>
