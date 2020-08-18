import { StyleSheet } from 'react-native';

// utils
import { SCREEN_WIDTH, COLORS } from 'utils/constants';

export const HEADER_HEIGHT = 44;

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: SCREEN_WIDTH,
    backgroundColor: COLORS.WHITE,
    borderBottomColor: COLORS.GRAY,
    borderBottomWidth: 0.5,
    height: HEADER_HEIGHT,
  },
  title: {
    fontSize: 17,
    color: COLORS.BLACK,
  },
});
