import React, { memo, FC } from 'react';
import { View } from 'react-native';

interface IMainScreenProps {
  navigation: any;
  route: any;
}

export const MainScreen: FC<IMainScreenProps> = memo(() => {
  return <View />;
});
