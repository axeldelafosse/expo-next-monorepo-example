import { Platform } from 'react-native'
import { NativeStackNavigationOptions } from '@react-navigation/native-stack'

import { HeaderBackButton } from 'app/navigation/header-back-button'

export const navigatorScreenOptions = ({
  navigation
}): NativeStackNavigationOptions => ({
  animationEnabled: true,
  headerShown: true,
  headerShadowVisible: false,
  headerBackTitleVisible: false,
  headerStyle: {
    // Similar to `headerShadowVisible` but for web
    // @ts-expect-error web only
    borderBottomWidth: 0
  },
  headerLeft: Platform.select({
    web(props) {
      return <HeaderBackButton navigation={navigation} {...props} />
    }
  })
})
