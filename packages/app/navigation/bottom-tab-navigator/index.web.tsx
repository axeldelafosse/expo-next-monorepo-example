import React, { useCallback } from 'react'

import { CommonActions } from '@react-navigation/native'
import { TabBarIcon } from 'app/navigation/tab-bar-icon'
import type { NextNavigationProps } from 'app/navigation/types'
import { BottomTab } from './types'
import { useRouter } from 'app/navigation/use-router'

export function BottomTabNavigator({
  Component,
  pageProps
}: NextNavigationProps) {
  const router = useRouter()

  const component = useCallback(
    (props) => {
      return <Component {...pageProps} {...props} />
    },
    [Component, pageProps]
  )

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
        listeners={({ navigation, route }) => ({
          tabPress: (e) => {
            if (router) {
              console.log('[tab-press]', route.name)
              e.preventDefault()
              // const action = {
              //   ...CommonActions.navigate({ name: route.name, merge: true }),
              //   target: route.key
              // }
              router.push('/')
            }
          }
        })}
        options={({ navigation }) => ({
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />
        })}
      >
        {component}
      </BottomTab.Screen>
      <BottomTab.Screen
        name="playlistsTab"
        listeners={{
          tabPress: (e) => {
            e.preventDefault()
            router.push('/playlists')
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
            e.preventDefault()
            router.push('/profile')
          }
        }}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="smile" color={color} />
        }}
      >
        {component}
      </BottomTab.Screen>
    </BottomTab.Navigator>
  )
}
