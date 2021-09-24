import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProfileScreen from 'app/screens/profile';

const ProfileStack = createNativeStackNavigator();

function ProfileNavigator() {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerShown: true,
        headerShadowVisible: false,
        headerBackTitleVisible: false
      }}
    >
      <ProfileStack.Screen
        name="/profile"
        component={ProfileScreen}
        options={{ title: 'Profile', headerTitle: 'Profile' }}
      />
    </ProfileStack.Navigator>
  );
}

export default ProfileNavigator;
