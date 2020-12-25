<template>
  <div class="i-dropdown">
    <div>
      <i-button class="i-dropdown-btn" @click="show = !show">
        Options
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </i-button>
    </div>
    <transition name="dismiss">
      <div v-if="show" class="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
        <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Account settings</a>
          <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Support</a>
          <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">License</a>
          <form method="POST" action="#">
            <button type="submit" class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">
              Sign out
            </button>
          </form>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'IDropdown',
  props: {

  },
  setup(props) {
    const show = ref(false)

    return { show }
  },
})
</script>

<style>
.i-dropdown {
  @apply relative inline-block text-left;
}
.i-dropdown-btn {
  @apply inline-flex justify-center;
}
.i-dropdown-btn svg {
  @apply -mr-1 ml-2 h-5 w-5;
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
