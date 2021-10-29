import { Platform } from 'react-native'
import { NativeStackNavigationOptions } from '@react-navigation/native-stack'

import { HeaderBackButton } from 'app/navigation/header-back-button'

export const navigatorScreenOptions: NativeStackNavigationOptions = {
  animationEnabled: true,
  headerShown: true,
  headerShadowVisible: false,
  headerBackTitleVisible: false,
  headerStyle: {
    // Similar to `headerShadowVisible` but for web
    // @ts-ignore
    borderBottomWidth: 0
  },
  headerLeft:
    Platform.OS === 'web' ? (props) => <HeaderBackButton {...props} /> : null
}
