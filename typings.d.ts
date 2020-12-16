declare module '*.json' {
  const value: any
  export default value
}

declare module '*.vue' {
  import { Component } from 'vue'
  const Comp: Component
  export default Comp
}
