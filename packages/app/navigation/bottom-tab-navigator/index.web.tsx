import React, { useCallback } from 'react';
import { useRouter } from 'next/router';

import { TabBarIcon } from 'app/navigation/tab-bar-icon';
import type { NextNavigationProps } from 'app/navigation/types';
import { BottomTab } from './types';

export function BottomTabNavigator({
  Component,
  pageProps
}: NextNavigationProps) {
  const router = useRouter();

  const component = useCallback(
    (props) => {
      return <Component {...pageProps} {...props} />;
    },
    [Component, pageProps]
  );

  return (
    <BottomTab.Navigator
      initialRouteName="homeTab"
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
        component={component}
        listeners={{
          tabPress: (e) => {
            // TODO why is nice necessary?
            router?.push({ pathname: `/home` }, `/home`, {
              shallow: true
            });
          }
        }}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />
        }}
      />
      <BottomTab.Screen
        name="playlistsTab"
        component={component}
        listeners={{
          tabPress: (e) => {
            router?.push({ pathname: `/playlists` }, `/playlists`, {
              shallow: true
            });
          }
        }}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="disc" color={color} />
        }}
      />
      <BottomTab.Screen
        name="profileTab"
        component={component}
        listeners={{
          tabPress: (e) => {
            router?.push({ pathname: `/profile` }, `/profile`, {
              shallow: true
            });
          }
        }}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="smile" color={color} />
        }}
      />
    </BottomTab.Navigator>
  );
}
