import * as Linking from 'expo-linking';
import type { NavigationContainer } from '@react-navigation/native';

type Props = React.ComponentProps<typeof NavigationContainer>['linking'];

const linking: Props = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      home: {
        initialRouteName: '/home',
        screens: {
          '/home': 'home'
        }
      },
      playlists: {
        initialRouteName: '/playlists',
        screens: {
          '/playlists': 'playlists',
          '/playlist': 'playlist/:id',
          '/playlists?modal=new-playlist': 'playlists?modal=new-playlist'
        }
      },
      profile: {
        initialRouteName: '/profile',
        screens: {
          '/profile': 'profile'
        }
      }
    }
  }
};

export { linking };
