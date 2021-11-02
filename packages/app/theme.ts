// https://www.dripsy.xyz/usage/theming/create
import { makeTheme } from 'dripsy'

const theme = makeTheme({
  // Your theme goes here
})

type MyTheme = typeof theme

declare module 'dripsy' {
  interface DripsyCustomTheme extends MyTheme {}
}

export { theme }
