import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from 'app/screens/home';
import { HomeStackParams } from '../navigation/types';

const HomeStack = createNativeStackNavigator<HomeStackParams>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: true,
        headerShadowVisible: false,
        headerBackTitleVisible: false
      }}
    >
      <HomeStack.Screen
        name="home"
        component={HomeScreen}
        options={{ title: 'Home', headerTitle: 'Hello World' }}
      />
    </HomeStack.Navigator>
  );
}

export default HomeNavigator;
