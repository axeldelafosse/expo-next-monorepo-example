import React from 'react';

import createStackNavigator from 'app/navigation/create-stack-navigator';
import ProfileScreen from 'app/screens/profile';
import { ProfileStackParams } from 'app/navigation/types';
import { navigatorScreenOptions } from 'app/navigation/navigator-screen-options';

const ProfileStack = createStackNavigator<ProfileStackParams>();

function ProfileNavigator() {
  return (
    <ProfileStack.Navigator screenOptions={navigatorScreenOptions}>
      <ProfileStack.Screen
        name="profile"
        component={ProfileScreen}
        options={{ title: 'Profile', headerTitle: 'Profile' }}
      />
    </ProfileStack.Navigator>
  );
}

export default ProfileNavigator;
