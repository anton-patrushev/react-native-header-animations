import { StyleSheet } from 'react-native';

// utils
import { COLORS, GUTTER } from 'utils/constants';

export const HEADER_HEIGHT = 80;

export default StyleSheet.create({
  screen: {
    backgroundColor: COLORS.WHITE,
    paddingTop: HEADER_HEIGHT,
  },
  separator: {
    height: 1,
    backgroundColor: COLORS.GRAY,
    opacity: 0.1,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: HEADER_HEIGHT,
  },
  headerTitle: {
    fontSize: 27,
    color: COLORS.BLACK,
    fontWeight: 'bold',
    marginLeft: GUTTER,
  },
});
