
export interface InstallOptions {
  size: ComponentSize
  zIndex: number
  locale?: any
}

let $ISPA = { } as InstallOptions

const setConfig = (option: InstallOptions): void => {
  $ISPA = option
}

const getConfig = (key: keyof InstallOptions): unknown => {
  return $ISPA[key]
}

export {
  getConfig,
  setConfig,
}
