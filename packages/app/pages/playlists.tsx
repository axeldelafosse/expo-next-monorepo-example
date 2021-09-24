import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PlaylistsScreen from 'app/screens/playlists';
import PlaylistScreen from 'app/screens/playlist';

const PlaylistsStack = createNativeStackNavigator();

function PlaylistsNavigator() {
  return (
    <PlaylistsStack.Navigator
      screenOptions={{
        headerShown: true,
        headerShadowVisible: false,
        headerBackTitleVisible: false
      }}
    >
      <PlaylistsStack.Screen
        name="/playlists"
        component={PlaylistsScreen}
        options={{ title: 'Playlists', headerTitle: 'Playlists' }}
      />
      <PlaylistsStack.Screen
        name="/playlist"
        component={PlaylistScreen}
        options={{ title: 'Playlist', headerTitle: 'Playlist' }}
      />
    </PlaylistsStack.Navigator>
  );
}

export default PlaylistsNavigator;
