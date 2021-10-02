import React, { useCallback } from 'react';
import { useRouter } from 'next/router';

import { TabBarIcon } from 'app/navigation/tab-bar-icon';
import type { NextNavigationProps } from 'app/navigation/types';
import { BottomTab } from './types';
import { useLink } from '../use-link';

export function BottomTabNavigator({
  Component,
  pageProps
}: NextNavigationProps) {
  const component = useCallback(
    (props) => {
      return <Component {...pageProps} {...props} />;
    },
    [Component, pageProps]
  );

  const { link } = useLink();

  return (
    <BottomTab.Navigator
      initialRouteName="playlistsTab"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#7e7f81',
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: 'black',
          borderTopColor: 'black',
          zIndex: 1
        },
        lazy: true
      }}
    >
      <BottomTab.Screen
        name="homeTab"
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            link('/');
          }
        }}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />
        }}
      >
        {component}
      </BottomTab.Screen>
      <BottomTab.Screen
        name="playlistsTab"
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            link('/playlists');
          }
        }}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="disc" color={color} />
        }}
      >
        {component}
      </BottomTab.Screen>
      <BottomTab.Screen
        name="profileTab"
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            link('/profile');
          }
        }}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="smile" color={color} />
        }}
      >
        {component}
      </BottomTab.Screen>
    </BottomTab.Navigator>
  );
}
