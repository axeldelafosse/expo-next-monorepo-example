import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { NextComponentType, NextPageContext } from 'next'

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

export type {
  PlaylistsScreenProps,
  PlaylistScreenProps,
  NextNavigationProps,
  PlaylistsStackParams,
  HomeStackParams,
  ProfileStackParams
}
