import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// components
import { Profile } from 'components/Profile';

// utils
import { PROFILE_STACK } from 'utils/constants';
import { ProfileStackParamsList } from 'utils/types';

const ProfileStack = createStackNavigator<ProfileStackParamsList>();

export const ProfileRouter = memo(() => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name={PROFILE_STACK.PROFILE_SCREEN}
        component={Profile}
      />
    </ProfileStack.Navigator>
  );
});
