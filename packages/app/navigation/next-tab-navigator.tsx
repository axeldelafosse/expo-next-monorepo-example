import React from 'react'
import dynamic from 'next/dynamic'

import { TabBarIcon } from 'app/navigation/tab-bar-icon'
import { NextNavigationProps } from './types'
import { createNextTabNavigator } from './universal-tab-navigator'
// import { BottomTab } from './bottom-tab-navigator/types';

const HomeNavigator = dynamic(() => import('../pages/home'))
const PlaylistsNavigator = dynamic(() => import('../pages/playlists'))
const ProfileNavigator = dynamic(() => import('../pages/profile'))

const BottomTab = createNextTabNavigator()

export function NextTabNavigator({
  pageProps,
  Component
}: NextNavigationProps) {
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
      Component={Component}
      pageProps={pageProps}
    >
      <BottomTab.Screen
        name="homeTab"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />
        }}
      />
      <BottomTab.Screen
        name="playlistsTab"
        component={PlaylistsNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="disc" color={color} />
        }}
      />
      <BottomTab.Screen
        name="profileTab"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="smile" color={color} />
        }}
      />
    </BottomTab.Navigator>
  )
}
