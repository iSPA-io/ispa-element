<template>
  <div>
    <i-header></i-header>
    <div class="min-h-screen flex">
      <div class="md:hidden">
        <transition name="bg-overlay" :duration="1000">
          <div v-show="!sidebarClose" class="fixed inset-0 flex z-40">
            <transition name="bg-overlay" :duration="1000">
              <div v-if="!sidebarClose" class="fixed inset-0">
                <div class="absolute inset-0 bg-gray-600 opacity-75"></div>
              </div>
            </transition>
            <transition name="sidebar" :duration="1000">
              <div v-if="!sidebarClose" class="relative flex-1 flex flex-col max-w-xs w-full bg-white">
                <div class="absolute top-0 right-0 -mr-12 pt-2">
                  <button @click="sidebarClose = !sidebarClose" class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span class="sr-only">Close sidebar</span>
                    <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                  <sidebar></sidebar>
                </div>
              </div>
            </transition>
            <div v-if="!sidebarClose" class="flex-shrink-0 w-14">
            </div>
          </div>
        </transition>
      </div>

      <div class="hidden md:flex md:flex-shrink-0">
        <div class="flex flex-col w-64">
          <div class="flex flex-col h-0 flex-1 border-r border-gray-200 bg-white">
            <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <sidebar></sidebar>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col w-0 flex-1">
        <div class="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
          <button @click="sidebarClose = !sidebarClose" class="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span class="sr-only">Open sidebar</span>
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <main class="ispa-content" tabindex="0">
          <div class="content">
            <router-view />
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import Sidebar from './sidebar.vue'
import IHeader from './header.vue'

export default defineComponent({
  name: 'Component',
  components: { Sidebar, IHeader },
  setup() {
    const router = useRouter()
    const lang = router.currentRoute.value.path.split('/')[1] || Language.VI

    return { lang }
  },
  data() {
    return {
      sidebarClose: true,
    }
  },
})
</script>
