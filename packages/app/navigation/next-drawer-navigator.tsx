import React from 'react'
import dynamic from 'next/dynamic'

import { TabBarIcon } from 'app/navigation/tab-bar-icon'
import { NextNavigationProps } from './types'
import { createNextDrawerNavigator } from './create-next-drawer-navigator'

const HomeNavigator = dynamic(() => import('../pages/home'))
const PlaylistsNavigator = dynamic(() => import('../pages/playlists'))
const ProfileNavigator = dynamic(() => import('../pages/profile'))

const BottomTab = createNextDrawerNavigator()

export function NextDrawerNavigator({
  pageProps,
  Component
}: NextNavigationProps) {
  return (
    <BottomTab.Navigator
      screenOptions={{
        lazy: true,
        headerShown: false,
        drawerType: 'permanent',
        drawerActiveBackgroundColor: '#333',
        drawerInactiveTintColor: '#888',
        drawerActiveTintColor: 'white'
      }}
      Component={Component}
      pageProps={pageProps}
    >
      <BottomTab.Screen
        name="homeTab"
        component={HomeNavigator}
        options={{
          drawerIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          title: 'Home'
        }}
      />
      <BottomTab.Screen
        name="playlistsTab"
        component={PlaylistsNavigator}
        options={{
          drawerIcon: ({ color }) => <TabBarIcon name="disc" color={color} />,
          title: 'Playlists'
        }}
      />
      <BottomTab.Screen
        name="profileTab"
        component={ProfileNavigator}
        options={{
          drawerIcon: ({ color }) => <TabBarIcon name="smile" color={color} />,
          title: 'Profile'
        }}
      />
    </BottomTab.Navigator>
  )
}
