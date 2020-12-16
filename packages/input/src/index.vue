<template>
  <div
    class="input-group"
    :style="$attrs.style"
    :class="[
      $slots.prepend || $slots.append ? 'flex' : '',
      $attrs.class,
      disabled ? 'is-disabled' : '',
    ]"
  >
    <span
      v-if="$slots.prepend"
      class="i-suffix i-suffix-l"
    >
      <slot name="prepend"></slot>
    </span>
    <div
      v-if="iconAlign === 'left' && icon"
      class="i-icon i-icon-left"
    >
      <i :class="icon"></i>
    </div>
    <input
      :id="id"
      ref="input"
      v-model="nativeInputValue"
      :name="name"
      :type="type"
      :class="[
        validate,
        icon ? iconAlign === 'left' ? 'pl-10' : 'pr-10' : '',
        (!$slots.prepend && !$slots.append) ? 'rounded' : (
          ($slots.prepend && $slots.append) ? 'rounded-none' :
          (
            $slots.prepend ? 'rounded-r' : $slots.append ? 'rounded-l' : ''
          )
        ),
        disabled ? 'input-disabled' : '',
      ]"
      class="i-input"
      :disabled="disabled"
      :autocomplete="autocomplete"
      :placeholder="placeholder"
      @compositionstart="handleCompositionStart"
      @compositionupdate="handleCompositionUpdate"
      @compositionend="handleCompositionEnd"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
      @keydown="handleKeydown"
    >
    <div
      v-if="(iconAlign === 'right' && icon) || validate"
      class="i-icon i-icon-right"
    >
      <i v-if="iconAlign === 'right' && icon" :class="icon"></i>
      <i
        v-if="validate"
        :class="[
          'ml-1',
          validate === 'is-error' ? 'fa fa-exclamation-circle text-red-500'
          : 'fa fa-check-circle text-green-500'
        ]"
      ></i>
    </div>
    <span
      v-if="$slots.append"
      class="i-suffix i-suffix-r"
    >
      <slot name="append"></slot>
    </span>
  </div>
</template>

<script lang='ts'>
import { defineComponent, computed, watch, nextTick, getCurrentInstance, ref, onMounted, onUpdated } from 'vue'

import { useAttrs } from '@ispa-element/hooks'
import type { PropType } from 'vue'
import { isValidAlign, isValidInputType } from '@ispa-element/utils/validators'

export default defineComponent({
  name: 'IInput',
  props: {
    /** Model value (v-model) */
    modelValue: {
      type: [String, Number],
      default: '',
    },
    /** Auto complete status */
    autocomplete: {
      type: String,
      default: 'off',
      validator: (val: string) => ['on', 'off'].includes(val),
    },
    /** Type of input */
    type: {
      type: String as PropType<'text' | 'password' | 'email' | 'tel'>,
      default: 'text',
      validate: isValidInputType,
    },
    /** name of field */
    name: { type: String, default: null },
    /** Placeholder text */
    placeholder: { type: String, default: null },
    /** Validation status */
    validate: { type: String, default: null },
    /** Icon class name */
    icon: { type: String, default: null },
    /** Icon Position */
    iconAlign: { type: String as PropType<'left' | 'right'>, default: 'left',
      validator: isValidAlign,
    },
    /** ID of input */
    id: { type: String, default: null },
    /** Disabled status */
    disabled: { type: Boolean, default: false },
  },
  emits: ['update:modelValue', 'input', 'change', 'focus', 'blur'],
  setup(props, ctx) {
    /** Return this instance DOM */
    const instance = getCurrentInstance()
    /** Get attrs - i don't know what its used for? */
    const attrs = useAttrs()
    /** Composing status */
    const isComposing = ref(false)
    /** Focus status */
    const focused = ref(false)
    /** Input refs */
    const input = ref(null)
    /** Textarea refs */
    const textarea = ref (null)
    /** Get value of Input or Textarea */
    const inputOrTextarea = computed({
      get: () => input.value || textarea.value,
      set: val => nativeInputValue.value = val,
    })
    /** Native input value (Inner value) */
    const nativeInputValue = computed({
      get: () => (props.modelValue === null || props.modelValue === undefined) ? '' : String(props.modelValue),
      set: val => {
        if (!inputOrTextarea.value || input.value === val) return
        input.value = val
      },
    })

    /** Math position of icon suffix */
    const iconPrefix = place => {
      const { el } = instance.vnode
      const elList: HTMLSpanElement[]  = Array.from(el.querySelectorAll(`.i-suffix-${place}`))

      const target = elList.find(item => item.parentNode === el)

      if (!target) return

      if (props.icon) {
        const iconLeft = el.querySelector('.i-icon-left')
        const iconRight = el.querySelector('.i-icon-right')
        if (iconLeft && props.iconAlign && place === 'l') {
          iconLeft.style.transform = `translateX(${target.offsetWidth}px)`
        }
        if (iconRight && place === 'r') {
          iconRight.style.transform = `translateX(-${target.offsetWidth}px)`
        }
      }
    }
    /** Process to update icon position */
    const updateIcon = () => {
      iconPrefix('l')
      iconPrefix('r')
    }
    /** Handle input */
    const handleInput = event => {
      const { value } = event.target

      // should not emit input during composition
      // see: https://github.com/ElemeFE/element/issues/10516
      if (isComposing.value) return

      // hack for https://github.com/ElemeFE/element/issues/8548
      // should remove the following line when we don't support IE
      if (value === nativeInputValue.value) return

      ctx.emit('update:modelValue', value)
      ctx.emit('input', value)

      // ensure native input value is controlled
      // see: https://github.com/ElemeFE/element/issues/12850
      inputOrTextarea.value = value
    }
    /** Handle change */
    const handleChange = event => {
      ctx.emit('change', event.target.value)
    }

    const focus = () => {
      // see: https://github.com/ElemeFE/element/issues/18573
      nextTick(() => {
        inputOrTextarea.value.focus()
      })
    }

    const blur = () => {
      inputOrTextarea.value.blur()
    }

    const handleFocus = event => {
      focused.value = true
      ctx.emit('focus', event)
    }

    const handleBlur = event => {
      focused.value = false
      ctx.emit('blur', event)
    }

    const select = () => {
      inputOrTextarea.value.select()
    }

    const handleCompositionStart = () => {
      isComposing.value = true
    }

    const handleCompositionUpdate = event => {
      const text = event.target.value
      const lastCharacter = text[text.length - 1] || ''
      isComposing.value = (lastCharacter)
    }

    const handleCompositionEnd = event => {
      if (isComposing.value) {
        isComposing.value = false
        handleInput(event)
      }
    }

    watch(() => props.type, () => {
      nextTick(() => {
        updateIcon()
      })
    })

    onMounted(() => {
      updateIcon()
    })

    onUpdated(() => {
      nextTick(updateIcon)
    })

    return {
      nativeInputValue,
      attrs,
      handleInput,
      handleChange,
      handleFocus,
      handleBlur,
      handleCompositionStart,
      handleCompositionUpdate,
      handleCompositionEnd,
      select,
      focus,
      blur,
    }
  },
})
</script>
<style>
.i-input {
  @apply placeholder-gray-400 block w-full
    sm:text-sm border-gray-300
    focus:ring-blue-100 focus:border-blue-200;
}
.input-group {
  @apply mt-1 rounded shadow-sm relative;
}
.input-disabled {
  @apply bg-gray-100 cursor-not-allowed;
}
.i-icon {
  @apply absolute flex text-gray-500 items-center pointer-events-none inset-y-0;
}
.i-icon-right {
  @apply right-0 pr-3;
}
.i-icon-left {
  @apply left-0 pl-3;
}
.i-suffix {
  @apply inline-flex items-center px-3 border border-gray-300
  bg-gray-50 text-gray-500 sm:text-sm whitespace-nowrap;
}
.i-suffix-l {
  @apply rounded-l border-r-0;
}
.i-suffix-r {
  @apply rounded-r border-l-0;
}

.is-error {
  @apply border-red-300 !important;
}
.is-success {
  @apply border-green-600 !important;
}
</style>
