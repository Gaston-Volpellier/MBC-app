import {StyleSheet} from 'react-native';
import {colors} from './variables';

const styles = StyleSheet.create({
  horizontalPadding: {
    paddingHorizontal: 30,
  },
  paddingRegular: {
    paddingBottom: 14,
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
  loginLogo: {
    marginTop: 50,
    marginBottom: 41,
  },
  loginSection: {
    marginBottom: 30,
  },
  spinner: {
    height: '100%',
    width: '100%',
  },
  pressableText: {
    alignItems: 'center',
  },
  homePadding: {
    paddingTop: 35,
    paddingBottom: 29,
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
    flexWrap: 'wrap',
  },
  horizontalAlignAlt: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  borderRadius: {
    borderRadius: 20,
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
});

export default styles;
