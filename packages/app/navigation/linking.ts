import * as Linking from 'expo-linking';
import type { NavigationContainer } from '@react-navigation/native';
import { getPathFromState } from '@react-navigation/native';
import type { BottomTabNavigatorParams } from './bottom-tab-navigator/types';
import {
  HomeStackParams,
  PlayListStackParams,
  ProfileStackParams
} from './types';

type Props = React.ComponentProps<typeof NavigationContainer>['linking'];

function makeTabPath<Path extends keyof BottomTabNavigatorParams>(
  path: Path
): Path {
  return path;
}

function makePlaylistStackPath<Path extends keyof PlayListStackParams>(
  path: Path
): Path {
  return path;
}

function makeProfileStackPath<Path extends keyof ProfileStackParams>(
  path: Path
): Path {
  return path;
}

function makeHomeStackPath<Path extends keyof HomeStackParams>(
  path: Path
): Path {
  return path;
}

function makeType<T>(t: T) {
  return t;
}

const playlistStackPaths = makeType({
  playlists: makePlaylistStackPath('playlists'),
  playlist: makePlaylistStackPath('playlist'),
  new: makePlaylistStackPath('new')
});

const profileStackPaths = makeType({
  profile: makeProfileStackPath('profile')
});

const homeStackPaths = makeType({
  home: makeHomeStackPath('home')
});

const tabPaths = makeType({
  home: makeTabPath('homeTab'),
  playlists: makeTabPath('playlistsTab'),
  profile: makeTabPath('profileTab')
});

const linking: Props = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      [tabPaths.home]: {
        initialRouteName: homeStackPaths.home,
        screens: {
          [homeStackPaths.home]: 'home'
        }
      },
      [tabPaths.playlists]: {
        initialRouteName: playlistStackPaths.playlists,
        path: 'playlists',
        screens: {
          [playlistStackPaths.playlists]: '',
          [playlistStackPaths.playlist]: ':id',
          [playlistStackPaths.new]: 'new'
        }
      },
      [tabPaths.profile]: {
        initialRouteName: profileStackPaths.profile,
        screens: {
          [profileStackPaths.profile]: 'profile'
        }
      }
    }
  }
};

export { linking };
