import React, { memo, FC } from 'react';
import { Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated from 'react-native-reanimated';

// styles
import styles, { HEADER_HEIGHT } from './styles';

interface IHeaderProps {
  navigation: any;
  opacityValue: Animated.Node<number>;
  title: string;
}

export const Header: FC<IHeaderProps> = memo((props) => {
  const { opacityValue, title } = props;

  const { top } = useSafeAreaInsets();

  const height = HEADER_HEIGHT + top;

  return (
    <Animated.View
      style={[
        styles.container,
        { opacity: opacityValue, paddingTop: top, height },
      ]}>
      <Text style={styles.title}>{title}</Text>
    </Animated.View>
  );
});
