import { StyleSheet, Platform } from 'react-native';
import { metrics, colors } from '../../styles';
import { heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.red,
    height: Platform.OS === 'ios' ? 100 : metrics.headerHeight,
    paddingTop: metrics.headerPadding,
    paddingHorizontal: metrics.padding,
    marginTop: -16,
    borderColor: colors.lighter,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    flex: 1,
    height: hp('5%'),
    resizeMode: 'contain',
    marginTop: Platform.OS === 'ios' ? '11%' : '2%',
  },
});

export default styles