import * as Linking from 'expo-linking';

const linking = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    initialRouteName: 'home',
    screens: {
      home: {
        screens: {
          '/home': 'home'
        }
      },
      playlists: {
        screens: {
          '/playlists': 'playlists',
          '/playlist': 'playlist/:id'
        }
      },
      profile: {
        screens: {
          '/profile': 'profile'
        }
      }
    }
  }
};

export { linking };
