<template>
<button
  :class="[
    `btn btn-${type || 'default'}${outline ? '-outline' : ''}`,
    size ? `btn-${size}` : '',
    block ? 'btn-block' : '',
    (buttonDisabled || loading) ? 'btn-disabled' : '',
  ]"
  :disabled="buttonDisabled || loading"
  @click="handleClick"
>
  <i v-if="loading" :class="[
    loadingIcon,
    `${size === 'sm' ? 'mr-1' : 'mr-2'}`
  ]"></i>
  <i v-if="icon" :class="[
    icon,
    `${size === 'sm' ? 'mr-1' : 'mr-2'}`
  ]"></i>
  <slot v-if="$slots.default"></slot>
</button>
</template>

<script>
export default {
  name: 'iButton',
  props: {
    /** Button type (class name) */
    type: {type: String, default: 'default',
      validator(val) {
        return ['default', 'danger', 'success', 'info',
          'primary', 'warning', 'secondary'].indexOf(val) > -1;
      },
    },
    /** Button size */
    size: {type: String, default: null,
      validator(val) {
        return ['lg', null, 'md', 'sm'].indexOf(val) > -1;
      },
    },
    /** Icon class name */
    icon: {type: String, default: null},
    /** Loading icon class name */
    loadingIcon: {type: String, default: 'fa fa-spin fa-spinner'},
    /** Button block width status */
    block: {type: Boolean, default: false},
    /** Loading status */
    loading: {type: Boolean, default: false},
    /** Disabled status */
    disabled: {type: Boolean, default: false},
    /** Outline class */
    outline: {type: Boolean, default: false},
  },
  computed: {
    buttonDisabled() {
      return this.disabled;
    },
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    },
  },
};
</script>

<style>
.btn {
  @apply transition py-3 px-5 rounded font-medium text-sm
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
  @apply text-white bg-lightBlue-500
  hover:bg-lightBlue-400
  focus:bg-lightBlue-400;
}
.btn-primary-outline {
  @apply text-lightBlue-600 border border-lightBlue-300 bg-lightBlue-50
  hover:text-white hover:bg-lightBlue-500 hover:border-lightBlue-500
  focus:bg-lightBlue-100;
}

.btn-secondary {
  @apply text-white bg-trueGray-500
  hover:bg-trueGray-400
  focus:bg-trueGray-400;
}
.btn-secondary-outline {
  @apply text-trueGray-600 border border-trueGray-300 bg-trueGray-50
  hover:text-white hover:bg-trueGray-500 hover:border-trueGray-500
  focus:bg-trueGray-100;
}

.btn-success {
  @apply text-white bg-green-500
  hover:bg-green-400
  focus:bg-green-400;
}
.btn-success-outline {
  @apply text-green-600 border border-green-300 bg-green-50
  hover:text-white hover:bg-green-500 hover:border-green-500
  focus:bg-green-100;
}

.btn-warning {
  @apply text-white bg-yellow-500
  hover:bg-yellow-400
  focus:bg-yellow-400;
}
.btn-warning-outline {
  @apply text-yellow-600 border border-yellow-300 bg-yellow-50
  hover:text-white hover:bg-yellow-500 hover:border-yellow-500
  focus:bg-yellow-100;
}

.btn-info {
  @apply text-white bg-cyan-500
  hover:bg-cyan-400
  focus:bg-cyan-400;
}
.btn-info-outline {
  @apply text-cyan-600 border border-cyan-300 bg-cyan-50
  hover:text-white hover:bg-cyan-500 hover:border-cyan-500
  focus:bg-cyan-100;
}

.btn-danger {
  @apply text-white bg-rose-500
  hover:bg-rose-400
  focus:bg-rose-400;
}
.btn-danger-outline {
  @apply text-rose-600 border border-rose-300 bg-rose-50
  hover:text-white hover:bg-rose-500 hover:border-rose-500
  focus:bg-rose-100;
}

.btn-disabled {
  @apply opacity-50 pointer-events-none;
}

.btn-sm {
  @apply py-2 px-2 text-xs font-normal !important;
}
.btn-md {
  @apply py-2 px-3 font-normal !important;
}
.btn-lg {
  @apply py-4 px-6 text-base !important;
}
.btn-block {
  @apply w-full !important;
}
</style>
