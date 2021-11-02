import * as Linking from 'expo-linking'
import type {
  NavigationContainer,
  LinkingOptions
} from '@react-navigation/native'

type Props = React.ComponentProps<typeof NavigationContainer>['linking']

const linking: LinkingOptions<ReactNavigation.RootParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      homeTab: {
        path: '',
        initialRouteName: 'home',
        screens: {
          home: ''
        }
      },
      playlistsTab: {
        path: 'playlists',
        initialRouteName: 'playlists',
        screens: {
          playlists: '',
          playlist: ':id',
          new: 'new'
        }
      },
      profileTab: {
        path: 'profile',
        initialRouteName: 'profile',
        screens: {
          profile: ''
        }
      }
    }
  }
}

export { linking }
