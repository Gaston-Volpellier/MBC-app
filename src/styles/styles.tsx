import {StyleSheet} from 'react-native';
import {backgroundColors, colors} from './variables';

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
  borderRadius: {
    borderRadius: 20,
  },
});

export default styles;
