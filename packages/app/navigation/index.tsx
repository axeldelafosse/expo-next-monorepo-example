import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

import { linking } from 'app/navigation/linking';
import { BottomTabNavigator } from 'app/navigation/bottom-tab-navigator';
import type { NextNavigationProps } from 'app/navigation/types';

export function Navigation({ Component, pageProps }: NextNavigationProps) {
  return (
    <NavigationContainer
      linking={linking}
      theme={{
        dark: true,
        colors: {
          primary: 'rgb(255, 255, 255)',
          background: 'rgb(0, 0, 0)',
          card: 'rgb(0, 0, 0)',
          text: 'rgb(255, 255, 255)',
          border: 'rgb(39, 39, 41)',
          notification: 'rgb(255, 69, 58)'
        }
      }}
      documentTitle={{
        enabled: true,
        formatter: (options) =>
          options?.title ? `${options.title} - Record Pool` : 'Record Pool'
      }}
    >
      <BottomSheetModalProvider>
        <BottomTabNavigator Component={Component} pageProps={pageProps} />
      </BottomSheetModalProvider>
    </NavigationContainer>
  );
}
