import { StyleSheet } from 'react-native';
import { colors } from '../../styles';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    height: hp('8%'),
    width: wp('60%'),
    backgroundColor: colors.primary,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: colors.blue,
  },

  'button-back': {
    backgroundColor: colors.backButton
  },

  'button-group-back': {
    width: wp('35%'),
    marginRight: 15,
    backgroundColor: colors.backButton
  },

  'button-group-next': {
    width: wp('35%'),
    backgroundColor: colors.blue
  },

  'button-value-modal-green': {
    width: wp('75%'),
    backgroundColor: colors.green
  },
  'button-value-modal-blue': {
    width: wp('75%'),
    backgroundColor: colors.blue
  },

  text: {
    color: '#FFF',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center'
  },
});

export default styles;