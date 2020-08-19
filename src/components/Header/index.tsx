import React, { memo, FC } from 'react';
import { Text, View, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated from 'react-native-reanimated';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { BlurView } from '@react-native-community/blur';

// assets
import { twitter } from 'assets/images';

// styles
import styles, { HEADER_HEIGHT } from './styles';

interface IHeaderProps {
  navigation: any;
  opacityValue: Animated.Node<number>;
  title: string;
  actionsAbsolute?: boolean;
  rightActionOnPress?: (...param: any) => any;
}

export const Header: FC<IHeaderProps> = memo((props) => {
  const { opacityValue, title, actionsAbsolute } = props;

  const { top } = useSafeAreaInsets();

  const height = HEADER_HEIGHT + top;

  const leftStyle = actionsAbsolute && {
    ...styles.actionAbsolute,
    ...styles.left,
    marginTop: top,
  };

  const rightStyle = actionsAbsolute && {
    ...styles.actionAbsolute,
    ...styles.right,
    marginTop: top,
  };

  const renderRightAction = () => (
    <TouchableOpacity activeOpacity={0.5}>
      <Image source={twitter} style={styles.avatar} />
    </TouchableOpacity>
  );

  return (
    <>
      <Animated.View style={[styles.header, { opacity: opacityValue, height }]}>
        <BlurView
          style={[styles.container, { paddingTop: top }]}
          blurType="material">
          {actionsAbsolute || <View style={styles.action} />}
          <Text style={styles.title}>{title}</Text>
          {actionsAbsolute || <View style={styles.action} />}
        </BlurView>
      </Animated.View>
      {actionsAbsolute && <View style={leftStyle} />}
      {actionsAbsolute && <View style={rightStyle}>{renderRightAction()}</View>}
    </>
  );
});
