import React, { memo, FC, useCallback } from 'react';
import { View, FlatList, ListRenderItem } from 'react-native';
import Animated from 'react-native-reanimated';

// components
import { Tweet, ITweetProps } from 'components/Tweet';

// utils
import { defaultKeyExtractor } from 'utils/helpers';

// assets
import { FEED } from 'assets/mocks';

// styles
import styles from './styles';

interface IMainScreenProps {
  navigation: any;
  route: any;
}

const HEADER_HEIGHT = 80;

const renderSeparator = () => <View style={styles.separator} />;

export const MainScreen: FC<IMainScreenProps> = memo(() => {
  const scrollOffset = Animated.useValue(0);

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
    return (
      <Animated.View
        style={[
          styles.header,
          { height: HEADER_HEIGHT },
          { opacity: opacityValue },
        ]}>
        <Animated.Text
          style={[
            styles.headerTitle,
            { transform: [{ scale: scaleValue, translateX: transX }] },
          ]}>
          Feed
        </Animated.Text>
      </Animated.View>
    );
  }, [opacityValue, scaleValue, transX]);

  return (
    <View>
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
    </View>
  );
});
