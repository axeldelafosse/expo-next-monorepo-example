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
            // router.push is necessary to load the code for that page and render the correct component with next/router
            const pathname = '/';
            if (router && router.pathname != pathname) {
              router?.push({ pathname }, pathname, {
                shallow: true
              });
            }
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
            router?.push({ pathname: `/playlists` }, `/playlists`, {
              shallow: true
            });
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
            router?.push({ pathname: `/profile` }, `/profile`, {
              shallow: true
            });
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
