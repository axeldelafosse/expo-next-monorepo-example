import React, { useReducer, useMemo } from 'react';
import { NavigationContainer, useLinkTo } from '@react-navigation/native';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

import { linking } from 'app/navigation/linking';
import { BottomTabNavigator } from 'app/navigation/bottom-tab-navigator';
import type { NextNavigationProps } from 'app/navigation/types';
import Router from 'next/router';
import { Platform } from 'react-native';

function LinkTo() {
  const linkTo = useLinkTo();
  React.useEffect(function trigger() {
    if (Platform.OS === 'web' && Router) {
      const handler = (path: string) => {
        linkTo(path);
      };
      Router.events.on('routeChangeComplete', handler);

      return () => {
        Router.events.off('routeChangeComplete', handler);
      };
    }
  }, []);

  return null;
}

function useLinkingConfig() {
  const [enabled, disableWebLinkingAfterInitialState] = useReducer(
    () => false,
    true
  );

  return {
    linking: useMemo(() => ({ ...linking, enabled }), []),
    onReady: Platform.select({ web: disableWebLinkingAfterInitialState })
  };
}

export function Navigation({ Component, pageProps }: NextNavigationProps) {
  const linkingConfig = useLinkingConfig();
  return (
    <NavigationContainer
      linking={linkingConfig.linking}
      onReady={linkingConfig.onReady}
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
      <LinkTo />
      <BottomSheetModalProvider>
        <BottomTabNavigator Component={Component} pageProps={pageProps} />
      </BottomSheetModalProvider>
    </NavigationContainer>
  );
}
