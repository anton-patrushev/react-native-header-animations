import React, { memo } from 'react';
import { NavigationContainer } from '@react-navigation/native';

// routers
import { ProfileRouter } from './ProfileRouter';

export const Router = memo(() => (
  <NavigationContainer>
    <ProfileRouter />
  </NavigationContainer>
));
