<template>
  <div class="i-switch" :class="[(title || desc) ? 'is-flex' : 'is-inline']" v-bind="attrs">
    <span v-if="title || desc" :class="['switch-text', float]">
      <span v-if="title" class="switch-text-title">{{ title }}</span>
      <span v-if="desc" class="switch-text-desc">{{ desc }}</span>
    </span>
    <button
      type="button"
      aria-pressed="false"
      aria-labelledby="toggleLabel"
      :class="[
        'i-' + (checked ? colorOn : colorOff),
        size ? 'is-' + size : '',
        (!textOn && !textOff) ? 'no-text': ''
      ]"
      :disabled="disabled"
      @click.prevent="handleChange($event, !checked)"
    >
      <span class="sr-only">Use setting</span>
      <span v-if="size && size === 'small'" aria-hidden="true" class="small-bg"></span>
      <span aria-hidden="true" :class="[checked ? 'is-on' : '', 'switch-circle']">
        <template v-if="showIcon">
          <!-- Off Icon -->
          <span class="switch-icon" aria-hidden="true" :class="[checked ? 'is-off' : 'is-on']">
            <i v-if="iconOff" :class="[iconOff]"></i>
            <svg v-else fill="none" viewBox="0 0 12 12">
              <path d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
          <!-- On Icon -->
          <span class="switch-icon" aria-hidden="true" :class="[!checked ? 'is-off' : 'is-on']">
            <i v-if="iconOn" :class="[iconOn]"></i>
            <svg v-else fill="currentColor" viewBox="0 0 12 12">
              <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
            </svg>
          </span>
        </template>
      </span>
    </button>
    <span
      v-if="textOn || textOff"
      id="toggleLabel"
      class="switch-label"
      :class="[
        'i-' + (checked ? colorOn : colorOff)
      ]"
    >
      {{ checked ? textOn : textOff || textOn }}
    </span>
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent, ref, watch, onMounted, nextTick } from 'vue'

import type { PropType } from 'vue'

export default defineComponent({
  name: 'ISwitch',
  props: {
    /** Value of input */
    modelValue: { type: [Boolean, String, Number], default: null },
    /** Custom value */
    valueOn: { type: [Boolean, String, Number], default: true },
    valueOff: { type: [Boolean, String, Number], default: false },
    /** Active (ON) & inActive (OFF) color class name */
    colorOn: { type: String, default: 'success' },
    colorOff: { type: String, default: 'default' },
    /** Turn on/off icon */
    showIcon: { type: Boolean, default: false },
    /** Active (ON) & InActive (OFF) icon class name */
    iconOn: { type: String, default: null },
    iconOff: { type: String, default: null },
    /** Left Title & description of Switch */
    title: { type: String, default: null },
    desc: { type: String, default: null },
    /** Display text on/off label */
    textOn: { type: String, default: null },
    textOff: { type: String, default: null },
    /** Align of switch button */
    float: {
      type: String as PropType<'left' | 'right'>,
      default: 'left',
      validator: (val: string) => ['left', 'right'].includes(val),
    },
    /** Smaller & Bigger Size Toggle */
    size: {
      type: String as PropType<'small' | 'big'>,
      default: null,
      validator: (val: string) => ['small', 'big'].includes(val),
    },
    /** Disabled status */
    disabled: { type: Boolean, default: false },
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { emit, attrs }) {
    //  Value current offset (Boolean)
    const currentValue = ref(false)
    const checked = computed((): boolean => {
      return props.modelValue === (props.valueOn || true)
    })

    if (!~[props.valueOn, props.valueOff].indexOf(props.modelValue)) {
      emit('update:modelValue', props.valueOff)
    }

    watch(checked, () => {
      currentValue.value = checked.value
    })

    onMounted(() => {
      currentValue.value = checked.value
    })

    const handleChange = ($event, value: boolean) => {
      const val = value ? (props.valueOn || true) : (props.valueOff || false)
      emit('update:modelValue', val)
      emit('change', $event, val)
      nextTick(() => {
        currentValue.value = value
      })
    }

    return { checked, handleChange, attrs }
  },
})
</script>

<style>
.i-switch {
  @apply items-center justify-between;
}
.i-switch.is-flex {
  @apply flex;
}
.i-switch.is-inline {
  @apply inline-flex;
}
.i-switch button {
  @apply relative inline-flex flex-shrink h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 p-0
  focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-blue-300
  disabled:opacity-50;
}
.i-switch button .switch-circle {
  @apply inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 translate-x-0;
}
.i-switch button .switch-circle.is-on {
  @apply translate-x-5 !important;
}
.i-switch button .switch-circle .switch-icon {
  @apply absolute inset-0 h-full w-full flex items-center justify-center transition-opacity;
}
.i-switch button .switch-circle .switch-icon svg {
  @apply h-3 w-3;
}
.switch-icon.is-on {
  @apply opacity-100 ease-in duration-200;
}
.switch-icon.is-off {
  @apply opacity-0 ease-out duration-100;
}

.i-switch button.is-small {
  @apply h-5 w-10 group flex-shrink-0 items-center !important;
}
.i-switch button.no-text {
  @apply mr-auto;
}
.i-switch button.is-small {
  @apply bg-transparent !important;
}
.i-switch button.is-small .switch-circle {
  @apply left-0 inline-block h-5 w-5 border shadow border-gray-200 transition-transform !important;
}
.i-switch button.is-small .small-bg {
  @apply absolute h-4 w-9 mx-auto rounded-full transition-colors ease-in-out duration-200;
}
.i-switch button.is-big {
  @apply h-7 w-12 bg-none group flex-shrink-0 items-center !important;
}
.i-switch button.is-big .switch-circle {
  @apply left-0 inline-block h-6 w-6 border border-gray-200 transition-transform !important;
}
.i-switch .switch-text {
  @apply mr-3 flex flex-col;
}
.i-switch .switch-text.right {
  @apply flex-grow;
}
.switch-text .switch-text-title {
  @apply block text-sm font-medium text-gray-900;
}
.switch-text .switch-text-desc {
  @apply text-sm leading-normal text-gray-500;
}

.i-switch .switch-label {
  @apply ml-3 mr-auto;
}
.switch-label span {
  @apply text-sm font-medium;
}
.i-switch .is-disabled {
  @apply disabled:opacity-50;
}
.i-switch button.i-default, .i-switch button.i-default .small-bg {
  @apply bg-gray-300;
}
.i-switch .switch-label.i-default, .i-switch button.i-default .switch-icon.is-on svg {
  @apply text-gray-300;
}
.i-switch button.i-success, .i-switch button.i-success .small-bg {
  @apply bg-emerald-600;
}
.i-switch .switch-label.i-success, .i-switch button.i-success .switch-icon.is-on svg {
  @apply text-emerald-600;
}
.i-switch button.i-danger, .i-switch button.i-danger .small-bg {
  @apply bg-red-600;
}
.i-switch .switch-label.i-danger, .i-switch button.i-danger .switch-icon.is-on svg {
  @apply text-red-600;
}
.i-switch button.i-info, .i-switch button.i-info .small-bg {
  @apply bg-cyan-600;
}
.i-switch .switch-label.i-info, .i-switch button.i-info .switch-icon.is-on svg {
  @apply text-cyan-600;
}
.i-switch button.i-primary, .i-switch button.i-primary .small-bg {
  @apply bg-lightBlue-600;
}
.i-switch .switch-label.i-primary, .i-switch button.i-primary .switch-icon.is-on svg {
  @apply text-lightBlue-600;
}
.i-switch button.i-warning, .i-switch button.i-warning .small-bg {
  @apply bg-yellow-600;
}
.i-switch .switch-label.i-warning, .i-switch button.i-warning .switch-icon.is-on svg {
  @apply text-yellow-600;
}
.i-switch button.i-secondary, .i-switch button.i-secondary .small-bg {
  @apply bg-gray-600;
}
.i-switch .switch-label.i-secondary, .i-switch button.i-secondary .switch-icon.is-on svg {
  @apply text-gray-600;
}
.i-switch button.i-violet, .i-switch button.i-violet .small-bg {
  @apply bg-violet-600;
}
.i-switch .switch-label.i-violet, .i-switch button.i-violet .switch-icon.is-on svg {
  @apply text-violet-600;
}
.i-switch button.i-pink, .i-switch button.i-pink .small-bg {
  @apply bg-pink-600;
}
.i-switch .switch-label.i-pink, .i-switch button.i-pink .switch-icon.is-on svg {
  @apply text-pink-600;
}
</style>
