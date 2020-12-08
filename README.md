# ispa-element

A Component Library for VueJs (Vue 3) base on Tailwind Css.

## Install
```
npm install ispa-element
```

### Module Loader
This is the recommended way if your application uses vue-cli or has a webpack based build with vue-loader configured. Import the components as .vue files for seamless integration within your project where path of each component is available at the "import" section of a component documentation.
```
//  import ComponentName from 'ispa-element/componentname';

impot Button from 'ispa-element/button';
```
In the next step, register the component with the tag name you'd like to use.

```
import {createApp} from 'vue';
const app = createApp(App);

app.component('i-button', Button);
```
