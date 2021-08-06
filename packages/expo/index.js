import { registerErrorHandlers } from 'expo-dev-launcher';
registerErrorHandlers();

import 'expo/build/Expo.fx';
import { activateKeepAwake } from 'expo-keep-awake';
import { registerRootComponent } from 'expo';

import App from './App';

if (__DEV__) {
  activateKeepAwake();
}

registerRootComponent(App);
