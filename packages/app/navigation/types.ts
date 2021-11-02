import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { NextComponentType, NextPageContext } from 'next'
import { NavigatorScreenParams } from '@react-navigation/native'

type PlaylistsStackParams = {
  playlists: undefined
  playlist: { id: string }
  new: undefined
}

type HomeStackParams = {
  home: undefined
}

type ProfileStackParams = {
  profile: { user?: unknown }
}

// type StackParams = ProfileStackParams & HomeStackParams & PlayListStackParams;

type PlaylistsScreenProps = NativeStackScreenProps<
  PlaylistsStackParams,
  'playlists'
>
type PlaylistScreenProps = NativeStackScreenProps<
  PlaylistsStackParams,
  'playlist'
>

type NextPageProps = any
type NextNavigationProps = {
  Component?: NextComponentType<NextPageContext, null, NextPageProps>
  pageProps?: NextPageProps
}

type BottomTabNavigatorParams = {
  homeTab: NavigatorScreenParams<HomeStackParams>
  playlistsTab: NavigatorScreenParams<PlaylistsStackParams>
  profileTab: NavigatorScreenParams<ProfileStackParams>
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends BottomTabNavigatorParams {}
  }
}

export type {
  PlaylistsScreenProps,
  PlaylistScreenProps,
  NextNavigationProps,
  PlaylistsStackParams,
  HomeStackParams,
  ProfileStackParams,
  BottomTabNavigatorParams
}
