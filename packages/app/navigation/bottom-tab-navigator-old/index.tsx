import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { TabBarIcon } from 'app/navigation/tab-bar-icon'

import HomeNavigator from 'app/pages/home'
import PlaylistsNavigator from 'app/pages/playlists'
import ProfileNavigator from 'app/pages/profile'
import { NextNavigationProps } from '../types'
import { BottomTab } from './types'

export function BottomTabNavigator(props: NextNavigationProps) {
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
