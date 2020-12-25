# Change Log
The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](http://semver.org/).


#### --- Version 0.6.13
This version update:
* Added new element `divider`
* Fixed style of `alert`, `button`, `switch` (no need to required TailwindCss after install)
* Changed attribute from `show` to `v-model` of `Alert` component and fixed auto-dismiss update modelValue
* Fixed `button` and `input` inherit Attributes
* Added Readme (Vietnamese language)

#### --- Version 0.5.0
This version update:
* Added new element `switch`
* Fixed docs

#### --- Version 0.4.1
This version update:
* Added new element `alert`
* Fixed form inject/provide error

#### --- Version 0.3.3
This version update:
* Changed label style on `form-item` element
* Added new `label slot` on `form-item` element and prepair data structure for form validation
* Added new element `form`
* Added new attribute `required` on `input` element
* Fixed `attrs` target on childrend element

#### --- Version 0.2.1
This version update:
* Grab all element into one file to easy to import one time
* Added new `form`, `form-item`, `input`
* Fixed disabled cursor for **Button**
* Remove `&& npm run build:locale && npm run build:locale-umd && npm run build:theme`

#### --- Version 0.1.9
This version update:
* Added new attribute `round` to **Button**
* Fixed styles for **Button**
* Changed speed spinner of loading icon
* Changed from `loading-icon` to `icon-loading` attribute of **Button**

#### --- Version 0.1.4
This version update:
* Change size of **Button** from 4 to 5 sizes, default size is `md`
* Added new `CHANGELOG.md`
* Changed from `outline` to `plain` type of **Button**
* Added new attribute `flat` to **Button**
