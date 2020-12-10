export const isValidWidthUnit = (val: string) =>
  ['px', 'rem', 'em', 'vw', '%', 'vmin', 'vmax'].some(unit =>
    val.endsWith(unit),
  )

export const isValidComponentSize = (val: string) =>
  ['', 'xl', 'lg', 'md', 'sm', 'xs'].includes(val)
