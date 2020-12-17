import { createRouter, createWebHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { Language } from './languages'
import navConfig from './nav.config.json'

const LoadingComponent = {
  template: `<div v-loading="true" style="min-height: 500px; width: 100%;"></div>`,
}
const ErrorComponent = {
  template: `
    <div style="text-align: center;padding: 100px 0;">Loading error. Please refresh the page and try again</div>`,
}

const load = function(lang, path) {
  return defineAsyncComponent({
    loader: () => import(/* webpackChunkName: "EN" */`../docs/${lang}${path}.vue`),
    delay: 0,
    timeout: 30000,
    errorComponent: ErrorComponent,
    loadingComponent: LoadingComponent,
  })
}

const registerRoute = navConfig => {
  const route = []
  Object.keys(navConfig).forEach((lang, index) => {
    const navs = navConfig[lang]

    route.push({
      path: `/${ lang }/component`,
      redirect: `/${ lang }/component/getting-start`,
      component: load(lang, '/component'),
      children: [],
    })

    navs.forEach(nav => {
      if (nav.href) return
      if (nav.groups) {
        nav.groups.forEach(group => {
          group.list.forEach(e => {
            addRoute(e, lang, index)
          })
        })
      } else if (nav.children) {
        nav.children.forEach(e => {
          addRoute(e, lang, index)
        })
      } else {
        addRoute(nav, lang, index)
      }
    })
  })
  function addRoute(page, lang, index) {
    const component = load(lang, page.path)

    const child = {
      path: page.path.slice(1),
      meta: {
        title: page.title || page.name,
        description: page.description,
        lang,
      },
      name: 'ispa-' + lang + (page.path.slice(1) || page.title || page.name),
      component: component.default || component,
    }

    route[index].children.push(child)
  }
  return route
}

let route = registerRoute(navConfig)

const generateMiscRoutes = function(lang) {
  const indexRoute = {
    path: `/${ lang }`,
    meta: { lang },
    name: 'home' + lang,
    component: load(lang, '/main'),
  }

  const notFoundRoute = {
    path: `/:pathMatch(.*)*`,
    meta: { lang },
    name: 'home-' + lang + '-404',
    component: load(lang, '/main'),
  }

  return [indexRoute, notFoundRoute]
}

route = route.concat(generateMiscRoutes('en'))
route = route.concat(generateMiscRoutes('vi'))

const defaultPath = Language.EN

route = route.concat([{
  path: '/',
  redirect: { path: `/${defaultPath}` },
}])

const router = createRouter({
  history: createWebHistory(),
  // history: createWebHistory('/docs/ispa-element/'),
  routes: route,
})

router.beforeEach(async (to, from, next) => {
  next()
})

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    NProgress.set(0.4)
  }
  next()
})

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})

export default router
