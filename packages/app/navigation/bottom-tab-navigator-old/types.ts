import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigatorScreenParams } from '@react-navigation/native'
import {
  HomeStackParams,
  PlaylistsStackParams,
  ProfileStackParams
} from '../types'

export type BottomTabNavigatorParams = {
  homeTab: NavigatorScreenParams<HomeStackParams>
  playlistsTab: NavigatorScreenParams<PlaylistsStackParams>
  profileTab: NavigatorScreenParams<ProfileStackParams>
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends BottomTabNavigatorParams {}
  }
}

export const BottomTab = createBottomTabNavigator<BottomTabNavigatorParams>()
