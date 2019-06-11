import { StyleSheet, Platform } from 'react-native';
import { metrics, colors } from '../../styles';
import { heightPercentageToDP as hp, widthPercentageToDP} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.red,
    height: metrics.headerHeight,
    paddingTop: metrics.headerPadding,
    paddingHorizontal: metrics.padding,
    marginTop: -16,
    borderColor: colors.lighter,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  icon: {
    color: colors.white,
    marginTop: Platform.OS === 'ios' ? 10 : 5
  },

  title: {
    flex: 1,
    height: hp('15%'),
    width: widthPercentageToDP('20%'),
    resizeMode: 'contain',
    marginTop: '2%'
  },
});

export default styles