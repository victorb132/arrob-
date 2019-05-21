import { Platform } from 'react-native';

export default {
  padding: 20,
  ...Platform.select({
    ios: { headerHeight: 64, headerPadding: 0},
    android: { headerHeight: 74, headerPadding: 15 },
  }),
  underline: 'underline'
};