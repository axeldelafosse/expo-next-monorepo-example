import React from 'react';

import createStackNavigator from 'app/navigation/create-stack-navigator';
import HomeScreen from 'app/screens/home';
import { HomeStackParams } from 'app/navigation/types';
import { navigatorScreenOptions } from 'app/navigation/navigator-screen-options';

const HomeStack = createStackNavigator<HomeStackParams>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator screenOptions={navigatorScreenOptions}>
      <HomeStack.Screen
        name="home"
        component={HomeScreen}
        options={{ title: 'Home', headerTitle: 'Hello World' }}
      />
    </HomeStack.Navigator>
  );
}

export default HomeNavigator;
