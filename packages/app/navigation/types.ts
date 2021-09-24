import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { NextComponentType, NextPageContext } from 'next';

type RootStackParamList = {
  '/home': undefined;
  '/playlists': undefined;
  '/playlist': { id: string };
  '/profile': { user?: any };
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, '/home'>;
type PlaylistsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  '/playlists'
>;
type PlaylistScreenProps = NativeStackScreenProps<
  RootStackParamList,
  '/playlist'
>;
type ProfileScreenProps = NativeStackScreenProps<
  RootStackParamList,
  '/profile'
>;

type NextPageProps = any;
type NextNavigationProps = {
  Component?: NextComponentType<NextPageContext, null, NextPageProps>;
  pageProps?: NextPageProps;
};

export type {
  HomeScreenProps,
  PlaylistsScreenProps,
  PlaylistScreenProps,
  ProfileScreenProps,
  NextNavigationProps
};
