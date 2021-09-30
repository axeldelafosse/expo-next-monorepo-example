import React, { useCallback } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useRouter } from 'next/router';

import { TabBarIcon } from 'app/navigation/tab-bar-icon';
import type { NextNavigationProps } from 'app/navigation/types';

const BottomTab = createBottomTabNavigator();

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
      initialRouteName="home"
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
        name="home"
        component={component}
        listeners={{
          tabPress: (e) => {
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
        name="playlists"
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
        name="profile"
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
