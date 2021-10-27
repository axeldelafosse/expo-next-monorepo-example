// https://github.com/nandorojo/dripsy#custom-theme
import { makeTheme } from 'dripsy'

const theme = makeTheme({})

type MyTheme = typeof theme
declare module 'dripsy' {
  interface DripsyCustomTheme extends MyTheme {}
}

export { theme }
