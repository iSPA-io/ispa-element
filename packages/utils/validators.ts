export const isValidAlign = (val: string) =>
  ['left', 'right', 'top', 'bottom'].some(unit =>
    val.endsWith(unit),
  )

export const isValidComponentSize = (val: string) =>
  ['', 'xl', 'lg', 'md', 'sm', 'xs'].includes(val)
