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
