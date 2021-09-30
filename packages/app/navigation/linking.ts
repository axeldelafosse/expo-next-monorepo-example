import * as Linking from 'expo-linking';

const linking = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    initialRouteName: 'home',
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
          '/playlist': 'playlist/:id'
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
