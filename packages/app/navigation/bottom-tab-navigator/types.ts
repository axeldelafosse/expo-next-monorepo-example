import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

export type BottomTabNavigatorParams = {
  homeTab: undefined
  playlistsTab: undefined
  profileTab: undefined
}

export const BottomTab = createBottomTabNavigator<BottomTabNavigatorParams>()
