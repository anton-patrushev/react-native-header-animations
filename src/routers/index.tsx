import React, { memo } from 'react';
import { NavigationContainer } from '@react-navigation/native';

// routers
import { MainRouter } from './MainRouter';

export const Router = memo(() => (
  <NavigationContainer>
    <MainRouter />
  </NavigationContainer>
));
