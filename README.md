# iSPA Element UI

A Component Library for VueJs (Vue 3) base on Tailwind Css.

<p align="center">
  <a href="https://npmcharts.com/compare/ispa-element?minimal=true" target="_blank"><img src="https://img.shields.io/npm/dm/ispa-element.svg?sanitize=true" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/ispa-element" target="_blank"><img src="https://img.shields.io/npm/v/ispa-element.svg?sanitize=true" alt="Version"></a>
  <a href="https://lerna.js.org/" target="_blank"><img src="https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg" alt="lerna"></a>
</p>

## Quick Start
To use it, open up your terminal in the desired directory and run the following command:

```sh
npm install ispa-element
```

Then add the library into your main js project
```js
import {createApp} from 'vue'
import iSPAElement from 'ispa-element'

const app = createApp(App)
app.use(iSPAElement).mount('#app')
```

## Module Loader
This is the recommended way if your application uses vue-cli or has a webpack based build with vue-loader configured. Import the components as .vue files for seamless integration within your project where path of each component is available at the "import" section of a component documentation.
```js
import { IButton } from 'ispa-element'
```

In the next step, register the component with the tag name you'd like to use.
```js
//  In app.js
import {createApp} from 'vue'
const app = createApp(App)

app.component(IButton.name, IButton)
// OR app.component('i-button', IButton)

app.mount('#app')

//  In component.vue
export default {
  components: { IButton }
}
```

::: tip Note
You can use any tag name, but notes these tag name maybe conflict with others tag name, so make sure it's unique tag name to use.
:::

# Documents
Please [visit here](https://element.ispa.io/) to read full documents of iSPA Element.

# Special Thanks
Thanks for amazing library [PrimeVue](https://primefaces.org/primevue/showcase/#/) and [Element UI](https://element.eleme.io/#/), our very first version has been inspired from these library.

## Milestone

- [ ] Card Component
- [ ] Loading Component/Directives
- [ ] Nav/Tabs Component
- [ ] Progress bar Component
- [ ] Dropdown Component
- [x] Badge Component (2020-12-26)
- [x] Divider Component (2020-12-20)
- [x] Switch Component (2020-12-20)
- [x] Alert Component (2020-12-18)
- [x] Form/Input Component (2020-12-16)
- [x] Button Component (2020-12-09)

## CHANGELOG
You can follow Change Logs by click [here (CHANGELOG.md)](CHANGELOG.md)

## Versioning

Maintained under the [Semantic Versioning guidelines](https://semver.org/).

## License

[MIT](https://opensource.org/licenses/MIT) © [Malayvuong](https://malayvuong.com/)

## Wanna support?
If you like this project and want to contribute us, then you can send us an email via malayvuong@gmail.com for more informations.

[⬆ back to top](#)
