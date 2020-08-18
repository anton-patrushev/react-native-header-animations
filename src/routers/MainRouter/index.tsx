import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// components
import { ProfileScreen } from 'components/Profile';
import { MainScreen } from 'components/Main';

// utils
import { MAIN_STACK } from 'utils/constants';
import { MainStackParamsList } from 'utils/types';

// options
import { MainScreenOptions } from './options';

const MainStack = createStackNavigator<MainStackParamsList>();

export const MainRouter = memo(() => {
  return (
    <MainStack.Navigator headerMode="float">
      <MainStack.Screen
        name={MAIN_STACK.MAIN_SCREEN}
        component={MainScreen}
        options={MainScreenOptions}
      />
      <MainStack.Screen
        name={MAIN_STACK.PROFILE_SCREEN}
        component={ProfileScreen}
      />
    </MainStack.Navigator>
  );
});
