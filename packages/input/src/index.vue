<template>
  <div
    class="input-group"
    :style="$attrs.style"
    :class="[
      $slots.prepend || $slots.append ? 'flex' : '',
      $attrs.class
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
      ref="input"
      type="text"
      name="email"
      v-bind="attrs"
      :class="[
        validate,
        icon ? iconAlign === 'left' ? 'pl-10' : 'pr-10' : '',
        (!$slots.prepend && !$slots.append) ? 'rounded' : (
          ($slots.prepend && $slots.append) ? 'rounded-none' :
          (
            $slots.prepend ? 'rounded-r' : $slots.append ? 'rounded-l' : ''
          )
        ),
      ]"
      class="i-input"
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
import { defineComponent, watch, getCurrentInstance, nextTick, ref } from 'vue'

import { useAttrs } from '@ispa-element/hooks'
import type { PropType } from 'vue'
import { isValidAlign } from '@ispa-element/utils/validators'

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
  },
  emits: ['update:modelValue'],
  setup(props) {
    const instance = getCurrentInstance()
    const attrs = useAttrs()

    const isComposing = ref(false)
    const focused = ref(false)

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
    const updateIcon = () => {
      iconPrefix('l')
      iconPrefix('r')
    }

    const handleInput = event => {
      const { value } = event.target

      // should not emit input during composition
      // see: https://github.com/ElemeFE/element/issues/10516
      if (isComposing.value) return

      // hack for https://github.com/ElemeFE/element/issues/8548
      // should remove the following line when we don't support IE
      if (value === nativeInputValue.value) return

      ctx.emit(UPDATE_MODEL_EVENT, value)
      ctx.emit('input', value)

      // ensure native input value is controlled
      // see: https://github.com/ElemeFE/element/issues/12850
      nextTick(setNativeInputValue)
    }

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
      if (props.validateEvent) {
        elFormItem.formItemMitt?.emit('el.form.blur', [props.modelValue])
      }
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
      isComposing.value = !isKorean(lastCharacter)
    }

    const handleCompositionEnd = event => {
      if (isComposing.value) {
        isComposing.value = false
        handleInput(event)
      }
    }

    watch(() => {
      nextTick(() => {
        updateIcon()
      })
    })

    return {
      attrs,
      updateIcon,
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
  data() {
    return {

    }
  },
  computed: {
    filled() {
      return (this.modelValue != null && this.modelValue.toString().length > 0)
    },
  },
  methods: {
    onInput(event) {
      this.$emit('update:modelValue', event.target.value)
    },
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
.i-icon {
  @apply absolute flex text-gray-400 items-center pointer-events-none inset-y-0;
}
.i-icon-right {
  @apply right-0 pr-3;
}
.i-icon-left {
  @apply left-0 pl-3;
}
.i-suffix {
  @apply inline-flex items-center px-3 border border-gray-300
  bg-gray-50 text-gray-500 sm:text-sm;
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
