import {StyleSheet} from 'react-native';
import {colors} from './variables';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  horizontalPadding: {
    paddingHorizontal: wp('5%'),
  },
  paddingRegular: {
    paddingHorizontal: 28,
    paddingVertical: 20,
  },
  centerContainer: {
    alignItems: 'center',
  },
  homeLogo: {
    height: 90,
    width: 195,
    marginBottom: 61,
  },
  mainLogo: {
    height: 59,
    width: 128,
  },
  spinner: {
    maxHeight: 68,
  },
  pressableText: {
    alignItems: 'center',
  },
  homePadding: {
    paddingTop: 45,
    paddingBottom: 40,
  },
  previewScreen: {
    backgroundColor: colors.quaternary,
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
  },
  horizontalAlign: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  horizontalAlignAlt: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },
  borderRadius: {
    borderRadius: 20,
  },
  borderRadiusTop: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  textAlignC: {
    textAlign: 'center',
  },
  justifyC: {
    justifyContent: 'center',
  },
  itemsC: {
    alignItems: 'center',
  },
  shadow: {
    shadowColor: colors.black,
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  mb10: {
    marginBottom: 10,
  },
  mb14: {
    marginBottom: 14,
  },
  mb20: {
    marginBottom: 20,
  },
  mb30: {
    marginBottom: 30,
  },
  mb40: {
    marginBottom: 40,
  },
  mb50: {
    marginBottom: 50,
  },
  mb60: {
    marginBottom: 60,
  },
  w100: {
    width: '100%',
  },
  iconStack: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
