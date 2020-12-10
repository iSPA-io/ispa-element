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
      type="text"
      name="email"
      v-bind="attrs"
      :class="[
        validate ? validate : '',
        icon ? iconAlign === 'left' ? 'pl-10' : 'pr-10' : '',
        (!$slots.prepend && !$slots.append) ? 'rounded' : (
          ($slots.prepend && $slots.append) ? 'rounded-none' :
          (
            $slots.prepend ? 'rounded-r' : $slots.append ? 'rounded-l' : ''
          )
        ),
      ]"
      class="placeholder-gray-400 block w-full
    sm:text-sm border-gray-300
    focus:ring-blue-100 focus:border-blue-200"
      :placeholder="placeholder"
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

<script>
import { defineComponent, watch, getCurrentInstance, nextTick } from 'vue'

export default defineComponent({
  name: 'IInput',
  props: {
    /** Model value (v-model) */
    modelValue: null,
    /** Label of Input */
    label: { type: String, default: null },
    /** Placeholder text */
    placeholder: { type: String, default: null },
    /** Description text */
    desc: { type: String, default: null },
    /** Validation status */
    validate: { type: String, default: null },
    /** Icon class name */
    icon: { type: String, default: null },
    /** Icon Position */
    iconAlign: { type: String, default: 'left',
      validator(val) {
        return ['left', 'right'].indexOf(val) > -1
      },
    },
  },
  emits: ['update:modelValue'],
  setup(props, ctx) {
    const instance = getCurrentInstance()

    const iconPrefix = place => {
      const { el } = instance.vnode
      const elList = Array.from(el.querySelectorAll(`.i-suffix-${place}`))

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

    watch(() => {
      nextTick(() => {
        updateIcon()
      })
    })

    return {
      updateIcon,
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
<style lang="stylus">
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
