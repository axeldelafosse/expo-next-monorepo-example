import React from 'react'
import { Platform } from 'react-native'

import createStackNavigator from 'app/navigation/create-stack-navigator'
import PlaylistsScreen from 'app/screens/playlists'
import PlaylistScreen from 'app/screens/playlist'
import NewPlaylistScreen from 'app/screens/new-playlist'
import { PlaylistsStackParams } from 'app/navigation/types'
import { navigatorScreenOptions } from 'app/navigation/navigator-screen-options'

const PlaylistsStack = createStackNavigator<PlaylistsStackParams>()

function PlaylistsNavigator() {
  return (
    <PlaylistsStack.Navigator screenOptions={navigatorScreenOptions}>
      <PlaylistsStack.Group>
        <PlaylistsStack.Screen
          name="playlists"
          component={PlaylistsScreen}
          options={{ title: 'Playlists', headerTitle: 'Playlists' }}
        />
        <PlaylistsStack.Screen
          name="playlist"
          component={PlaylistScreen}
          options={{ title: 'Playlist', headerTitle: 'Playlist' }}
        />
      </PlaylistsStack.Group>
      <PlaylistsStack.Group
        screenOptions={{
          headerShown: false,
          presentation: Platform.OS === 'ios' ? 'formSheet' : 'transparentModal'
        }}
      >
        <PlaylistsStack.Screen name="new" component={NewPlaylistScreen} />
      </PlaylistsStack.Group>
    </PlaylistsStack.Navigator>
  )
}

export default PlaylistsNavigator
