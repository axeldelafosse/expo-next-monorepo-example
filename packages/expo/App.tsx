import React from 'react'
import { enableScreens, enableFreeze } from 'react-native-screens'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { DripsyProvider } from 'dripsy'

import { theme } from 'app/theme'
import { Navigation } from 'app/navigation'

enableScreens(true)
enableFreeze(true)

export default function App() {
  return (
    <DripsyProvider theme={theme}>
      <SafeAreaProvider style={{ backgroundColor: 'black' }}>
        <StatusBar style="dark" />
        <Navigation />
      </SafeAreaProvider>
    </DripsyProvider>
  )
}
