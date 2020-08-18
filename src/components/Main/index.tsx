import React, { memo, FC, useCallback, useEffect } from 'react';
import { View, FlatList, ListRenderItem } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import Animated from 'react-native-reanimated';

// components
import { Tweet, ITweetProps } from 'components/Tweet';
import { Header } from 'components/Header';

// utils
import { defaultKeyExtractor } from 'utils/helpers';
import { MAIN_STACK } from 'utils/constants';
import { MainStackParamsList } from 'utils/types';

// assets
import { FEED } from 'assets/mocks';

// styles
import styles, { HEADER_HEIGHT } from './styles';

interface IMainScreenProps {
  navigation: StackNavigationProp<MainStackParamsList, MAIN_STACK.MAIN_SCREEN>;
  route: any;
}

const renderSeparator = () => <View style={styles.separator} />;

export const MainScreen: FC<IMainScreenProps> = memo((props) => {
  const { navigation } = props;

  const scrollOffset = Animated.useValue(0);

  const headerOpacity = scrollOffset.interpolate({
    inputRange: [HEADER_HEIGHT - 5, HEADER_HEIGHT + 10],
    outputRange: [0, 1],
    extrapolate: Animated.Extrapolate.CLAMP,
  });

  const opacityValue = scrollOffset.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [1, 0],
    extrapolate: Animated.Extrapolate.CLAMP,
  });

  const scaleValue = scrollOffset.interpolate({
    inputRange: [-15, 0],
    outputRange: [1.2, 1],
    extrapolate: Animated.Extrapolate.CLAMP,
  });

  const transX = scrollOffset.interpolate({
    inputRange: [-15, 0],
    outputRange: [5, 0],
    extrapolate: Animated.Extrapolate.CLAMP,
  });

  const scrollHandler = Animated.event([
    { nativeEvent: { contentOffset: { y: scrollOffset } } },
  ]);

  const renderItem: ListRenderItem<ITweetProps> = useCallback(({ item }) => {
    return <Tweet {...item} />;
  }, []);

  const renderHeader = useCallback(() => {
    const headerStyles = { opacity: opacityValue };
    const headerTitleStyles = {
      transform: [{ scale: scaleValue, translateX: transX }],
    };

    return (
      <Animated.View style={[styles.header, headerStyles]}>
        <Animated.Text style={[styles.headerTitle, headerTitleStyles]}>
          Feed
        </Animated.Text>
      </Animated.View>
    );
  }, [opacityValue, scaleValue, transX]);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      header: ({ ...navigationProps }) => (
        <Header
          {...navigationProps}
          opacityValue={headerOpacity}
          title={'Feed'}
        />
      ),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerOpacity]);

  return (
    <FlatList
      style={styles.screen}
      data={FEED}
      renderItem={renderItem}
      keyExtractor={defaultKeyExtractor}
      ListHeaderComponent={renderHeader}
      ItemSeparatorComponent={renderSeparator}
      scrollEventThrottle={16}
      renderScrollComponent={(scrollProps) => (
        <Animated.ScrollView {...scrollProps} onScroll={scrollHandler} />
      )}
    />
  );
});
