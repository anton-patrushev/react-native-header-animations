import { StyleSheet } from 'react-native';

// utils
import { SCREEN_WIDTH, COLORS } from 'utils/constants';

export const HEADER_HEIGHT = 44;
const IMAGE_SIZE = 30;

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
    flex: 1,
    fontSize: 17,
    color: COLORS.BLACK,
    fontWeight: '500',
    alignSelf: 'center',
    textAlign: 'center',
  },
  action: {
    height: '100%',
    width: '20%',
    backgroundColor: COLORS.BLACK,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionAbsolute: {
    position: 'absolute',
    height: '50%',
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  left: {
    top: 0,
    left: 0,
  },
  right: {
    top: 0,
    right: 0,
  },
  avatar: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    borderRadius: IMAGE_SIZE / 2,
  },
});
