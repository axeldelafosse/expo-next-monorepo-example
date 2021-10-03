import React from 'react';

import createStackNavigator from 'app/navigation/create-stack-navigator';
import ProfileScreen from 'app/screens/profile';
import { ProfileStackParams } from 'app/navigation/types';

const ProfileStack = createStackNavigator<ProfileStackParams>();

function ProfileNavigator() {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        animationEnabled: true,
        headerShown: true,
        headerShadowVisible: false,
        headerBackTitleVisible: false,
        headerStyle: {
          // Similar to `headerShadowVisible` but for web
          // @ts-ignore
          borderBottomWidth: 0
        }
      }}
    >
      <ProfileStack.Screen
        name="profile"
        component={ProfileScreen}
        options={{ title: 'Profile', headerTitle: 'Profile' }}
      />
    </ProfileStack.Navigator>
  );
}

export default ProfileNavigator;
