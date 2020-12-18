<template>
  <div class="i-switch">
    <span v-if="title || desc" :class="['switch-text', float]">
      <span v-if="title" class="switch-text-title">{{ title }}</span>
      <span v-if="desc" class="switch-text-desc">{{ desc }}</span>
    </span>
    <button
      type="button"
      aria-pressed="false"
      aria-labelledby="toggleLabel"
      :class="[
        !small ? nativeValue ? onColor || 'bg-emerald-600' : offColor || 'bg-gray-200' : '',
        small ? 'is-small' : ''
      ]"
      @click="toggleSwitch"
    >
      <span class="sr-only">Use setting</span>
      <span v-if="small" aria-hidden="true" class="bg-gray-200 absolute h-4 w-9 mx-auto rounded-full transition-colors ease-in-out duration-200" :class="[nativeValue ? onColor || 'bg-emerald-600' : offColor || 'bg-gray-200']"></span>
      <span aria-hidden="true" :class="[nativeValue ? 'is-on' : 'translate-x-0', 'switch-circle']">
        <template v-if="showIcon">
          <!-- Off Icon -->
          <span class="switch-icon" aria-hidden="true" :class="[nativeValue ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200']">
            <svg class="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
              <path d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
          <!-- On Icon -->
          <span class="switch-icon" aria-hidden="true" :class="[!nativeValue ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200']">
            <svg class="h-3 w-3 text-emerald-600" fill="currentColor" viewBox="0 0 12 12">
              <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
            </svg>
          </span>
        </template>
      </span>
    </button>
    <span v-if="textOn || textOff" id="toggleLabel" class="switch-label">
      <span
        :class="[
          nativeValue ? 'text-emerald-600' : 'text-gray-900'
        ]"
      >
        {{ nativeValue ? textOn : textOff || textOn }}
      </span>
    </span>
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ISwitch',
  props: {
    /** Value of input */
    modelValue: { type: [Boolean, String, Number], default: null },
    /** Custom value */
    trueValue: { type: [Boolean, String, Number], default: null },
    falseValue: { type: [Boolean, String, Number], default: null },
    /** Active (ON) color class name */
    onColor: { type: String, default: 'bg-emerald-600' },
    /** inActive (OFF) color class name */
    offColor: { type: String, default: 'bg-gray-200' },
    /** Turn on/off icon */
    showIcon: { type: Boolean, default: false },
    /** Active (ON) icon class name */
    onIcon: { type: String, default: null },
    /** InActive (OFF) icon class name */
    offIcon: { type: String, default: null },
    /** Small Size Toggle */
    small: { type: Boolean, default: false },
    /** Left Title of Alert */
    title: { type: String, default: null },
    /** Description text */
    desc: { type: String, default: null },
    /** Display text on/off */
    textOn: { type: String, default: null },
    textOff: { type: String, default: null },
    /** Align of switch button */
    float: { type: String, default: 'left' },
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    const nativeValue = ref(props.modelValue || props.modelValue === props.trueValue || false)

    const setNativeValue = computed({
      get: () => nativeValue.value,
      set: val => {
        nativeValue.value = val
      },
    })

    const returnValue = (nativeValue.value) ? (props.trueValue || nativeValue.value) : (props.falseValue || nativeValue.value)

    const toggleSwitch = val => {
      //  Toggle nativeValue
      nativeValue.value = !nativeValue.value
      //  Update modal value
      emit('update:modelValue', returnValue)
      //  Fire event
      emit('change', val, nativeValue.value)
    }

    return { nativeValue, setNativeValue, toggleSwitch }
  },
})
</script>

<style>
.i-switch {
  @apply flex items-center justify-between;
}
.i-switch button {
  @apply relative inline-flex flex-shrink h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200
  focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-blue-300;
}
.i-switch button .switch-circle {
  @apply inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200;
}
.i-switch button .switch-circle.is-on {
  @apply translate-x-5 !important;
}
.i-switch button .switch-circle .switch-icon {
  @apply absolute inset-0 h-full w-full flex items-center justify-center transition-opacity;
}
.i-switch button.is-small {
  @apply h-5 w-10 bg-none group flex-shrink-0 items-center !important;
}
.i-switch button.is-small .switch-circle {
  @apply left-0 inline-block h-5 w-5 border border-gray-200 transition-transform !important;
}
.i-switch .switch-text {
  @apply mr-3;
}
.i-switch .switch-text.left {
  @apply inline-flex flex-shrink;
}
.i-switch .switch-text.right {
  @apply flex-grow flex flex-col;
}
.switch-text .switch-text-title {
  @apply text-sm font-medium text-gray-900;
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
</style>
