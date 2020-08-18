import React, { memo } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

// routers
import { MainRouter } from './MainRouter';

export const Router = memo(() => (
  <SafeAreaProvider>
    <NavigationContainer>
      <MainRouter />
    </NavigationContainer>
  </SafeAreaProvider>
));
