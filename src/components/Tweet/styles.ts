import { StyleSheet } from 'react-native';

// utils
import { GUTTER, COLORS } from 'utils/constants';

const SIZE = 60;

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: GUTTER,
    backgroundColor: COLORS.WHITE,
  },
  avatarContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginRight: GUTTER,
  },
  avatar: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'baseline',
  },
  username: {
    color: COLORS.BLACK,
    fontSize: 14,
    marginRight: GUTTER,
    fontWeight: 'bold',
  },
  date: {
    color: COLORS.GRAY,
    fontSize: 14,
  },
  messageContainer: {
    flex: 1,
  },
  message: {
    color: COLORS.BLACK,
    fontSize: 14,
    lineHeight: 20,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'baseline',
    paddingVertical: GUTTER,
  },
  action: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: GUTTER * 3,
    width: 20,
    height: 20,
  },
});
