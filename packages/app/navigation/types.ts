import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { NextComponentType, NextPageContext } from 'next';

type PlayListStackParams = {
  playlists: undefined;
  playlist: { id: string };
  new: undefined;
};

type HomeStackParams = {
  home: undefined;
};

type ProfileStackParams = {
  profile: { user?: unknown };
};

// type StackParams = ProfileStackParams & HomeStackParams & PlayListStackParams;

type PlaylistsScreenProps = NativeStackScreenProps<
  PlayListStackParams,
  'playlists'
>;
type PlaylistScreenProps = NativeStackScreenProps<
  PlayListStackParams,
  'playlist'
>;

type NextPageProps = any;
type NextNavigationProps = {
  Component?: NextComponentType<NextPageContext, null, NextPageProps>;
  pageProps?: NextPageProps;
};

export type {
  PlaylistsScreenProps,
  PlaylistScreenProps,
  NextNavigationProps,
  PlayListStackParams,
  HomeStackParams,
  ProfileStackParams
};
