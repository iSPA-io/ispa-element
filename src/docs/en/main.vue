<template>
  <div>
    <i-header></i-header>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="relative bg-gray-50 overflow-hidden">
      <div class="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full" aria-hidden="true">
        <div class="relative h-full max-w-7xl mx-auto">
          <svg class="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2" width="404" height="784" fill="none" viewBox="0 0 404 784">
            <defs>
              <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="100%" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          <svg class="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2" width="404" height="784" fill="none" viewBox="0 0 404 784">
            <defs>
              <pattern id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="100%" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)" />
          </svg>
        </div>
      </div>

      <div class="relative pt-6 pb-16 sm:pb-24">
        <main class="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
          <div class="text-center">
            <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center">
              <router-link :to="`/${lang}`" class="w-auto">
                <img src="https://ispa.io/img/logo-square.png" alt="iSPA Element" class="mx-auto mb-8 max-h-32">
              </router-link>
            </div>
            <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span class="block text-cyan-600 xl:inline">iSPA</span>
              <span class="block xl:inline"> Element UI</span>
            </h1>
            <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              A Component Library for VueJs (Vue 3) base on Tailwind Css.
            </p>
            <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <router-link :to="`/${lang}/component/getting-start`" class="items-center justify-center">
                <i-button
                  type="info"
                  size="xl"
                  icon="fa fa-long-arrow-right"
                  icon-align="right"
                >
                  Get started
                </i-button>
              </router-link>
            </div>
          </div>
        </main>
      </div>
    </div>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="py-12 bg-white">
      <div class="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 class="sr-only">Easy to use</h2>
        <dl class="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-cyan-500 text-white">
              <!-- Heroicon name: globe-alt -->
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <div class="mt-5">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                Easy to use
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                We made this Element UI that can easily to use in your project
              </dd>
            </div>
          </div>

          <div>
            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-cyan-500 text-white">
              <!-- Heroicon name: scale -->
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            </div>
            <div class="mt-5">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                Simple is the best
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                We made every thing become simple as we can
              </dd>
            </div>
          </div>

          <div>
            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-cyan-500 text-white">
              <!-- Heroicon name: lightning-bolt -->
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div class="mt-5">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                Beautiful UI
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                Beautiful UI components, crafted by the creators of Tailwind CSS, we only fixed/changed some features
              </dd>
            </div>
          </div>
        </dl>
      </div>
    </div>

    <p class="block my-4" align="center">
      <a class="inline-block mr-2" href="https://npmcharts.com/compare/ispa-element?minimal=true"><img src="https://img.shields.io/npm/dm/ispa-element.svg?sanitize=true" alt="Downloads"></a>
      <a class="inline-block mr-2" href="https://www.npmjs.com/package/ispa-element"><img src="https://img.shields.io/npm/v/ispa-element.svg?sanitize=true" alt="Version"></a>
      <a class="inline-block mr-2" href="https://m.me/malayvuong"><img src="https://img.shields.io/badge/chat-messenger-green" alt="Chat"></a>
      <a class="inline-block mr-2" href="https://lerna.js.org/" target="_blank"><img src="https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg" alt="lerna"></a>
    </p>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Language } from '../../routes/languages'
import IHeader from './header.vue'

export default defineComponent({
  name: 'Main',
  components: { IHeader },
  computed: {
    lang() {
      return this.$route.path.split('/')[1] || Language.VI
    },
  },
})
</script>
