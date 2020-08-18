import { StyleSheet } from 'react-native';

// utils
import { SCREEN_WIDTH, COLORS } from 'utils/constants';

export const HEADER_HEIGHT = 44;

export default StyleSheet.create({
  header: {
    width: SCREEN_WIDTH,
    borderBottomColor: COLORS.GRAY,
    borderBottomWidth: 0.5,
    height: HEADER_HEIGHT,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 17,
    color: COLORS.BLACK,
    fontWeight: '500',
  },
});
