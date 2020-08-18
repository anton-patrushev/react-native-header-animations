import { StyleSheet } from 'react-native';

// utils
import { COLORS, GUTTER } from 'utils/constants';

export default StyleSheet.create({
  screen: {
    backgroundColor: COLORS.WHITE,
    paddingTop: 100,
  },
  separator: {
    height: 1,
    backgroundColor: COLORS.GRAY,
    opacity: 0.1,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  headerTitle: {
    fontSize: 27,
    color: COLORS.BLACK,
    fontWeight: 'bold',
    marginLeft: GUTTER,
  },
});
