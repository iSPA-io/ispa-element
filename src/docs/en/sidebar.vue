<template>
  <nav v-if="navSidebar" class="main-nav">
    <template v-for="(item, ind) in navSidebar" :key="ind">
      <template v-if="item.children">
        <span class="no-nav-link">{{ item.name }}</span>
        <template v-for="(nav, nind) in item.children" :key="nind">
          <router-link v-if="nav.path" :to="`/${lang}/component${nav.path}`" class="nav-link">
            {{ nav.name }}
          </router-link>
          <span v-else class="no-nav-link">{{ nav.name }}</span>
        </template>
      </template>
      <template v-else>
        <router-link v-if="item.path" :to="`/${lang}/component${item.path}`" class="nav-link">
          {{ item.name }}
        </router-link>
        <span v-else class="no-nav-link">{{ item.name }}</span>
      </template>
    </template>
  </nav>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { Language } from '../../routes/languages'
import navConfig from '../../routes/nav.config.json'

export default defineComponent({
  name: 'Sidebar',
  setup() {
    const router = useRouter()
    const lang = router.currentRoute.value.path.split('/')[1] || Language.VI
    const navSidebar = navConfig[lang]

    return { lang, navSidebar }
  },
  data() {
    return {

    }
  },
})
</script>
<style>
.main-nav {
  @apply mt-5 px-2 space-y-1;
}
.main-nav .nav-link {
  @apply text-base font-medium group flex px-2 items-center text-gray-600 hover:bg-gray-50 hover:text-cyan-600 py-2;
}
.main-nav .no-nav-link {
  @apply text-sm font-light group flex px-2 items-center text-gray-400 pt-2 pb-0;
}
.main-nav .router-link-exact-active {
  @apply text-cyan-600 font-bold;
}
</style>
