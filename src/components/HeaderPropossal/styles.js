import { StyleSheet, Platform } from 'react-native';
import { metrics, colors } from '../../styles';
import { heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.red,
    height: Platform.OS === 'ios' ? 100 : 80,
    paddingTop: metrics.headerPadding,
    paddingHorizontal: metrics.padding,
    marginTop: -16,
    borderColor: colors.lighter,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    color: 'white',
    alignContent: 'center'
  },
});

export default styles