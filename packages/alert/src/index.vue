<template>
  <transition name="dismiss">
    <div
      v-if="showAlert"
      v-bind="attrs"
      class="i-alert"
      :class="[
        'i-alert-' + type,
        accent ? 'accent' : ''
      ]"
    >
      <div>
        <div v-if="!noIcon" class="icon">
          <span v-if="icon">
            <i :class="icon"></i>
          </span>
          <span v-else class="default">
            <svg v-if="type === 'default'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
            <svg v-if="type === 'success'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <svg v-if="type === 'warning'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
            <svg v-if="type === 'danger'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
            </svg>
            <svg v-if="type === 'info'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
            </svg>
          </span>
        </div>
        <div
          :class="[
            !noIcon ? 'no-icon' : ''
          ]"
        >
          <h3 v-if="title && !slots.title" v-html="title"></h3>
          <h3 v-if="slots.title && !title"><slot name="title"></slot></h3>
          <div
            class="message"
            :class="[
              title || slots.title ? 'has-title' : ''
            ]"
          >
            <slot name="default"></slot>
          </div>
          <div v-if="href || slots.href" class="callback">
            <div>
              <a v-if="href" :href="href" :title="hrefText" :target="hrefTarget">
                <span v-if="hrefText">{{ hrefText }}</span>
                <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </a>
              <slot v-if="slots.href" name="href"></slot>
              <span v-if="dismiss" @click="dismissAble">{{ dismissText }}</span>
            </div>
          </div>
        </div>
        <div v-if="dismiss && (!slots.href && !href)" class="dismiss">
          <div>
            <span @click="dismissAble">
              <span class="sr-only">{{ dismissText }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang='ts'>
import { ref, defineComponent, watchEffect } from 'vue'

export default defineComponent({
  name: 'IAlert',
  props: {
    /** Showing status */
    show: { type: Boolean, default: true },
    /** Alert type */
    type: { type: String, default: 'default' },
    /** Title of Alert */
    title: { type: String, default: null },
    /** Dismissable status */
    dismiss: { type: Boolean, default: false },
    dismissText: { type: String, default: 'dismiss' },
    /** Auto dismiss */
    autoDismiss: { type: Boolean, default: false },
    /** href click to action */
    href: { type: String, default: null },
    hrefText: { type: String, default: null },
    hrefTarget: { type: String, default: '_self' },
    /** Accent border status */
    accent: { type: Boolean, default: false },
    /** Icon class name (to change default icon) */
    icon: { type: String, default: null },
    /** No ICON */
    noIcon: { type: Boolean, default: false },
  },
  emits: ['close'],
  setup(props, { attrs, slots, emit }) {
    const showAlert = ref(props.show || false)

    const dismissAble = evt => {
      showAlert.value = false
      emit('close', evt)
    }

    watchEffect(() => {
      if (props.autoDismiss && showAlert.value === true) {
        setTimeout(dismissAble, 5000)
      }
    })

    return { attrs, slots, showAlert, dismissAble }
  },
})
</script>

<style>
.i-alert {
  @apply rounded-md p-4 bg-gray-100 mb-2;
}
.i-alert.accent {
  @apply border-l-4 rounded-l-none border-gray-500;
}
.i-alert > div {
  @apply flex;
}
.i-alert h3 {
  @apply m-0 text-gray-800 text-sm font-medium p-0;
}
.i-alert .message {
  @apply text-gray-500 text-sm;
}
.i-alert .message a {
  @apply font-medium underline text-gray-700 hover:text-gray-600;
}
.i-alert .callback {
  @apply mt-4;
}
.i-alert .callback > div {
  @apply -mx-2 -my-1.5 flex;
}
.i-alert .callback > div > span {
  @apply ml-2;
}
.i-alert .callback > div > span, .i-alert .callback a,
.i-alert .dismiss > div > span {
  @apply transition text-gray-800 hover:bg-gray-200 px-2 py-1.5 rounded-md text-sm font-semibold focus:outline-none focus:ring-1 focus:ring-offset-1 cursor-pointer;
}
.i-alert .callback a > svg {
  @apply h-4 w-5;
}
.i-alert .dismiss {
  @apply ml-auto pl-3;
}
.i-alert .dismiss > div {
  @apply -mx-1.5 -my-1.5;
}
.i-alert .dismiss > div > span {
  @apply inline-flex rounded-md p-1.5 focus:outline-none focus:ring-1 focus:ring-offset-1 ;
}
.i-alert .dismiss > div > span > svg {
  @apply h-5 w-5;
}
.i-alert .icon {
  @apply flex-shrink-0;
}
.i-alert .icon > span {
  @apply text-current;
}
.i-alert .default > svg {
  @apply h-5 w-5;
}
.i-alert .no-icon {
  @apply ml-3;
}
.i-alert .has-title {
  @apply mt-2;
}


/** Success alert */
.i-alert-success {
  @apply bg-green-50;
}
.i-alert-success.accent {
  @apply border-green-500;
}
.i-alert-success .icon {
  @apply text-green-500;
}
.i-alert-success h3 {
  @apply text-green-800;
}
.i-alert-success .message {
  @apply text-green-700;
}
.i-alert-succes .message a {
  @apply text-green-700 hover:text-green-600;
}
.i-alert-success .callback > div > span,
.i-alert-success .callback a,
.i-alert-success .dismiss > div > span {
  @apply text-green-800 bg-green-50 hover:bg-green-100 focus:ring-offset-green-50 focus:ring-green-600;
}
.i-alert-success .dismiss > div > span {
  @apply text-green-500 hover:bg-green-100 focus:ring-offset-green-50 focus:ring-green-600;
}


/** warning alert */
.i-alert-warning {
  @apply bg-yellow-50;
}
.i-alert-warning.accent {
  @apply border-yellow-500;
}
.i-alert-warning .icon {
  @apply text-yellow-500;
}
.i-alert-warning h3 {
  @apply text-yellow-800;
}
.i-alert-warning .message {
  @apply text-yellow-700;
}
.i-alert-succes .message a {
  @apply text-yellow-700 hover:text-yellow-600;
}
.i-alert-warning .callback > div > span,
.i-alert-warning .callback a,
.i-alert-warning .dismiss > div > span {
  @apply text-yellow-800 bg-yellow-50 hover:bg-yellow-100 focus:ring-offset-yellow-50 focus:ring-yellow-600;
}

/** danger alert */
.i-alert-danger {
  @apply bg-red-50;
}
.i-alert-danger.accent {
  @apply border-red-500;
}
.i-alert-danger .icon {
  @apply text-red-500;
}
.i-alert-danger h3 {
  @apply text-red-800;
}
.i-alert-danger .message {
  @apply text-red-700;
}
.i-alert-succes .message a {
  @apply text-red-700 hover:text-red-600;
}
.i-alert-danger .callback > div > span,
.i-alert-danger .callback a,
.i-alert-danger .dismiss > div > span {
  @apply text-red-800 bg-red-50 hover:bg-red-100 focus:ring-offset-red-50 focus:ring-red-600;
}

/** info alert */
.i-alert-info {
  @apply bg-cyan-50;
}
.i-alert-info.accent {
  @apply border-cyan-500;
}
.i-alert-info .icon {
  @apply text-cyan-500;
}
.i-alert-info h3 {
  @apply text-cyan-800;
}
.i-alert-info .message {
  @apply text-cyan-700;
}
.i-alert-succes .message a {
  @apply text-cyan-700 hover:text-cyan-600;
}
.i-alert-info .callback > div > span,
.i-alert-info .callback a,
.i-alert-info .dismiss > div > span {
  @apply text-cyan-800 bg-cyan-50 hover:bg-cyan-100 focus:ring-offset-cyan-50 focus:ring-cyan-600;
}

/** Transition effect */
.dismiss-enter-active {
  @apply transition ease-out duration-100;
}
.dismiss-leave-active {
  @apply transition ease-in duration-75;
}
.dismiss-enter-from,
.dismiss-leave-to {
  @apply transform opacity-0 scale-95;
}
.dismiss-enter-to,
.dismiss-leave-from {
  @apply transform opacity-100 scale-100;
}
</style>
