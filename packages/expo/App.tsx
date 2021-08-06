import React from 'react';
import { enableScreens } from 'react-native-screens';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { HelloWorld } from 'app/hello-world';

enableScreens(true);

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <HelloWorld />
    </SafeAreaProvider>
  );
}
