<template>
  <nav class="flex-shrink-0 bg-white border-b">
    <div class="mx-auto px-2 sm:px-4 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="flex items-center px-2 lg:px-0 xl:w-64">
          <div class="flex-shrink-0">
            <router-link :to="`/${lang}`">
              <img class="h-8 w-auto" src="https://ispa.io/img/logo.png" alt="iSPA Element">
            </router-link>
          </div>
        </div>

        <div class="flex-1 flex justify-center lg:justify-end">
          <div class="w-full px-2 lg:px-6">
            <label for="search" class="sr-only">Search projects</label>
            <div class="relative text-cyan-600 focus-within:text-gray-400">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i class="fa fa-search"></i>
              </div>
              <input
                id="search"
                name="search"
                class="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-300 bg-opacity-25 text-cyan-100 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-0 focus:placeholder-gray-400 focus:text-gray-900 sm:text-sm"
                placeholder="Search projects"
                type="search"
              >
            </div>
          </div>
        </div>
        <div class="flex lg:hidden">
          <button class="bg-cyan-600 inline-flex items-center justify-center p-2 rounded-md text-cyan-400 hover:text-white hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyan-600 focus:ring-white" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
            <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="hidden lg:block lg:w-80">
          <div class="flex items-center justify-end">
            <div class="flex">
              <router-link :to="`/${lang}/component/getting-start`" class="transition px-3 py-2 rounded-md text-sm font-medium text-cyan-600 hover:text-cyan-500">Components</router-link>
              <a href="https://github.com/malayvuong/ispa-element" class="transition px-3 py-2 rounded-md text-sm font-medium text-cyan-600 hover:text-cyan-500" target="_blank">Github</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="hidden lg:hidden">
      <div class="px-2 pt-2 pb-3">
        <router-link :to="`/${lang}/component/getting-start`" class="block px-3 py-2 rounded-md text-base font-medium text-white bg-indigo-800">Components</router-link>
        <a href="https://github.com/malayvuong/ispa-element" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600" target="_blank">Github</a>
      </div>
      <div class="pt-4 pb-3 border-t border-indigo-800">
        <div class="px-2">
          <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600">Your Profile</a>
          <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600">Settings</a>
          <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600">Sign out</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { Language } from '../../routes/languages'

export default defineComponent({
  name: 'IHeader',
  props: {

  },
  setup() {
    const router = useRouter()
    const lang = router.currentRoute.value.path.split('/')[1] || Language.VI

    return { lang }
  },
})
</script>
